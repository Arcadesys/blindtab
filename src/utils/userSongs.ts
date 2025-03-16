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
import { db, COLLECTIONS, firestoreRest } from './firebase';
import type { UserSong, UserSongCollection } from '../types/firebase';

/**
 * Add a song to a user's collection
 */
export async function addSongToUserCollection(userId: string, songId: string): Promise<void> {
  try {
    // Try to add song using Firebase SDK directly
    try {
      // Get the current user document
      const userDocRef = doc(db, COLLECTIONS.USER_SONGS, userId);
      const userDocSnap = await getDoc(userDocRef);
      
      if (!userDocSnap.exists()) {
        // Create new user songs document
        await setDoc(userDocRef, {
          userId,
          songs: {
            [songId]: {
              songId,
              addedAt: new Date(),
              playCount: 0
            }
          },
          createdAt: new Date(),
          updatedAt: new Date()
        });
      } else {
        // Update existing user songs document
        await updateDoc(userDocRef, {
          [`songs.${songId}`]: {
            songId,
            addedAt: new Date(),
            playCount: 0
          },
          updatedAt: new Date()
        });
      }
      
      console.log(`[UserSongs] Added song ${songId} to user ${userId}'s collection using Firebase SDK`);
      return;
    } catch (sdkError) {
      console.error('[UserSongs] Error adding song to user collection with Firebase SDK:', sdkError);
      
      // Fall back to REST client
      // First, get the current user document using REST API
      const userDoc = await firestoreRest.get<UserSongCollection>(COLLECTIONS.USER_SONGS, userId);
      
      if (!userDoc) {
        // Create new user songs document
        await firestoreRest.set(COLLECTIONS.USER_SONGS, userId, {
          userId,
          songs: {
            [songId]: {
              songId,
              addedAt: new Date(),
              playCount: 0
            }
          },
          createdAt: new Date(),
          updatedAt: new Date()
        });
      } else {
        // Update existing user songs document
        const updatedDoc = {
          ...userDoc,
          songs: {
            ...userDoc.songs,
            [songId]: {
              songId,
              addedAt: new Date(),
              playCount: 0
            }
          },
          updatedAt: new Date()
        };
        
        await firestoreRest.set(COLLECTIONS.USER_SONGS, userId, updatedDoc);
      }
      console.log(`[UserSongs] Added song ${songId} to user ${userId}'s collection using REST client`);
    }
  } catch (error) {
    console.error('[UserSongs] Error adding song to user collection:', error);
    throw error;
  }
}

/**
 * Remove a song from a user's collection
 */
export async function removeSongFromUserCollection(userId: string, songId: string): Promise<void> {
  try {
    // Try to remove song using Firebase SDK directly
    try {
      // Get the current user document
      const userDocRef = doc(db, COLLECTIONS.USER_SONGS, userId);
      const userDocSnap = await getDoc(userDocRef);
      
      if (!userDocSnap.exists()) {
        console.warn(`[UserSongs] User ${userId} does not have a song collection`);
        return;
      }
      
      const userData = userDocSnap.data() as UserSongCollection;
      
      if (!userData.songs || !userData.songs[songId]) {
        console.warn(`[UserSongs] Song ${songId} not found in user ${userId}'s collection`);
        return;
      }
      
      // Remove the song field using deleteField()
      await updateDoc(userDocRef, {
        [`songs.${songId}`]: deleteField(),
        updatedAt: new Date()
      });
      
      console.log(`[UserSongs] Removed song ${songId} from user ${userId}'s collection using Firebase SDK`);
      return;
    } catch (sdkError) {
      console.error('[UserSongs] Error removing song from user collection with Firebase SDK:', sdkError);
      
      // Fall back to REST client
      // First, get the current user document
      const userDoc = await firestoreRest.get<UserSongCollection>(COLLECTIONS.USER_SONGS, userId);
      
      if (!userDoc) {
        console.warn(`[UserSongs] User ${userId} does not have a song collection`);
        return;
      }
      
      // Create a new songs object without the removed song
      const { [songId]: removedSong, ...remainingSongs } = userDoc.songs;
      
      // Update the document
      const updatedDoc = {
        ...userDoc,
        songs: remainingSongs,
        updatedAt: new Date()
      };
      
      await firestoreRest.set(COLLECTIONS.USER_SONGS, userId, updatedDoc);
      console.log(`[UserSongs] Removed song ${songId} from user ${userId}'s collection using REST client`);
    }
  } catch (error) {
    console.error('[UserSongs] Error removing song from user collection:', error);
    throw error;
  }
}

