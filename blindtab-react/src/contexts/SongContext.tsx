import React, { createContext, useState, useContext } from 'react';
import { Song, SongData, SongsState } from '../types/song';

type SongContextType = {
  songs: SongsState;
  loadSong: (songId: string) => Promise<SongData | null>;
  updateSongDisplay: (songData: SongData) => void;
  deleteSongById: (songId: string) => void;
  saveSongEdits: (songId: string, markdown: string) => void;
};

const SongContext = createContext<SongContextType | undefined>(undefined);

export const SongProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [songs, setSongs] = useState<SongsState>({
    current: null,
    available: [],
    loaded: {}
  });

  // Mock function to load song from markdown file
  const loadSongFromMarkdown = async (filename: string): Promise<SongData | null> => {
    try {
      // In a real app, this would fetch from a server or database
      // For now, we'll just return a mock response
      return {
        songData: [
          { lyric: "This is a placeholder song" },
          { lyric: "Replace with actual song loading logic" }
        ],
        songInfo: {
          title: "Placeholder Song",
          artist: "Demo Artist"
        }
      };
    } catch (error) {
      console.error('Error loading song:', error);
      return null;
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
    
    // Find the song in available songs
    const songInfo = songs.available.find(s => s.id === songId);
    if (!songInfo) {
      console.error(`Song with ID ${songId} not found`);
      return null;
    }
    
    // Load the song
    const songData = await loadSongFromMarkdown(songInfo.filename);
    if (!songData) {
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
  };

  const updateSongDisplay = (songData: SongData) => {
    // This function would update the UI with the new song data
    // In a real app, this might dispatch an action or update state
    console.log('Updating song display:', songData);
  };

  const deleteSongById = (songId: string) => {
    // Find the song index
    const songIndex = songs.available.findIndex(s => s.id === songId);
    if (songIndex === -1) {
      console.error(`Song with ID ${songId} not found`);
      return;
    }
    
    // Create a new available songs array without the deleted song
    const newAvailable = [...songs.available];
    newAvailable.splice(songIndex, 1);
    
    // Create a new loaded songs object without the deleted song
    const newLoaded = { ...songs.loaded };
    delete newLoaded[songId];
    
    // Update state
    setSongs(prev => ({
      ...prev,
      available: newAvailable,
      loaded: newLoaded,
      // If this was the current song, set current to null
      current: prev.current === songId ? null : prev.current
    }));
  };

  const saveSongEdits = (songId: string, markdown: string) => {
    // In a real app, this would save to a server or database
    console.log(`Saving markdown for ${songId}:`, markdown);
    
    // Mock implementation - parse the markdown and update the song
    const songData: SongData = {
      songData: [
        { lyric: "This is updated song data" },
        { lyric: "Replace with actual markdown parsing" }
      ],
      songInfo: {
        title: "Updated Song",
        artist: "Demo Artist"
      }
    };
    
    // Update the loaded song data
    setSongs(prev => ({
      ...prev,
      loaded: {
        ...prev.loaded,
        [songId]: songData
      }
    }));
    
    // Update the song info in available songs
    setSongs(prev => {
      const songIndex = prev.available.findIndex(s => s.id === songId);
      if (songIndex !== -1) {
        const newAvailable = [...prev.available];
        newAvailable[songIndex] = {
          ...newAvailable[songIndex],
          title: songData.songInfo.title,
          artist: songData.songInfo.artist
        };
        return {
          ...prev,
          available: newAvailable
        };
      }
      return prev;
    });
  };

  return (
    <SongContext.Provider 
      value={{ 
        songs, 
        loadSong, 
        updateSongDisplay, 
        deleteSongById, 
        saveSongEdits 
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