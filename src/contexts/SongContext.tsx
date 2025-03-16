import React, { createContext, useContext, useState, useEffect } from 'react';
import { collection, getDocs, doc, getDoc, addDoc, serverTimestamp, updateDoc, deleteDoc } from 'firebase/firestore';
import { db, COLLECTIONS, isFallbackMode, isPreviewDeployment } from '../utils/firebase';
import { useAuth } from './AuthContext';
import type { Song } from '../types/firebase';
import { 
  addSongToUserCollection, 
  removeSongFromUserCollection, 
  getUserSongCollection,
  hasUserSelectedSong,
  updateSongPlayStats 
} from '../utils/userSongs';

interface SongContextType {
  songs: Song[];
  userSongs: Song[];
  currentSong: Song | null;
  isLoading: boolean;
  error: Error | null;
  isPreviewMode: boolean;
  addSongToCollection: (songId: string) => Promise<void>;
  removeSongFromCollection: (songId: string) => Promise<void>;
  playSong: (songId: string) => Promise<Song>;
  refreshSongs: () => Promise<void>;
  createNewSong: (songData: Omit<Song, 'id' | 'createdAt' | 'updatedAt'>) => Promise<string>;
  updateSong: (songId: string, songData: Partial<Omit<Song, 'id' | 'createdAt' | 'updatedAt'>>) => Promise<void>;
  deleteSong: (songId: string) => Promise<void>;
}

const SongContext = createContext<SongContextType | null>(null);

