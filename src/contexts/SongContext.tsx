import React, { createContext, useContext, useState, useEffect } from 'react';
import { collection, getDocs, doc, getDoc, addDoc, serverTimestamp, updateDoc, deleteDoc, setDoc } from 'firebase/firestore';
import { db, COLLECTIONS, isPreviewDeployment } from '../utils/firebase';
import { useAuth } from './AuthContext';
import type { Song } from '../types/firebase';
import type { SongData, LyricLine } from '../types/song';
import { 
  addSongToUserCollection, 
  removeSongFromUserCollection, 
  getUserSongCollection,
  hasUserSelectedSong,
  updateSongPlayStats 
} from '../utils/userSongs';
import { getMockSongs, getMockUserSongs } from '../utils/mockData';
import { isDev } from '../utils/env';

interface SongContextType {
  songs: Song[];
  userSongs: Song[];
  currentSong: Song | null;
  isLoading: boolean;
  error: Error | null;
  isPreviewMode: boolean;
  refreshSongs: () => Promise<void>;
  addSong: (song: Omit<Song, 'id'>) => Promise<string>;
  updateSong: (id: string, song: Partial<Song>) => Promise<void>;
  deleteSong: (id: string) => Promise<void>;
  selectSong: (id: string) => Promise<void>;
  unselectSong: (id: string) => Promise<void>;
  setCurrentSong: (song: Song | null) => void;
  isUserSong: (id: string) => boolean;
  updatePlayStats: (id: string) => Promise<void>;
  // Legacy API compatibility
  addSongToCollection?: (songId: string) => Promise<void>;
  removeSongFromCollection?: (songId: string) => Promise<void>;
  playSong: (id: string) => Promise<Song>;
  createNewSong?: (songData: Omit<Song, 'id' | 'createdAt' | 'updatedAt'>) => Promise<string>;
  refreshSongList?: () => Promise<void>;
  deleteSongById?: (songId: string) => Promise<void>;
  checkDatabaseConnection?: () => Promise<boolean>;
}

const SongContext = createContext<SongContextType | null>(null);

export const useSongs = () => {
  const context = useContext(SongContext);
  if (!context) {
    throw new Error('useSongs must be used within a SongProvider');
  }
  return context;
};

// For backward compatibility
export const useSong = useSongs;

