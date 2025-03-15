import { parseMarkdown, songDataToMarkdown } from './markdownParser';
import { Song, SongData } from '../types/song';
import { config, env, isDev } from './env';

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

// Get the base API URL from environment config
const API_BASE_URL = config.apiUrl || 'http://localhost:3000/api';

// Sample songs for the browser environment
const SAMPLE_SONGS: Record<string, SongData> = {
  'sample-1': {
    songInfo: {
      title: 'Imagine',
      artist: 'John Lennon',
      key: 'C',
      tempo: 75
    },
    songData: [
      { lyric: 'Imagine there\'s no heaven', chords: [{ text: 'C', position: 0 }, { text: 'F', position: 13 }] },
      { lyric: 'It\'s easy if you try', chords: [{ text: 'C', position: 0 }, { text: 'F', position: 10 }] },
      { lyric: 'No hell below us', chords: [{ text: 'C', position: 0 }, { text: 'F', position: 8 }] },
      { lyric: 'Above us only sky', chords: [{ text: 'C', position: 0 }, { text: 'F', position: 10 }] },
      { lyric: 'Imagine all the people', chords: [{ text: 'F', position: 0 }, { text: 'G', position: 10 }, { text: 'C', position: 17 }] },
      { lyric: 'Living for today', chords: [{ text: 'F', position: 0 }, { text: 'G', position: 8 }, { text: 'C', position: 15 }] },
    ]
  },
  'sample-2': {
    songInfo: {
      title: 'Wonderwall',
      artist: 'Oasis',
      key: 'F#m',
      tempo: 86
    },
    songData: [
      { lyric: 'Today is gonna be the day that they\'re gonna throw it back to you', chords: [{ text: 'F#m', position: 0 }, { text: 'A', position: 20 }, { text: 'E', position: 40 }] },
      { lyric: 'By now you should\'ve somehow realized what you gotta do', chords: [{ text: 'F#m', position: 0 }, { text: 'A', position: 20 }, { text: 'E', position: 40 }] },
      { lyric: 'I don\'t believe that anybody feels the way I do about you now', chords: [{ text: 'F#m', position: 0 }, { text: 'A', position: 20 }, { text: 'E', position: 40 }, { text: 'B', position: 55 }] },
      { lyric: '' },
      { lyric: 'Backbeat, the word is on the street that the fire in your heart is out', chords: [{ text: 'F#m', position: 0 }, { text: 'A', position: 20 }, { text: 'E', position: 40 }] },
      { lyric: 'I\'m sure you\'ve heard it all before, but you never really had a doubt', chords: [{ text: 'F#m', position: 0 }, { text: 'A', position: 20 }, { text: 'E', position: 40 }] },
      { lyric: 'I don\'t believe that anybody feels the way I do about you now', chords: [{ text: 'F#m', position: 0 }, { text: 'A', position: 20 }, { text: 'E', position: 40 }, { text: 'B', position: 55 }] },
    ]
  },
  'sample-3': {
    songInfo: {
      title: 'Let It Be',
      artist: 'The Beatles',
      key: 'C',
      tempo: 71
    },
    songData: [
      { lyric: 'When I find myself in times of trouble', chords: [{ text: 'C', position: 0 }, { text: 'G', position: 15 }] },
      { lyric: 'Mother Mary comes to me', chords: [{ text: 'Am', position: 0 }, { text: 'F', position: 15 }] },
      { lyric: 'Speaking words of wisdom, let it be', chords: [{ text: 'C', position: 0 }, { text: 'G', position: 15 }, { text: 'F', position: 25 }, { text: 'C', position: 35 }] },
      { lyric: 'And in my hour of darkness', chords: [{ text: 'C', position: 0 }, { text: 'G', position: 15 }] },
      { lyric: 'She is standing right in front of me', chords: [{ text: 'Am', position: 0 }, { text: 'F', position: 20 }] },
      { lyric: 'Speaking words of wisdom, let it be', chords: [{ text: 'C', position: 0 }, { text: 'G', position: 15 }, { text: 'F', position: 25 }, { text: 'C', position: 35 }] },
    ]
  }
};

// Helper function to safely execute API operations
async function safeApiOperation<T>(
  operation: () => Promise<T>,
  fallback: T,
  operationName: string
): Promise<T> {
  try {
    return await operation();
  } catch (error) {
    console.error(`Error in ${operationName}:`, error);
    return fallback;
  }
}