export function SongProvider({ children }: { children: React.ReactNode }) {
  const [songs, setSongs] = useState<Song[]>([]);
  const [userSongs, setUserSongs] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  // Only enable preview mode if we're in a preview deployment AND not using emulators
  const usingEmulator = import.meta.env.VITE_USE_FIREBASE_EMULATOR === 'true';
  const [isPreviewMode] = useState(isPreviewDeployment && !usingEmulator && isFallbackMode);
  
  const { user } = useAuth();

  // Fetch all songs and user's songs
  const refreshSongs = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Fetch all songs
      const songsSnapshot = await getDocs(collection(db, COLLECTIONS.SONGS));
      const allSongs = songsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Song));
      setSongs(allSongs);

      // If user is authenticated, fetch their songs
      if (user) {
        try {
          const userCollection = await getUserSongCollection(user.uid);
          if (userCollection) {
            const userSongIds = Object.keys(userCollection.songs);
            const userSongsList = allSongs.filter(song => userSongIds.includes(song.id));
            setUserSongs(userSongsList);
          } else {
            setUserSongs([]);
          }
        } catch (err) {
          console.error('Error fetching user songs:', err);
          // Don't fail completely if user songs can't be fetched
          setUserSongs([]);
        }
      } else {
        setUserSongs([]);
      }
    } catch (err) {
      console.error('Error fetching songs:', err);
      setError(err instanceof Error ? err : new Error('Failed to fetch songs'));
    } finally {
      setIsLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    refreshSongs();
  }, [user]);

  const addSongToCollection = async (songId: string) => {
    if (isPreviewMode) {
      console.warn('[SongContext] Write operations are disabled in preview mode');
      throw new Error('Write operations are disabled in preview mode');
    }
    
    if (!user) throw new Error('Must be authenticated to add songs');
    await addSongToUserCollection(user.uid, songId);
    await refreshSongs();
  };

  const removeSongFromCollection = async (songId: string) => {
    if (isPreviewMode) {
      console.warn('[SongContext] Write operations are disabled in preview mode');
      throw new Error('Write operations are disabled in preview mode');
    }
    
    if (!user) throw new Error('Must be authenticated to remove songs');
    await removeSongFromUserCollection(user.uid, songId);
    await refreshSongs();
  };

  const playSong = async (songId: string) => {
    try {
      const songRef = doc(db, COLLECTIONS.SONGS, songId);
      const songDoc = await getDoc(songRef);
      
      if (!songDoc.exists()) {
        throw new Error('Song not found');
      }

      const song = { id: songDoc.id, ...songDoc.data() } as Song;
      setCurrentSong(song);

      // Update play stats if user is authenticated and not in preview mode
      if (user && !isPreviewMode) {
        try {
          await updateSongPlayStats(user.uid, songId);
        } catch (err) {
          console.error('Error updating play stats:', err);
          // Don't fail if play stats can't be updated
        }
      }
      
      return song;
    } catch (err) {
      console.error('Error playing song:', err);
      throw err instanceof Error ? err : new Error('Failed to play song');
    }
  };

  const createNewSong = async (songData: Omit<Song, 'id' | 'createdAt' | 'updatedAt'>) => {
    if (isPreviewMode) {
      console.warn('[SongContext] Write operations are disabled in preview mode');
      throw new Error('Write operations are disabled in preview mode');
    }
    
    try {
      const songsRef = collection(db, COLLECTIONS.SONGS);
      const newSong = {
        ...songData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };
      
      const docRef = await addDoc(songsRef, newSong);
      await refreshSongs();
      return docRef.id;
    } catch (err) {
      console.error('Error creating song:', err);
      throw err instanceof Error ? err : new Error('Failed to create song');
    }
  };

  const updateSong = async (songId: string, songData: Partial<Omit<Song, 'id' | 'createdAt' | 'updatedAt'>>) => {
    if (isPreviewMode) {
      console.warn('[SongContext] Write operations are disabled in preview mode');
      throw new Error('Write operations are disabled in preview mode');
    }
    
    try {
      const songRef = doc(db, COLLECTIONS.SONGS, songId);
      
      // Clean up the data to remove undefined values
      const cleanData = {
        ...(songData.title !== undefined ? { title: songData.title } : {}),
        ...(songData.artist !== undefined ? { artist: songData.artist } : {}),
        ...(songData.key ? { key: songData.key } : {}),
        ...(songData.tempo ? { tempo: songData.tempo } : {}),
        ...(songData.timeSignature ? { timeSignature: songData.timeSignature } : {}),
        ...(songData.lyrics ? { lyrics: songData.lyrics } : {}),
        updatedAt: serverTimestamp()
      };

      await updateDoc(songRef, cleanData);
      await refreshSongs();
    } catch (err) {
      console.error('Error updating song:', err);
      throw err instanceof Error ? err : new Error('Failed to update song');
    }
  };

  const deleteSong = async (songId: string) => {
    if (isPreviewMode) {
      console.warn('[SongContext] Write operations are disabled in preview mode');
      throw new Error('Write operations are disabled in preview mode');
    }
    
    try {
      // Check if the song is the current song
      if (currentSong && currentSong.id === songId) {
        setCurrentSong(null);
      }
      
      // Delete the song from Firestore
      const songRef = doc(db, COLLECTIONS.SONGS, songId);
      await deleteDoc(songRef);
      
      // If the user has this song in their collection, remove it
      if (user && userSongs.some(song => song.id === songId)) {
        try {
          await removeSongFromUserCollection(user.uid, songId);
        } catch (err) {
          console.error('Error removing song from user collection:', err);
          // Continue with deletion even if removing from collection fails
        }
      }
      
      // Refresh the song list
      await refreshSongs();
      
      console.log(`[SongContext] Song ${songId} deleted successfully`);
    } catch (err) {
      console.error('Error deleting song:', err);
      throw err instanceof Error ? err : new Error('Failed to delete song');
    }
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
        addSongToCollection,
        removeSongFromCollection,
        playSong,
        refreshSongs,
        createNewSong,
        updateSong,
        deleteSong
      }}
    >
      {children}
    </SongContext.Provider>
  );
}

// Fix Fast Refresh compatibility by using const export
export const useSong = (): SongContextType => {
  const context = useContext(SongContext);
  if (!context) {
    throw new Error('useSong must be used within a SongProvider');
  }
  return context;
} 