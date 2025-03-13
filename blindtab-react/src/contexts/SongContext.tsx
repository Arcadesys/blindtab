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
};

const SongContext = createContext<SongContextType | undefined>(undefined);

export const SongProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [songs, setSongs] = useState<SongsState>({
    current: null,
    available: [],
    loaded: {}
  });

  // Load available songs on mount
  useEffect(() => {
    refreshSongList();
  }, []);

  // Function to refresh the song list
  const refreshSongList = async () => {
    try {
      const availableSongs = await songOperations.getAllSongs();
      
      setSongs(prev => ({
        ...prev,
        available: availableSongs
      }));
    } catch (error) {
      console.error('Error loading songs:', error);
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
      // Load the song from the database
      const songData = await songOperations.getSongById(songId);
      
      if (!songData) {
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
      return null;
    }
  };

  const updateSongDisplay = (songData: SongData) => {
    // This function would update the UI with the new song data
    console.log('Updating song display:', songData);
  };

  const deleteSongById = async (songId: string): Promise<boolean> => {
    try {
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
      }
      
      return success;
    } catch (error) {
      console.error(`Error deleting song ${songId}:`, error);
      return false;
    }
  };

  const saveSongEdits = async (songId: string, markdown: string): Promise<boolean> => {
    try {
      // Find the song in available songs
      const songInfo = songs.available.find(s => s.id === songId);
      if (!songInfo) {
        console.error(`Song with ID ${songId} not found`);
        return false;
      }
      
      // Get the current song data
      const currentSongData = songs.loaded[songId];
      if (!currentSongData) {
        console.error(`Song data for ID ${songId} not loaded`);
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
      }
      
      return success;
    } catch (error) {
      console.error(`Error saving song ${songId}:`, error);
      return false;
    }
  };

  const createNewSong = async (songData: SongData): Promise<string | null> => {
    try {
      const newSongId = await songOperations.createSong(songData);
      
      if (newSongId) {
        // Refresh the song list to include the new song
        await refreshSongList();
        
        // Load the new song
        await loadSong(newSongId);
      }
      
      return newSongId;
    } catch (error) {
      console.error('Error creating new song:', error);
      return null;
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
        refreshSongList
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