/**
 * Get all songs in a user's collection
 */
export async function getUserSongCollection(userId: string): Promise<UserSongCollection | null> {
  try {
    // Try to get the user's song collection using Firebase SDK directly
    try {
      const userDocRef = doc(db, COLLECTIONS.USER_SONGS, userId);
      const userDocSnap = await getDoc(userDocRef);
      
      if (userDocSnap.exists()) {
        return { id: userDocSnap.id, ...userDocSnap.data() } as UserSongCollection;
      }
      return null;
    } catch (sdkError) {
      console.error('[UserSongs] Error getting user song collection with Firebase SDK:', sdkError);
      
      // Fall back to REST client if SDK fails
      const userDoc = await firestoreRest.get<UserSongCollection>(COLLECTIONS.USER_SONGS, userId);
      return userDoc;
    }
  } catch (error) {
    console.error('[UserSongs] Error getting user song collection:', error);
    throw error;
  }
}

/**
 * Check if a user has a specific song in their collection
 */
export async function hasUserSelectedSong(userId: string, songId: string): Promise<boolean> {
  try {
    const userDoc = await firestoreRest.get<UserSongCollection>(COLLECTIONS.USER_SONGS, userId);
    
    if (!userDoc) {
      return false;
    }
    
    return !!userDoc.songs && !!userDoc.songs[songId];
  } catch (error) {
    console.error('[UserSongs] Error checking if user has selected song:', error);
    return false;
  }
}

/**
 * Update play stats for a song in a user's collection
 */
export async function updateSongPlayStats(userId: string, songId: string): Promise<void> {
  try {
    // Try to update play stats using Firebase SDK directly
    try {
      // Get the current user document
      const userDocRef = doc(db, COLLECTIONS.USER_SONGS, userId);
      const userDocSnap = await getDoc(userDocRef);
      
      if (!userDocSnap.exists()) {
        console.warn(`[UserSongs] User ${userId} does not have a song collection`);
        return;
      }
      
      const userData = userDocSnap.data() as UserSongCollection;
      
      if (!userData.songs || !userData.songs[songId]) {
        console.warn(`[UserSongs] Song ${songId} not found in user ${userId}'s collection`);
        return;
      }
      
      // Update the play count
      const updatedSong = {
        ...userData.songs[songId],
        playCount: (userData.songs[songId].playCount || 0) + 1,
        lastPlayedAt: new Date()
      };
      
      // Update the document
      await updateDoc(userDocRef, {
        [`songs.${songId}`]: updatedSong,
        updatedAt: new Date()
      });
      
      console.log(`[UserSongs] Updated play stats for song ${songId} in user ${userId}'s collection using Firebase SDK`);
      return;
    } catch (sdkError) {
      console.error('[UserSongs] Error updating song play stats with Firebase SDK:', sdkError);
      
      // Fall back to REST client
      // First, get the current user document
      const userDoc = await firestoreRest.get<UserSongCollection>(COLLECTIONS.USER_SONGS, userId);
      
      if (!userDoc || !userDoc.songs || !userDoc.songs[songId]) {
        console.warn(`[UserSongs] Song ${songId} not found in user ${userId}'s collection`);
        return;
      }
      
      // Update the play count
      const updatedSong = {
        ...userDoc.songs[songId],
        playCount: (userDoc.songs[songId].playCount || 0) + 1,
        lastPlayedAt: new Date()
      };
      
      // Update the document
      const updatedDoc = {
        ...userDoc,
        songs: {
          ...userDoc.songs,
          [songId]: updatedSong
        },
        updatedAt: new Date()
      };
      
      await firestoreRest.set(COLLECTIONS.USER_SONGS, userId, updatedDoc);
      console.log(`[UserSongs] Updated play stats for song ${songId} in user ${userId}'s collection using REST client`);
    }
  } catch (error) {
    console.error('[UserSongs] Error updating song play stats:', error);
    throw error;
  }
} 