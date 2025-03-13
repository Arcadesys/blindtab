import { PrismaClient } from '@prisma/client';
import { parseMarkdown, songDataToMarkdown } from './markdownParser';
import { SongData, Song } from '../types/song';

// Sample fallback data in case the database is unavailable
const FALLBACK_SONGS: Song[] = [
  {
    id: 'fallback-1',
    title: 'Fallback Song 1',
    artist: 'Database Error',
    filename: 'fallback-1.md'
  },
  {
    id: 'fallback-2',
    title: 'Fallback Song 2',
    artist: 'Database Error',
    filename: 'fallback-2.md'
  }
];

// Fallback song data
const FALLBACK_SONG_DATA: SongData = {
  songInfo: {
    title: 'Database Error',
    artist: 'Could not load song',
  },
  songData: [
    { lyric: 'Database connection error.' },
    { lyric: 'Please try again later.' },
    { lyric: '' },
    { lyric: 'If this error persists, check your database connection.' }
  ]
};

// Initialize Prisma client with a safer approach
let prisma: PrismaClient | null = null;
let dbInitialized = false;

// Try to initialize Prisma, but don't block the app if it fails
const initPrisma = async () => {
  if (dbInitialized) return;
  
  try {
    prisma = new PrismaClient();
    dbInitialized = true;
    console.log('Database connection initialized successfully');
    
    // Add connection event handlers
    prisma.$on('query', (e) => {
      console.log('Query: ' + e.query);
      console.log('Duration: ' + e.duration + 'ms');
    });
    
    // Handle connection errors
    prisma.$on('error', (e) => {
      console.error('Prisma error:', e);
      dbInitialized = false;
      prisma = null;
    });
  } catch (error) {
    console.error('Failed to initialize Prisma client:', error);
    dbInitialized = false;
    prisma = null;
  }
};

// Initialize Prisma in the background
initPrisma().catch(error => {
  console.error('Background Prisma initialization failed:', error);
});

// Helper function to safely execute database operations with fallback
const safeDbOperation = async <T>(
  operation: (client: PrismaClient) => Promise<T>,
  fallbackValue: T,
  operationName: string = 'database operation'
): Promise<T> => {
  // If Prisma isn't initialized, return fallback immediately
  if (!prisma || !dbInitialized) {
    console.warn(`Database not initialized, using fallback for ${operationName}`);
    return fallbackValue;
  }
  
  try {
    // Create a timeout promise
    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error(`${operationName} timed out after 3000ms`)), 3000);
    });
    
    // Execute the operation with a timeout
    const result = await Promise.race([operation(prisma), timeoutPromise]);
    return result as T;
  } catch (error) {
    console.error(`Error during ${operationName}:`, error);
    
    // If it's a connection error, try to reinitialize Prisma
    if (error.message && (error.message.includes('timed out') || 
        error.code === 'P1001' || error.code === 'P1002')) {
      console.warn('Database connection issue detected, attempting to reconnect...');
      dbInitialized = false;
      prisma = null;
      initPrisma().catch(e => console.error('Reconnection failed:', e));
    }
    
    return fallbackValue;
  }
};

// Song operations with improved error handling and fallbacks
export const songOperations = {
  // Get all songs
  getAllSongs: async (): Promise<Song[]> => {
    return safeDbOperation(
      async (client) => {
        const songs = await client.song.findMany({
          orderBy: { title: 'asc' },
          include: { tags: true }
        });
        
        return songs.map(song => ({
          id: song.id,
          title: song.title,
          artist: song.artist,
          filename: `${song.id}.md` // Virtual filename
        }));
      },
      FALLBACK_SONGS,
      'Get all songs'
    );
  },
  
  // Get a song by ID with timeout and error handling
  getSongById: async (id: string): Promise<SongData | null> => {
    return safeDbOperation(
      async (client) => {
        const song = await client.song.findUnique({
          where: { id },
          include: { tags: true }
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
      },
      id === 'fallback-1' || id === 'fallback-2' ? FALLBACK_SONG_DATA : null,
      `Get song ${id}`
    );
  },
  
  // Create a new song
  createSong: async (songData: SongData): Promise<string | null> => {
    return safeDbOperation(
      async (client) => {
        // Convert SongData to markdown
        const markdown = songDataToMarkdown(songData);
        
        const song = await client.song.create({
          data: {
            title: songData.songInfo.title,
            artist: songData.songInfo.artist,
            content: markdown,
            key: songData.songInfo.key,
            tempo: songData.songInfo.tempo,
            timeSignature: songData.songInfo.timeSignature
          }
        });
        
        return song.id;
      },
      null,
      'Create song'
    );
  },
  
  // Update an existing song
  updateSong: async (id: string, songData: SongData): Promise<boolean> => {
    return safeDbOperation(
      async (client) => {
        // Convert SongData to markdown
        const markdown = songDataToMarkdown(songData);
        
        await client.song.update({
          where: { id },
          data: {
            title: songData.songInfo.title,
            artist: songData.songInfo.artist,
            content: markdown,
            key: songData.songInfo.key,
            tempo: songData.songInfo.tempo,
            timeSignature: songData.songInfo.timeSignature
          }
        });
        
        return true;
      },
      false,
      `Update song ${id}`
    );
  },
  
  // Delete a song
  deleteSong: async (id: string): Promise<boolean> => {
    return safeDbOperation(
      async (client) => {
        await client.song.delete({
          where: { id }
        });
        
        return true;
      },
      false,
      `Delete song ${id}`
    );
  },
  
  // Add a tag to a song
  addTagToSong: async (songId: string, tagName: string): Promise<boolean> => {
    return safeDbOperation(
      async (client) => {
        // Find or create the tag
        const tag = await client.tag.upsert({
          where: { name: tagName },
          update: {},
          create: { name: tagName }
        });
        
        // Add the tag to the song
        await client.song.update({
          where: { id: songId },
          data: {
            tags: {
              connect: { id: tag.id }
            }
          }
        });
        
        return true;
      },
      false,
      `Add tag ${tagName} to song ${songId}`
    );
  },
  
  // Remove a tag from a song
  removeTagFromSong: async (songId: string, tagName: string): Promise<boolean> => {
    return safeDbOperation(
      async (client) => {
        // Find the tag
        const tag = await client.tag.findUnique({
          where: { name: tagName }
        });
        
        if (!tag) return false;
        
        // Remove the tag from the song
        await client.song.update({
          where: { id: songId },
          data: {
            tags: {
              disconnect: { id: tag.id }
            }
          }
        });
        
        return true;
      },
      false,
      `Remove tag ${tagName} from song ${songId}`
    );
  },
  
  // Get all tags
  getAllTags: async () => {
    return safeDbOperation(
      async (client) => {
        return await client.tag.findMany({
          orderBy: {
            name: 'asc'
          }
        });
      },
      [],
      'Get all tags'
    );
  },
  
  // Check database connection
  checkConnection: async (): Promise<boolean> => {
    if (!prisma || !dbInitialized) {
      await initPrisma();
    }
    
    return safeDbOperation(
      async (client) => {
        // Simple query to check connection
        await client.$queryRaw`SELECT 1`;
        return true;
      },
      false,
      'Check database connection'
    );
  }
}; 