export const SongProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [userSongs, setUserSongs] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  const usingEmulator = import.meta.env.VITE_USE_FIREBASE_EMULATOR === 'true';
  const [isPreviewMode] = useState(isPreviewDeployment && !usingEmulator);
  
  const { user } = useAuth();

  // Fetch all songs and user's songs
  const refreshSongs = async () => {
    try {
      setIsLoading(true);
      setError(null);

      let allSongs: Song[] = [];
      
      // Check if we're in development mode and should use mock data
      if (isDev && isPreviewMode) {
        console.log('[SongContext] Using mock data (development mode)');
        allSongs = getMockSongs();
        setSongs(allSongs);
        
        if (user) {
          setUserSongs(getMockUserSongs());
        } else {
          setUserSongs([]);
        }
        
        setIsLoading(false);
        return;
      }
      
      // Use standard Firestore SDK
      console.log('[SongContext] Using standard Firestore SDK');
      try {
        const songsRef = collection(db, COLLECTIONS.SONGS);
        const songsSnapshot = await getDocs(songsRef);
        allSongs = songsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Song[];
      } catch (firestoreError) {
        console.error('[SongContext] Firestore SDK failed:', firestoreError);
        if (isDev) {
          console.log('[SongContext] Falling back to mock data');
          allSongs = getMockSongs();
        }
      }
      
      setSongs(allSongs);

      // If user is authenticated, fetch their songs
      if (user) {
        try {
          const userCollection = await getUserSongCollection(user.uid);
          if (userCollection) {
            // Filter songs to only include those in the user's collection
            const userSongIds = Object.keys(userCollection.songs);
            const userSongsList = allSongs.filter(song => userSongIds.includes(song.id));
            setUserSongs(userSongsList);
          } else {
            setUserSongs([]);
          }
        } catch (userSongsError) {
          console.error('Error fetching user songs:', userSongsError);
          if (isDev && isPreviewMode) {
            setUserSongs(getMockUserSongs());
          } else {
            setUserSongs([]);
          }
        }
      } else {
        setUserSongs([]);
      }
    } catch (err) {
      console.error('Error fetching songs:', err);
      setError(err instanceof Error ? err : new Error('Failed to fetch songs'));
      
      // In development mode, use mock data as a last resort
      if (isDev) {
        console.log('[SongContext] Using mock data after error');
        setSongs(getMockSongs());
        if (user) {
          setUserSongs(getMockUserSongs());
        } else {
          setUserSongs([]);
        }
      } else {
        setSongs([]);
        setUserSongs([]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Add a new song
  const addSong = async (song: Omit<Song, 'id'>): Promise<string> => {
    try {
      // Generate a unique ID for the new song
      const newId = `song_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      // Create the new song with the generated ID
      const newSong = {
        ...song,
        id: newId,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      // Create a copy of the song without the id field
      const { id, ...songData } = newSong;
      
      // Use the id from the song as the document ID
      await setDoc(doc(db, COLLECTIONS.SONGS, id), songData);
      
      console.log('Song added successfully');
      
      // Refresh songs to include the new one
      await refreshSongs();
      
      return newId;
    } catch (err) {
      console.error('Error adding song:', err);
      throw err;
    }
  };

  // Update an existing song
  const updateSong = async (id: string, songUpdate: Partial<Song>): Promise<void> => {
    try {
      // Get the current song
      const songDoc = await getDoc(doc(db, COLLECTIONS.SONGS, id));
      if (!songDoc.exists()) {
        throw new Error(`Song with ID ${id} not found`);
      }
      
      const currentSong = { id: songDoc.id, ...songDoc.data() } as Song;
      
      // Create the updated song
      const updatedSong = {
        ...currentSong,
        ...songUpdate,
        updatedAt: new Date()
      };
      
      // Remove the id field before updating
      const { id: songId, ...songData } = updatedSong;
      
      // Update the song
      await updateDoc(doc(db, COLLECTIONS.SONGS, id), songData);
      
      // Refresh songs to include the updated one
      await refreshSongs();
    } catch (err) {
      console.error('Error updating song:', err);
      throw err;
    }
  };

  // Delete a song
  const deleteSong = async (id: string): Promise<void> => {
    try {
      // Delete the song
      await deleteDoc(doc(db, COLLECTIONS.SONGS, id));
      
      // Refresh songs to remove the deleted one
      await refreshSongs();
    } catch (err) {
      console.error('Error deleting song:', err);
      throw err;
    }
  };

  // Add a song to the user's collection
  const selectSong = async (id: string): Promise<void> => {
    if (!user) throw new Error('User must be authenticated to select songs');
    await addSongToUserCollection(user.uid, id);
    await refreshSongs();
  };

  // Remove a song from the user's collection
  const unselectSong = async (id: string): Promise<void> => {
    if (!user) throw new Error('User must be authenticated to unselect songs');
    await removeSongFromUserCollection(user.uid, id);
    await refreshSongs();
  };

  // Check if a song is in the user's collection
  const isUserSong = (id: string): boolean => {
    return userSongs.some(song => song.id === id);
  };

  // Update play stats for a song
  const updatePlayStats = async (id: string): Promise<void> => {
    if (!user) return;
    await updateSongPlayStats(user.uid, id);
  };

  // Play a song (legacy API compatibility)
  const playSong = async (songId: string): Promise<Song> => {
    const song = songs.find(s => s.id === songId);
    if (!song) throw new Error(`Song with ID ${songId} not found`);
    
    setCurrentSong(song);
    
    // Update play stats if user is authenticated
    if (user) {
      try {
        await updatePlayStats(songId);
      } catch (err) {
        console.error('Error updating play stats:', err);
      }
    }
    
    return song;
  };

  // Load songs on mount and when user changes
  useEffect(() => {
    refreshSongs();
  }, [user]);

  // Legacy API compatibility
  const legacyApi = {
    addSongToCollection: selectSong,
    removeSongFromCollection: unselectSong,
    createNewSong: addSong,
    refreshSongList: refreshSongs,
    deleteSongById: deleteSong,
    checkDatabaseConnection: async () => true
  };

  return (
    <SongContext.Provider
      value={{
        songs,
        userSongs,
        currentSong,
        isLoading,
        error,
        isPreviewMode,
        refreshSongs,
        addSong,
        updateSong,
        deleteSong,
        selectSong,
        unselectSong,
        setCurrentSong,
        isUserSong,
        updatePlayStats,
        playSong,
        ...legacyApi
      }}
    >
      {children}
    </SongContext.Provider>
  );
}; 