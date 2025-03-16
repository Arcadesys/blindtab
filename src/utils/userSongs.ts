import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  deleteField, 
  serverTimestamp,
  collection,
  query,
  getDocs
} from 'firebase/firestore';
import { db, COLLECTIONS } from './firebase';
import type { UserSong, UserSongCollection } from '../types/firebase';

/**
 * Add a song to a user's collection
 */
export async function addSongToUserCollection(userId: string, songId: string): Promise<void> {
  const userSongRef = doc(db, COLLECTIONS.USER_SONGS, userId);
  
  // Check if user document exists
  const userDoc = await getDoc(userSongRef);
  
  if (!userDoc.exists()) {
    // Create new user songs document
    await setDoc(userSongRef, {
      userId,
      songs: {
        [songId]: {
          songId,
          addedAt: serverTimestamp(),
          playCount: 0
        }
      },
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
  } else {
    // Update existing user songs document
    await updateDoc(userSongRef, {
      [`songs.${songId}`]: {
        songId,
        addedAt: serverTimestamp(),
        playCount: 0
      },
      updatedAt: serverTimestamp()
    });
  }
}

/**
 * Remove a song from a user's collection
 */
export async function removeSongFromUserCollection(userId: string, songId: string): Promise<void> {
  const userSongRef = doc(db, COLLECTIONS.USER_SONGS, userId);
  await updateDoc(userSongRef, {
    [`songs.${songId}`]: deleteField(),
    updatedAt: serverTimestamp()
  });
}

/**
 * Get all songs in a user's collection
 */
export async function getUserSongCollection(userId: string): Promise<UserSongCollection | null> {
  const userSongRef = doc(db, COLLECTIONS.USER_SONGS, userId);
  const userDoc = await getDoc(userSongRef);
  
  if (!userDoc.exists()) {
    return null;
  }
  
  return userDoc.data() as UserSongCollection;
}

/**
 * Check if a user has a specific song in their collection
 */
export async function hasUserSelectedSong(userId: string, songId: string): Promise<boolean> {
  const userSongRef = doc(db, COLLECTIONS.USER_SONGS, userId);
  const userDoc = await getDoc(userSongRef);
  
  if (!userDoc.exists()) {
    return false;
  }
  
  const data = userDoc.data() as UserSongCollection;
  return !!data.songs[songId];
}

/**
 * Update a song's play count and last played time
 */
export async function updateSongPlayStats(userId: string, songId: string): Promise<void> {
  const userSongRef = doc(db, COLLECTIONS.USER_SONGS, userId);
  const userDoc = await getDoc(userSongRef);
  
  if (!userDoc.exists()) {
    return;
  }
  
  const data = userDoc.data() as UserSongCollection;
  const currentSong = data.songs[songId];
  
  if (!currentSong) {
    return;
  }
  
  await updateDoc(userSongRef, {
    [`songs.${songId}.playCount`]: (currentSong.playCount || 0) + 1,
    [`songs.${songId}.lastPlayedAt`]: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
} 