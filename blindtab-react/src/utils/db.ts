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

// Browser-compatible database mock using localStorage
class BrowserDB {
  private initialized: boolean = false;
  private songs: Record<string, Song> = {};
  private songData: Record<string, SongData> = {};
  private storagePrefix: string;
  
  constructor() {
    // Use environment-specific storage prefix to avoid conflicts between environments
    this.storagePrefix = config.storagePrefix;
    this.init();
  }
  
  init() {
    try {
      // Try to load from localStorage
      const savedSongs = localStorage.getItem(`${this.storagePrefix}songs`);
      const savedSongData = localStorage.getItem(`${this.storagePrefix}song_data`);
      
      if (savedSongs) {
        this.songs = JSON.parse(savedSongs);
      } else {
        // Initialize with sample songs if nothing in localStorage
        this.songs = {
          'sample-1': { id: 'sample-1', title: 'Imagine', artist: 'John Lennon', filename: 'sample-1.md' },
          'sample-2': { id: 'sample-2', title: 'Wonderwall', artist: 'Oasis', filename: 'sample-2.md' },
          'sample-3': { id: 'sample-3', title: 'Let It Be', artist: 'The Beatles', filename: 'sample-3.md' }
        };
        localStorage.setItem(`${this.storagePrefix}songs`, JSON.stringify(this.songs));
      }
      
      if (savedSongData) {
        this.songData = JSON.parse(savedSongData);
      } else {
        // Initialize with sample song data
        this.songData = SAMPLE_SONGS;
        localStorage.setItem(`${this.storagePrefix}song_data`, JSON.stringify(this.songData));
      }
      
      this.initialized = true;
      console.log(`Browser database initialized successfully (${env} environment)`);
    } catch (error) {
      console.error('Failed to initialize browser database:', error);
      this.initialized = false;
    }
  }
  
  isInitialized() {
    return this.initialized;
  }
  
  getAllSongs(): Song[] {
    if (!this.initialized) {
      return Object.values(FALLBACK_SONGS);
    }
    
    return Object.values(this.songs);
  }
  
  getSongById(id: string): SongData | null {
    if (!this.initialized) {
      return FALLBACK_SONG_DATA;
    }
    
    return this.songData[id] || null;
  }
  
  createSong(songData: SongData): string {
    if (!this.initialized) {
      return null;
    }
    
    const id = `song-${Date.now()}`;
    
    // Create song entry
    this.songs[id] = {
      id,
      title: songData.songInfo.title,
      artist: songData.songInfo.artist,
      filename: `${id}.md`
    };
    
    // Store song data
    this.songData[id] = songData;
    
    // Save to localStorage
    localStorage.setItem(`${this.storagePrefix}songs`, JSON.stringify(this.songs));
    localStorage.setItem(`${this.storagePrefix}song_data`, JSON.stringify(this.songData));
    
    return id;
  }
  
  updateSong(id: string, songData: SongData): boolean {
    if (!this.initialized || !this.songs[id]) {
      return false;
    }
    
    // Update song entry
    this.songs[id] = {
      ...this.songs[id],
      title: songData.songInfo.title,
      artist: songData.songInfo.artist
    };
    
    // Update song data
    this.songData[id] = songData;
    
    // Save to localStorage
    localStorage.setItem(`${this.storagePrefix}songs`, JSON.stringify(this.songs));
    localStorage.setItem(`${this.storagePrefix}song_data`, JSON.stringify(this.songData));
    
    return true;
  }
  
  deleteSong(id: string): boolean {
    if (!this.initialized || !this.songs[id]) {
      return false;
    }
    
    // Delete song entry and data
    delete this.songs[id];
    delete this.songData[id];
    
    // Save to localStorage
    localStorage.setItem(`${this.storagePrefix}songs`, JSON.stringify(this.songs));
    localStorage.setItem(`${this.storagePrefix}song_data`, JSON.stringify(this.songData));
    
    return true;
  }
  
  checkConnection(): boolean {
    return this.initialized;
  }
}

// Create a single instance of the browser database
const browserDB = new BrowserDB();

// Helper function to safely execute database operations with fallback
const safeDbOperation = async <T>(
  operation: () => T,
  fallbackValue: T,
  operationName: string = 'database operation'
): Promise<T> => {
  if (!browserDB.isInitialized()) {
    console.warn(`Database not initialized, using fallback for ${operationName}`);
    return fallbackValue;
  }
  
  try {
    // Add artificial delay to simulate network request (only in development)
    if (isDev) {
      await new Promise(resolve => setTimeout(resolve, 300));
    }
    
    // Execute the operation
    const result = operation();
    return result;
  } catch (error) {
    console.error(`Error during ${operationName}:`, error);
    return fallbackValue;
  }
};

// Song operations with browser-compatible implementation
export const songOperations = {
  // Initialize the database
  init: async (): Promise<boolean> => {
    return browserDB.isInitialized();
  },

  // Check database connection
  checkConnection: async (): Promise<boolean> => {
    return browserDB.isInitialized();
  },
  
  // Get all songs
  getAllSongs: async (): Promise<Song[]> => {
    return safeDbOperation(
      () => browserDB.getAllSongs(),
      FALLBACK_SONGS,
      'Get all songs'
    );
  },
  
  // Get a song by ID
  getSongById: async (id: string): Promise<SongData | null> => {
    return safeDbOperation(
      () => browserDB.getSongById(id),
      id === 'fallback-1' || id === 'fallback-2' ? FALLBACK_SONG_DATA : null,
      `Get song ${id}`
    );
  },
  
  // Create a new song
  createSong: async (songData: SongData): Promise<string | null> => {
    return safeDbOperation(
      () => browserDB.createSong(songData),
      null,
      'Create song'
    );
  },
  
  // Update an existing song
  updateSong: async (id: string, markdown: string): Promise<boolean> => {
    try {
      // Parse the markdown string into SongData
      const songData = parseMarkdown(markdown);
      
      // Additional validation
      if (!songData.songInfo || !songData.songData) {
        console.error('Invalid song data structure: missing songInfo or songData');
        return false;
      }
      
      if (!songData.songInfo.title || !songData.songInfo.artist) {
        console.error('Invalid song data: missing title or artist');
        return false;
      }
      
      return safeDbOperation(
        () => browserDB.updateSong(id, songData),
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
    return safeDbOperation(
      () => browserDB.deleteSong(id),
      false,
      `Delete song ${id}`
    );
  },
  
  // Add a tag to a song - simplified for browser
  addTagToSong: async (songId: string, tagName: string): Promise<boolean> => {
    return safeDbOperation(
      () => true, // Simplified implementation
      false,
      `Add tag ${tagName} to song ${songId}`
    );
  },
  
  // Remove a tag from a song - simplified for browser
  removeTagFromSong: async (songId: string, tagName: string): Promise<boolean> => {
    return safeDbOperation(
      () => true, // Simplified implementation
      false,
      `Remove tag ${tagName} from song ${songId}`
    );
  },
  
  // Get all tags - simplified for browser
  getAllTags: async () => {
    return safeDbOperation(
      () => [], // Simplified implementation
      [],
      'Get all tags'
    );
  }
}; 