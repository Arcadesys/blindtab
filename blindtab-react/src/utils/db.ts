import { Song, SongData } from '../types/song';
import { db, COLLECTIONS } from './firebase';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  query,
  where
} from 'firebase/firestore';

export const songOperations = {
  init: async (): Promise<boolean> => {
    try {
      // Test connection by trying to get a document
      await getDocs(collection(db, COLLECTIONS.SONGS));
      return true;
    } catch (error) {
      console.error('Failed to initialize Firestore:', error);
      return false;
    }
  },

  checkConnection: async (): Promise<boolean> => {
    try {
      await getDocs(collection(db, COLLECTIONS.SONGS));
      return true;
    } catch (error) {
      console.error('Failed to connect to Firestore:', error);
      return false;
    }
  },

  getAllSongs: async (): Promise<Song[]> => {
    try {
      const snapshot = await getDocs(collection(db, COLLECTIONS.SONGS));
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Song));
    } catch (error) {
      console.error('Failed to get songs:', error);
      return [];
    }
  },

  getSongById: async (id: string): Promise<SongData | null> => {
    try {
      const docRef = doc(db, COLLECTIONS.SONGS, id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return docSnap.data() as SongData;
      }
      return null;
    } catch (error) {
      console.error(`Failed to get song ${id}:`, error);
      return null;
    }
  },

  createSong: async (songData: SongData): Promise<string | null> => {
    try {
      const docRef = doc(collection(db, COLLECTIONS.SONGS));
      await setDoc(docRef, songData);
      return docRef.id;
    } catch (error) {
      console.error('Failed to create song:', error);
      return null;
    }
  },

  updateSong: async (id: string, markdown: string): Promise<boolean> => {
    try {
      const docRef = doc(db, COLLECTIONS.SONGS, id);
      await updateDoc(docRef, { markdown });
      return true;
    } catch (error) {
      console.error(`Failed to update song ${id}:`, error);
      return false;
    }
  },

  deleteSong: async (id: string): Promise<boolean> => {
    try {
      await deleteDoc(doc(db, COLLECTIONS.SONGS, id));
      return true;
    } catch (error) {
      console.error(`Failed to delete song ${id}:`, error);
      return false;
    }
  },

  addTagToSong: async (songId: string, tagName: string): Promise<boolean> => {
    try {
      const docRef = doc(db, COLLECTIONS.SONGS, songId);
      await updateDoc(docRef, {
        tags: arrayUnion(tagName)
      });
      return true;
    } catch (error) {
      console.error(`Failed to add tag ${tagName} to song ${songId}:`, error);
      return false;
    }
  },

  removeTagFromSong: async (songId: string, tagName: string): Promise<boolean> => {
    try {
      const docRef = doc(db, COLLECTIONS.SONGS, songId);
      await updateDoc(docRef, {
        tags: arrayRemove(tagName)
      });
      return true;
    } catch (error) {
      console.error(`Failed to remove tag ${tagName} from song ${songId}:`, error);
      return false;
    }
  },

  getAllTags: async () => {
    try {
      const snapshot = await getDocs(collection(db, COLLECTIONS.TAGS));
      return snapshot.docs.map(doc => doc.data().name);
    } catch (error) {
      console.error('Failed to get tags:', error);
      return [];
    }
  }
}; 