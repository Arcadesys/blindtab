import React, { createContext, useContext, useState, useEffect } from 'react';
import { collection, getDocs, doc, getDoc, addDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db, COLLECTIONS } from '../utils/firebase';
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
  addSongToCollection: (songId: string) => Promise<void>;
  removeSongFromCollection: (songId: string) => Promise<void>;
  playSong: (songId: string) => Promise<void>;
  refreshSongs: () => Promise<void>;
  createNewSong: (songData: Omit<Song, 'id' | 'createdAt' | 'updatedAt'>) => Promise<string>;
  updateSong: (songId: string, songData: Partial<Omit<Song, 'id' | 'createdAt' | 'updatedAt'>>) => Promise<void>;
}

const SongContext = createContext<SongContextType | null>(null);

export function SongProvider({ children }: { children: React.ReactNode }) {
  const [songs, setSongs] = useState<Song[]>([]);
  const [userSongs, setUserSongs] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
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
        const userCollection = await getUserSongCollection(user.uid);
        if (userCollection) {
          const userSongIds = Object.keys(userCollection.songs);
          const userSongsList = allSongs.filter(song => userSongIds.includes(song.id));
          setUserSongs(userSongsList);
        } else {
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
    if (!user) throw new Error('Must be authenticated to add songs');
    await addSongToUserCollection(user.uid, songId);
    await refreshSongs();
  };

  const removeSongFromCollection = async (songId: string) => {
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

      // Update play stats if user is authenticated
      if (user) {
        const isSelected = await hasUserSelectedSong(user.uid, songId);
        if (isSelected) {
          await updateSongPlayStats(user.uid, songId);
        }
      }
    } catch (err) {
      console.error('Error playing song:', err);
      setError(err instanceof Error ? err : new Error('Failed to play song'));
    }
  };

  const createNewSong = async (songData: Omit<Song, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> => {
    try {
      const timestamp = serverTimestamp();
      
      // Clean up the data to remove undefined values
      const cleanData = {
        title: songData.title,
        artist: songData.artist,
        lyrics: songData.lyrics,
        ...(songData.key ? { key: songData.key } : {}),
        ...(songData.tempo ? { tempo: songData.tempo } : {}),
        ...(songData.timeSignature ? { timeSignature: songData.timeSignature } : {}),
        createdAt: timestamp,
        updatedAt: timestamp
      };

      const docRef = await addDoc(collection(db, COLLECTIONS.SONGS), cleanData);

      // Add to user's collection if authenticated
      if (user) {
        await addSongToCollection(docRef.id);
      }

      await refreshSongs();
      return docRef.id;
    } catch (err) {
      console.error('Error creating new song:', err);
      setError(err instanceof Error ? err : new Error('Failed to create song'));
      throw err;
    }
  };

  const updateSong = async (songId: string, songData: Partial<Omit<Song, 'id' | 'createdAt' | 'updatedAt'>>) => {
    try {
      const songRef = doc(db, COLLECTIONS.SONGS, songId);
      await updateDoc(songRef, {
        ...songData,
        updatedAt: serverTimestamp()
      });
      await refreshSongs();
    } catch (err) {
      console.error('Error updating song:', err);
      throw err instanceof Error ? err : new Error('Failed to update song');
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
        addSongToCollection,
        removeSongFromCollection,
        playSong,
        refreshSongs,
        createNewSong,
        updateSong
      }}
    >
      {children}
    </SongContext.Provider>
  );
}

// Fix Fast Refresh compatibility by using function declaration
export function useSong(): SongContextType {
  const context = useContext(SongContext);
  if (!context) {
    throw new Error('useSong must be used within a SongProvider');
  }
  return context;
} 