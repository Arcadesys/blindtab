import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import { SongData } from './src/types/song';

// In-memory storage
const songs = new Map<string, any>();

// Add a test song
const testSong = {
  id: 'test-song-1',
  title: 'Test Song',
  artist: 'Test Artist',
  content: [
    {
      lyric: 'This is a test song',
      chords: [{ text: 'C', position: 0 }]
    }
  ]
};
songs.set(testSong.id, testSong);

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

// Get all songs
app.get('/api/songs', (req, res) => {
  try {
    console.log('Fetching all songs...');
    const songList = Array.from(songs.values());
    console.log(`Found ${songList.length} songs`);
    res.json(songList);
  } catch (error) {
    console.error('Error getting songs:', error);
    res.status(500).json({ error: 'Failed to get songs' });
  }
});

// Get a song by ID
app.get('/api/songs/:id', (req, res) => {
  try {
    console.log(`Fetching song with ID: ${req.params.id}`);
    const song = songs.get(req.params.id);
    if (!song) {
      return res.status(404).json({ error: 'Song not found' });
    }
    res.json(song);
  } catch (error) {
    console.error('Error getting song:', error);
    res.status(500).json({ error: 'Failed to get song' });
  }
});

// Create a song
app.post('/api/songs', (req, res) => {
  try {
    console.log('Creating new song:', req.body);
    const songData = req.body;
    const id = uuidv4();
    const song = {
      id,
      title: songData.songInfo.title,
      artist: songData.songInfo.artist,
      key: songData.songInfo.key,
      tempo: songData.songInfo.tempo,
      timeSignature: songData.songInfo.timeSignature,
      content: songData.songData
    };
    songs.set(id, song);
    res.status(201).json(song);
  } catch (error) {
    console.error('Error creating song:', error);
    res.status(500).json({ error: 'Failed to create song' });
  }
});

// Update a song
app.put('/api/songs/:id', (req, res) => {
  try {
    const id = req.params.id;
    console.log(`Updating song with ID: ${id}`);
    if (!songs.has(id)) {
      return res.status(404).json({ error: 'Song not found' });
    }
    const songData = req.body;
    const song = {
      id,
      title: songData.songInfo.title,
      artist: songData.songInfo.artist,
      key: songData.songInfo.key,
      tempo: songData.songInfo.tempo,
      timeSignature: songData.songInfo.timeSignature,
      content: songData.songData
    };
    songs.set(id, song);
    res.json(song);
  } catch (error) {
    console.error('Error updating song:', error);
    res.status(500).json({ error: 'Failed to update song' });
  }
});

// Delete a song
app.delete('/api/songs/:id', (req, res) => {
  try {
    const id = req.params.id;
    console.log(`Deleting song with ID: ${id}`);
    if (!songs.has(id)) {
      return res.status(404).json({ error: 'Song not found' });
    }
    songs.delete(id);
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting song:', error);
    res.status(500).json({ error: 'Failed to delete song' });
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
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
const server = app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
  console.log('Environment:', process.env.NODE_ENV);
  console.log('Songs in memory:', songs.size);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
}); 