import React, { createContext, useState, useContext, useEffect } from 'react';
import { Song, SongData, SongsState } from '../types/song';
import { songOperations } from '../utils/db';

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

export const SongProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [songs, setSongs] = useState<SongsState>({
    current: null,
    available: [],
    loaded: {}
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [connectionAttempts, setConnectionAttempts] = useState<number>(0);

  // Load available songs on mount with retry logic
  useEffect(() => {
    const loadInitialSongs = async () => {
      try {
        await refreshSongList();
      } catch (err) {
        console.error('Initial song list loading failed:', err);
        // We'll handle this in refreshSongList
      }
    };
    
    loadInitialSongs();
  }, []);

  // Function to check database connection
  const checkDatabaseConnection = async (): Promise<boolean> => {
    try {
      setIsLoading(true);
      const isConnected = await songOperations.checkConnection();
      
      if (isConnected) {
        setError(null);
      } else {
        setError('Database connection failed. Using fallback data.');
      }
      
      return isConnected;
    } catch (err) {
      setError('Database connection check failed. Using fallback data.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Function to refresh the song list with better error handling
  const refreshSongList = async () => {
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
  };

  const loadSong = async (songId: string): Promise<SongData | null> => {
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
  };

  const updateSongDisplay = (songData: SongData) => {
    // This function would update the UI with the new song data
    console.log('Updating song display:', songData);
  };

  const deleteSongById = async (songId: string): Promise<boolean> => {
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
            current: prev.current === songId ? null : prev.current
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
  };

  const saveSongEdits = async (songId: string, markdown: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Find the song in available songs
      const songInfo = songs.available.find(s => s.id === songId);
      if (!songInfo) {
        setError(`Song with ID ${songId} not found`);
        return false;
      }
      
      // Get the current song data
      const currentSongData = songs.loaded[songId];
      if (!currentSongData) {
        setError(`Song data for ID ${songId} not loaded`);
        return false;
      }
      
      // Update the song in the database
      const success = await songOperations.updateSong(songId, {
        ...currentSongData,
        songInfo: {
          ...currentSongData.songInfo,
          // You might want to parse the markdown to update title/artist
        }
      });
      
      if (success) {
        // Reload the song to get the updated data
        await loadSong(songId);
        // Refresh the song list to update any metadata changes
        await refreshSongList();
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
  };

  const createNewSong = async (songData: SongData): Promise<string | null> => {
    try {
      setIsLoading(true);
      setError(null);
      
      const newSongId = await songOperations.createSong(songData);
      
      if (newSongId) {
        // Refresh the song list to include the new song
        await refreshSongList();
        
        // Load the new song
        await loadSong(newSongId);
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
  };

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