// Song operations using API endpoints
export const songOperations = {
  // Initialize the database connection check
  init: async (): Promise<boolean> => {
    try {
      const response = await fetch(`${API_BASE_URL}/songs`);
      return response.ok;
    } catch (error) {
      console.error('Database initialization error:', error);
      return false;
    }
  },

  // Check database connection
  checkConnection: async (): Promise<boolean> => {
    try {
      const response = await fetch(`${API_BASE_URL}/songs`);
      return response.ok;
    } catch (error) {
      console.error('Database connection check error:', error);
      return false;
    }
  },
  
  // Get all songs
  getAllSongs: async (): Promise<Song[]> => {
    return safeApiOperation(
      async () => {
        const response = await fetch(`${API_BASE_URL}/songs`);
        if (!response.ok) throw new Error('Failed to fetch songs');
        const songs = await response.json();
        return songs.map((song: any) => ({
          id: song.id,
          title: song.title,
          artist: song.artist,
          filename: `${song.id}.md` // Virtual filename for compatibility
        }));
      },
      FALLBACK_SONGS,
      'Get all songs'
    );
  },
  
  // Get a song by ID
  getSongById: async (id: string): Promise<SongData | null> => {
    return safeApiOperation(
      async () => {
        const response = await fetch(`${API_BASE_URL}/songs?id=${id}`);
        if (!response.ok) throw new Error('Failed to fetch song');
        const song = await response.json();
        
        return {
          songInfo: {
            title: song.title,
            artist: song.artist,
            key: song.key || undefined,
            tempo: song.tempo || undefined,
            timeSignature: song.timeSignature || undefined
          },
          songData: song.content
        };
      },
      id === 'fallback-1' || id === 'fallback-2' ? FALLBACK_SONG_DATA : null,
      `Get song ${id}`
    );
  },
  
  // Create a new song
  createSong: async (songData: SongData): Promise<string | null> => {
    return safeApiOperation(
      async () => {
        const response = await fetch(`${API_BASE_URL}/songs`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(songData)
        });
        if (!response.ok) throw new Error('Failed to create song');
        const song = await response.json();
        return song.id;
      },
      null,
      'Create song'
    );
  },
  
  // Update an existing song
  updateSong: async (id: string, markdown: string): Promise<boolean> => {
    try {
      const songData = parseMarkdown(markdown);
      
      if (!songData.songInfo || !songData.songData) {
        console.error('Invalid song data structure: missing songInfo or songData');
        return false;
      }
      
      if (!songData.songInfo.title || !songData.songInfo.artist) {
        console.error('Invalid song data: missing title or artist');
        return false;
      }
      
      return safeApiOperation(
        async () => {
          const response = await fetch(`${API_BASE_URL}/songs?id=${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(songData)
          });
          return response.ok;
        },
        false,
        `Update song ${id}`
      );
    } catch (error) {
      console.error('Error parsing markdown for song update:', error);
      return false;
    }
  },
  
  // Delete a song
  deleteSong: async (id: string): Promise<boolean> => {
    return safeApiOperation(
      async () => {
        const response = await fetch(`${API_BASE_URL}/songs?id=${id}`, {
          method: 'DELETE'
        });
        return response.ok;
      },
      false,
      `Delete song ${id}`
    );
  },
  
  // Add a tag to a song
  addTagToSong: async (songId: string, tagName: string): Promise<boolean> => {
    return safeApiOperation(
      async () => {
        const response = await fetch(`${API_BASE_URL}/songs/${songId}/tags`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: tagName })
        });
        return response.ok;
      },
      false,
      `Add tag ${tagName} to song ${songId}`
    );
  },
  
  // Remove a tag from a song
  removeTagFromSong: async (songId: string, tagName: string): Promise<boolean> => {
    return safeApiOperation(
      async () => {
        const response = await fetch(`${API_BASE_URL}/songs/${songId}/tags/${tagName}`, {
          method: 'DELETE'
        });
        return response.ok;
      },
      false,
      `Remove tag ${tagName} from song ${songId}`
    );
  },
  
  // Get all tags
  getAllTags: async () => {
    return safeApiOperation(
      async () => {
        const response = await fetch(`${API_BASE_URL}/tags`);
        if (!response.ok) throw new Error('Failed to fetch tags');
        return await response.json();
      },
      [],
      'Get all tags'
    );
  }
}; 