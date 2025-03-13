import { PrismaClient } from '@prisma/client';
import { parseMarkdown, songDataToMarkdown } from './markdownParser';
import { SongData } from '../types/song';

// Initialize Prisma client
const prisma = new PrismaClient();

// Export for use in other files
export { prisma };

// Song operations
export const songOperations = {
  // Get all songs
  getAllSongs: async () => {
    try {
      const songs = await prisma.song.findMany({
        orderBy: {
          title: 'asc',
        },
        include: {
          tags: true,
        },
      });
      
      return songs.map(song => ({
        id: song.id,
        title: song.title,
        artist: song.artist,
        filename: `${song.id}.md`, // Virtual filename
      }));
    } catch (error) {
      console.error('Error fetching songs:', error);
      return [];
    }
  },
  
  // Get a song by ID
  getSongById: async (id: string): Promise<SongData | null> => {
    try {
      const song = await prisma.song.findUnique({
        where: { id },
        include: {
          tags: true,
        },
      });
      
      if (!song) return null;
      
      // Parse the markdown content to SongData
      const songData = parseMarkdown(song.content);
      
      // Add any additional metadata from the database
      if (song.key && !songData.songInfo.key) {
        songData.songInfo.key = song.key;
      }
      
      if (song.tempo && !songData.songInfo.tempo) {
        songData.songInfo.tempo = song.tempo;
      }
      
      if (song.timeSignature && !songData.songInfo.timeSignature) {
        songData.songInfo.timeSignature = song.timeSignature;
      }
      
      return songData;
    } catch (error) {
      console.error(`Error fetching song ${id}:`, error);
      return null;
    }
  },
  
  // Create a new song
  createSong: async (songData: SongData): Promise<string | null> => {
    try {
      // Convert SongData to markdown
      const markdown = songDataToMarkdown(songData);
      
      // Create the song in the database
      const song = await prisma.song.create({
        data: {
          title: songData.songInfo.title,
          artist: songData.songInfo.artist,
          content: markdown,
          key: songData.songInfo.key,
          tempo: songData.songInfo.tempo,
          timeSignature: songData.songInfo.timeSignature,
        },
      });
      
      return song.id;
    } catch (error) {
      console.error('Error creating song:', error);
      return null;
    }
  },
  
  // Update an existing song
  updateSong: async (id: string, songData: SongData): Promise<boolean> => {
    try {
      // Convert SongData to markdown
      const markdown = songDataToMarkdown(songData);
      
      // Update the song in the database
      await prisma.song.update({
        where: { id },
        data: {
          title: songData.songInfo.title,
          artist: songData.songInfo.artist,
          content: markdown,
          key: songData.songInfo.key,
          tempo: songData.songInfo.tempo,
          timeSignature: songData.songInfo.timeSignature,
        },
      });
      
      return true;
    } catch (error) {
      console.error(`Error updating song ${id}:`, error);
      return false;
    }
  },
  
  // Delete a song
  deleteSong: async (id: string): Promise<boolean> => {
    try {
      await prisma.song.delete({
        where: { id },
      });
      
      return true;
    } catch (error) {
      console.error(`Error deleting song ${id}:`, error);
      return false;
    }
  },
  
  // Add a tag to a song
  addTagToSong: async (songId: string, tagName: string): Promise<boolean> => {
    try {
      // Find or create the tag
      const tag = await prisma.tag.upsert({
        where: { name: tagName },
        update: {},
        create: { name: tagName },
      });
      
      // Add the tag to the song
      await prisma.song.update({
        where: { id: songId },
        data: {
          tags: {
            connect: { id: tag.id },
          },
        },
      });
      
      return true;
    } catch (error) {
      console.error(`Error adding tag ${tagName} to song ${songId}:`, error);
      return false;
    }
  },
  
  // Remove a tag from a song
  removeTagFromSong: async (songId: string, tagName: string): Promise<boolean> => {
    try {
      // Find the tag
      const tag = await prisma.tag.findUnique({
        where: { name: tagName },
      });
      
      if (!tag) return false;
      
      // Remove the tag from the song
      await prisma.song.update({
        where: { id: songId },
        data: {
          tags: {
            disconnect: { id: tag.id },
          },
        },
      });
      
      return true;
    } catch (error) {
      console.error(`Error removing tag ${tagName} from song ${songId}:`, error);
      return false;
    }
  },
  
  // Get all tags
  getAllTags: async () => {
    try {
      return await prisma.tag.findMany({
        orderBy: {
          name: 'asc',
        },
      });
    } catch (error) {
      console.error('Error fetching tags:', error);
      return [];
    }
  },
}; 