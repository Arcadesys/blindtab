import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { SongData } from './src/types/song';

const prisma = new PrismaClient();
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Get all songs
app.get('/api/songs', async (req, res) => {
  try {
    console.log('Fetching all songs...');
    const songs = await prisma.song.findMany({
      select: {
        id: true,
        title: true,
        artist: true,
        content: true
      }
    });
    console.log(`Found ${songs.length} songs`);
    // Parse the content back to an object
    const songsWithParsedContent = songs.map(song => ({
      ...song,
      content: JSON.parse(song.content)
    }));
    res.json(songsWithParsedContent);
  } catch (error) {
    console.error('Error getting songs:', error);
    res.status(500).json({ error: 'Failed to get songs', details: error.message });
  }
});

// Get a song by ID
app.get('/api/songs/:id', async (req, res) => {
  try {
    console.log(`Fetching song with ID: ${req.params.id}`);
    const song = await prisma.song.findUnique({
      where: { id: req.params.id },
      include: { tags: true }
    });
    if (!song) {
      return res.status(404).json({ error: 'Song not found' });
    }
    res.json(song);
  } catch (error) {
    console.error('Error getting song:', error);
    res.status(500).json({ error: 'Failed to get song', details: error.message });
  }
});

// Create a song
app.post('/api/songs', async (req, res) => {
  try {
    console.log('Creating new song:', req.body);
    const songData = req.body;
    const song = await prisma.song.create({
      data: {
        title: songData.songInfo.title,
        artist: songData.songInfo.artist,
        key: songData.songInfo.key,
        tempo: songData.songInfo.tempo,
        timeSignature: songData.songInfo.timeSignature,
        content: JSON.stringify(songData.songData)
      }
    });
    res.status(201).json(song);
  } catch (error) {
    console.error('Error creating song:', error);
    res.status(500).json({ error: 'Failed to create song', details: error.message });
  }
});

// Update a song
app.put('/api/songs/:id', async (req, res) => {
  try {
    console.log(`Updating song with ID: ${req.params.id}`);
    const songData = req.body;
    const song = await prisma.song.update({
      where: { id: req.params.id },
      data: {
        title: songData.songInfo.title,
        artist: songData.songInfo.artist,
        key: songData.songInfo.key,
        tempo: songData.songInfo.tempo,
        timeSignature: songData.songInfo.timeSignature,
        content: songData.songData
      }
    });
    res.json(song);
  } catch (error) {
    console.error('Error updating song:', error);
    res.status(500).json({ error: 'Failed to update song', details: error.message });
  }
});

// Delete a song
app.delete('/api/songs/:id', async (req, res) => {
  try {
    console.log(`Deleting song with ID: ${req.params.id}`);
    await prisma.song.delete({
      where: { id: req.params.id }
    });
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting song:', error);
    res.status(500).json({ error: 'Failed to delete song', details: error.message });
  }
});

// Get all tags
app.get('/api/tags', async (req, res) => {
  try {
    console.log('Fetching all tags...');
    const tags = await prisma.tag.findMany();
    console.log(`Found ${tags.length} tags`);
    res.json(tags);
  } catch (error) {
    console.error('Error getting tags:', error);
    res.status(500).json({ error: 'Failed to get tags', details: error.message });
  }
});

// Add tag to song
app.post('/api/songs/:id/tags', async (req, res) => {
  try {
    const { name } = req.body;
    const tag = await prisma.tag.upsert({
      where: { name },
      update: {},
      create: { name }
    });
    await prisma.song.update({
      where: { id: req.params.id },
      data: {
        tags: {
          connect: { id: tag.id }
        }
      }
    });
    res.json({ success: true });
  } catch (error) {
    console.error('Error adding tag:', error);
    res.status(500).json({ error: 'Failed to add tag' });
  }
});

// Remove tag from song
app.delete('/api/songs/:id/tags/:tagName', async (req, res) => {
  try {
    const tag = await prisma.tag.findUnique({
      where: { name: req.params.tagName }
    });
    if (!tag) {
      return res.status(404).json({ error: 'Tag not found' });
    }
    await prisma.song.update({
      where: { id: req.params.id },
      data: {
        tags: {
          disconnect: { id: tag.id }
        }
      }
    });
    res.json({ success: true });
  } catch (error) {
    console.error('Error removing tag:', error);
    res.status(500).json({ error: 'Failed to remove tag' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error', details: err.message });
});

// Start server
const server = app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
  console.log('Environment:', process.env.NODE_ENV);
  console.log('Database URL:', process.env.DATABASE_URL?.replace(/\/\/.*@/, '//<credentials>@'));
})

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(async () => {
    await prisma.$disconnect();
    console.log('Server closed');
    process.exit(0);
  });
}); 