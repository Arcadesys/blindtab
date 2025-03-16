import { Song, SongData } from '../types/song';
import { db, COLLECTIONS } from './firebase';
import { parseMarkdown } from './markdownParser';
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
  where,
  Timestamp,
  serverTimestamp
} from 'firebase/firestore';

// Test function to create a sample song
export const createSampleSong = async (): Promise<string | null> => {
  const sampleSong: SongData = {
    songInfo: {
      title: "Fake Plastic Trees",
      artist: "Radiohead",
      key: "G",
      difficulty: "intermediate"
    },
    lyrics: [
      { chord: "G", line: "Her green plastic watering can", position: 0 },
      { chord: "Em", line: "For her fake Chinese rubber plant", position: 1 },
      { chord: "C", line: "In the fake plastic earth", position: 2 },
      { chord: "G", line: "That she bought from a rubber man", position: 3 },
      { chord: "D", line: "In a town full of rubber plans", position: 4 },
      { chord: "Am", line: "To get rid of itself", position: 5 },
      { chord: "Em", line: "It wears her out", position: 6 },
      { chord: "G", line: "It wears her out", position: 7 },
      { chord: "Em", line: "It wears her out", position: 8 },
      { chord: "G", line: "It wears her out", position: 9 },
      { chord: "G", line: "She lives with a broken man", position: 10 }
    ],
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
    tags: ["rock", "90s", "alternative"]
  };

  return await songOperations.createSong(sampleSong);
};

export const songOperations = {
  init: async (): Promise<boolean> => {
    try {
      // Test connection by trying to get a document
      await getDocs(collection(db, COLLECTIONS.SONGS));
      console.log('[Firestore] Successfully initialized');
      return true;
    } catch (error) {
      console.error('[Firestore] Failed to initialize:', error);
      return false;
    }
  },

  checkConnection: async (): Promise<boolean> => {
    try {
      await getDocs(collection(db, COLLECTIONS.SONGS));
      console.log('[Firestore] Connection check successful');
      return true;
    } catch (error) {
      console.error('[Firestore] Connection check failed:', error);
      return false;
    }
  },

  getAllSongs: async (): Promise<Song[]> => {
    try {
      console.log('[Firestore] Fetching all songs');
      const snapshot = await getDocs(collection(db, COLLECTIONS.SONGS));
      const songs = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.songInfo?.title || 'Untitled',
          artist: data.songInfo?.artist || 'Unknown Artist',
          filename: `${doc.id}.md`,
          tags: data.tags || []
        } as Song;
      });
      console.log(`[Firestore] Found ${songs.length} songs`);
      return songs;
    } catch (error) {
      console.error('[Firestore] Failed to get songs:', error);
      return [];
    }
  },

  getSongById: async (id: string): Promise<SongData | null> => {
    try {
      console.log(`[Firestore] Fetching song ${id}`);
      const docRef = doc(db, COLLECTIONS.SONGS, id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return docSnap.data() as SongData;
      }
      console.log(`[Firestore] Song ${id} not found`);
      return null;
    } catch (error) {
      console.error(`[Firestore] Failed to get song ${id}:`, error);
      return null;
    }
  },

  createSong: async (songData: SongData): Promise<string | null> => {
    try {
      console.log('[Firestore] Creating new song');
      const docRef = doc(collection(db, COLLECTIONS.SONGS));
      const timestamp = serverTimestamp();
      
      await setDoc(docRef, {
        ...songData,
        createdAt: timestamp,
        updatedAt: timestamp
      });

      console.log(`[Firestore] Created song with ID: ${docRef.id}`);
      return docRef.id;
    } catch (error) {
      console.error('[Firestore] Failed to create song:', error);
      return null;
    }
  },

  updateSong: async (id: string, markdown: string): Promise<boolean> => {
    try {
      console.log(`[Firestore] Updating song ${id}`);
      const docRef = doc(db, COLLECTIONS.SONGS, id);
      
      // Parse the markdown into song data
      const songData = parseMarkdown(markdown);
      
      await updateDoc(docRef, {
        ...songData,
        updatedAt: serverTimestamp()
      });
      return true;
    } catch (error) {
      console.error(`[Firestore] Failed to update song ${id}:`, error);
      return false;
    }
  },

  deleteSong: async (id: string): Promise<boolean> => {
    try {
      console.log(`[Firestore] Deleting song ${id}`);
      await deleteDoc(doc(db, COLLECTIONS.SONGS, id));
      return true;
    } catch (error) {
      console.error(`[Firestore] Failed to delete song ${id}:`, error);
      return false;
    }
  },

  addTagToSong: async (songId: string, tagName: string): Promise<boolean> => {
    try {
      console.log(`[Firestore] Adding tag ${tagName} to song ${songId}`);
      const docRef = doc(db, COLLECTIONS.SONGS, songId);
      await updateDoc(docRef, {
        tags: arrayUnion(tagName),
        updatedAt: serverTimestamp()
      });
      return true;
    } catch (error) {
      console.error(`[Firestore] Failed to add tag ${tagName} to song ${songId}:`, error);
      return false;
    }
  },

  removeTagFromSong: async (songId: string, tagName: string): Promise<boolean> => {
    try {
      console.log(`[Firestore] Removing tag ${tagName} from song ${songId}`);
      const docRef = doc(db, COLLECTIONS.SONGS, songId);
      await updateDoc(docRef, {
        tags: arrayRemove(tagName),
        updatedAt: serverTimestamp()
      });
      return true;
    } catch (error) {
      console.error(`[Firestore] Failed to remove tag ${tagName} from song ${songId}:`, error);
      return false;
    }
  },

  getAllTags: async () => {
    try {
      console.log('[Firestore] Fetching all tags');
      const snapshot = await getDocs(collection(db, COLLECTIONS.TAGS));
      return snapshot.docs.map(doc => doc.data().name);
    } catch (error) {
      console.error('[Firestore] Failed to get tags:', error);
      return [];
    }
  }
}; 