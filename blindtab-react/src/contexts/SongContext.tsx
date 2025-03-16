import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { Song, SongData, SongsState } from '../types/song';
import { songOperations } from '../utils/db';
import { Timestamp } from 'firebase/firestore';

type SongContextType = {
  songs: SongsState;
  loadSong: (songId: string) => Promise<SongData | null>;
  updateSongDisplay: (songData: SongData) => void;
  deleteSongById: (songId: string) => Promise<boolean>;
  saveSongEdits: (songId: string, markdown: string) => Promise<boolean>;
  createNewSong: (songData: SongData) => Promise<string | null>;
  refreshSongList: () => Promise<void>;
  isLoading: boolean;
  error: string | null;
  checkDatabaseConnection: () => Promise<boolean>;
};

const SongContext = createContext<SongContextType | undefined>(undefined);

// Create a welcome song to display when no song is loaded
const WELCOME_SONG: SongData = {
  songInfo: {
    title: 'Welcome to BlindTab',
    artist: 'React Edition',
  },
  lyrics: [
    { chord: '', line: 'Welcome to BlindTab!', position: 0 },
    { chord: '', line: '', position: 1 },
    { chord: '', line: 'To get started:', position: 2 },
    { chord: '', line: '1. Click the "Song Library" button in the header', position: 3 },
    { chord: '', line: '2. Or press "O" on your keyboard', position: 4 },
    { chord: '', line: '', position: 5 },
    { chord: '', line: 'Use arrow keys or the buttons below to navigate', position: 6 },
    { chord: '', line: 'Press "H" for a guided tour of the app', position: 7 }
  ],
  createdAt: Timestamp.now(),
  updatedAt: Timestamp.now()
};

// Make the global function available for legacy code
if (typeof window !== 'undefined') {
  (window as any).updateSongDisplay = (data: any) => {
    console.log('Window updateSongDisplay called:', data);
  };
}

export const SongProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [songs, setSongs] = useState<SongsState>({
    current: null,
    available: [],
    loaded: {
      'welcome': WELCOME_SONG // Add welcome song to loaded songs
    }
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [connectionAttempts, setConnectionAttempts] = useState<number>(0);
  const [initialized, setInitialized] = useState<boolean>(false);

  // Initialize database on mount
  useEffect(() => {
    const initDb = async () => {
      try {
        setIsLoading(true);
        const success = await songOperations.init();
        if (success) {
          setInitialized(true);
          setError(null);
          // Refresh song list after successful initialization
          await refreshSongList();
        } else {
          setError('Failed to initialize database');
        }
      } catch (err) {
        console.error('Database initialization error:', err);
        setError('Failed to initialize database');
      } finally {
        setIsLoading(false);
      }
    };

    initDb();
  }, []);

  // Function to update song display - defined with useCallback to prevent infinite renders
  const updateSongDisplay = useCallback((songData: SongData) => {
    // This function would update the UI with the new song data
    console.log('Context updateSongDisplay called:', songData);
    
    // Update the global function for legacy code
    if (typeof window !== 'undefined') {
      (window as any).updateSongDisplay = (data: any) => {
        console.log('Window updateSongDisplay called:', data);
      };
    }
  }, []);

  // Function to check database connection - memoized to prevent infinite loops
  const checkDatabaseConnection = useCallback(async (): Promise<boolean> => {
    if (!initialized) {
      console.log('[SongContext] Database not initialized, attempting initialization...', {
        connectionAttempts,
        timestamp: new Date().toISOString()
      });
      const success = await songOperations.init();
      setInitialized(success);
      if (!success) {
        const errorMsg = 'Database initialization failed. Using fallback data.';
        console.error('[SongContext] ' + errorMsg, {
          connectionAttempts,
          initialized: false,
          timestamp: new Date().toISOString()
        });
        setError(errorMsg);
        return false;
      }
    }

    try {
      setIsLoading(true);
      console.log('[SongContext] Checking database connection...', {
        connectionAttempts,
        initialized,
        timestamp: new Date().toISOString()
      });
      const isConnected = await songOperations.checkConnection();
      
      if (isConnected) {
        console.log('[SongContext] Database connection successful', {
          connectionAttempts,
          initialized,
          timestamp: new Date().toISOString()
        });
        setError(null);
      } else {
        const errorMsg = 'Database connection failed. Using fallback data.';
        console.error('[SongContext] ' + errorMsg, {
          connectionAttempts,
          initialized,
          timestamp: new Date().toISOString()
        });
        setError(errorMsg);
      }
      
      return isConnected;
    } catch (err) {
      const errorMsg = 'Database connection check failed. Using fallback data.';
      console.error('[SongContext] ' + errorMsg, {
        error: err.message,
        code: err.code,
        connectionAttempts,
        initialized,
        timestamp: new Date().toISOString(),
        stack: err.stack
      });
      setError(errorMsg);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [initialized, connectionAttempts]);

  // Function to refresh the song list with better error handling - memoized to prevent infinite loops
  const refreshSongList = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Check connection first if we've had previous errors
      if (connectionAttempts > 0) {
        const isConnected = await checkDatabaseConnection();
        if (!isConnected) {
          setError('Database connection failed. Using fallback data.');
          setConnectionAttempts(prev => prev + 1);
          return;
        }
      }
      
      const availableSongs = await songOperations.getAllSongs();
      
      // If we get fallback songs and this isn't the first attempt, show an error
      if (availableSongs.length > 0 && availableSongs[0].id.startsWith('fallback-') && connectionAttempts > 0) {
        setError('Database connection failed. Using fallback data.');
      } else {
        setError(null);
      }
      
      setSongs(prev => ({
        ...prev,
        available: availableSongs
      }));
    } catch (error) {
      console.error('Error loading songs:', error);
      setError('Failed to load song list. Using fallback data.');
      setConnectionAttempts(prev => prev + 1);
    } finally {
      setIsLoading(false);
    }
  }, [connectionAttempts, checkDatabaseConnection]);

  // Load available songs on mount with retry logic
  useEffect(() => {
    // Prevent multiple initializations
    if (initialized) return;
    
    const loadInitialSongs = async () => {
      try {
        await refreshSongList();
        // Don't try to load an initial song - this was causing the error
        // Instead, we'll show the welcome message
        setSongs(prev => ({
          ...prev,
          current: 'welcome' // Set welcome as the current song
        }));
        setInitialized(true);
      } catch (err) {
        console.error('Initial song list loading failed:', err);
        // We'll handle this in refreshSongList
        setInitialized(true);
      }
    };
    
    loadInitialSongs();
  }, [initialized, refreshSongList]);

  const loadSong = useCallback(async (songId: string): Promise<SongData | null> => {
    // Special case for welcome song
    if (songId === 'welcome') {
      setSongs(prev => ({
        ...prev,
        current: 'welcome'
      }));
      return WELCOME_SONG;
    }
    
    // Check if we've already loaded this song
    if (songs.loaded[songId]) {
      setSongs(prev => ({
        ...prev,
        current: songId
      }));
      return songs.loaded[songId];
    }
    
    try {
      setIsLoading(true);
      setError(null);
      
      // Load the song from the database with a shorter timeout
      const songData = await songOperations.getSongById(songId);
      
      if (!songData) {
        setError(`Song with ID ${songId} not found`);
        console.error(`Song with ID ${songId} not found`);
        return null;
      }
      
      // Store the loaded song
      setSongs(prev => ({
        ...prev,
        loaded: {
          ...prev.loaded,
          [songId]: songData
        },
        current: songId
      }));
      
      return songData;
    } catch (error) {
      console.error(`Error loading song ${songId}:`, error);
      setError(`Failed to load song. ${error.message || 'Unknown error'}`);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [songs.loaded]);

  const deleteSongById = useCallback(async (songId: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      setError(null);
      
      const success = await songOperations.deleteSong(songId);
      
      if (success) {
        // Update the state
        setSongs(prev => {
          const newAvailable = prev.available.filter(s => s.id !== songId);
          const newLoaded = { ...prev.loaded };
          delete newLoaded[songId];
          
          return {
            ...prev,
            available: newAvailable,
            loaded: newLoaded,
            current: prev.current === songId ? 'welcome' : prev.current // Switch to welcome if current song was deleted
          };
        });
        return true;
      } else {
        setError(`Failed to delete song ${songId}`);
        return false;
      }
    } catch (error) {
      console.error(`Error deleting song ${songId}:`, error);
      setError(`Error deleting song: ${error.message || 'Unknown error'}`);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const saveSongEdits = useCallback(async (songId: string, markdown: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Find the song in available songs
      const songInfo = songs.available.find(s => s.id === songId);
      if (!songInfo) {
        setError(`Song with ID ${songId} not found`);
        return false;
      }
      
      // Save the song
      const success = await songOperations.updateSong(songId, markdown);
      
      if (success) {
        // Reload the song to get the updated data
        const updatedSong = await songOperations.getSongById(songId);
        
        if (updatedSong) {
          // Update the state
          setSongs(prev => ({
            ...prev,
            loaded: {
              ...prev.loaded,
              [songId]: updatedSong
            }
          }));
        }
        
        return true;
      } else {
        setError(`Failed to save song ${songId}`);
        return false;
      }
    } catch (error) {
      console.error(`Error saving song ${songId}:`, error);
      setError(`Error saving song: ${error.message || 'Unknown error'}`);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [songs.available]);

  const createNewSong = useCallback(async (songData: SongData): Promise<string | null> => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Create the song
      const newSongId = await songOperations.createSong(songData);
      
      if (newSongId) {
        // Refresh the song list to include the new song
        await refreshSongList();
        
        // Add the song to loaded songs
        setSongs(prev => ({
          ...prev,
          loaded: {
            ...prev.loaded,
            [newSongId]: songData
          },
          current: newSongId
        }));
        
        return newSongId;
      } else {
        setError('Failed to create new song');
        return null;
      }
    } catch (error) {
      console.error('Error creating new song:', error);
      setError(`Error creating song: ${error.message || 'Unknown error'}`);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [refreshSongList]);

  return (
    <SongContext.Provider
      value={{
        songs,
        loadSong,
        updateSongDisplay,
        deleteSongById,
        saveSongEdits,
        createNewSong,
        refreshSongList,
        isLoading,
        error,
        checkDatabaseConnection
      }}
    >
      {children}
    </SongContext.Provider>
  );
};

export const useSong = (): SongContextType => {
  const context = useContext(SongContext);
  if (context === undefined) {
    throw new Error('useSong must be used within a SongProvider');
  }
  return context;
}; 