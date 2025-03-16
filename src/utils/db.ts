import { Song, SongData } from '../types/song';
import { db, COLLECTIONS } from './firebase';
import { parseMarkdown } from './markdownParser';
import { env } from './env';
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

export const FALLBACK_SONGS: Song[] = [
  {
    id: 'fallback-fake-plastic-trees',
    title: 'Fake Plastic Trees',
    artist: 'Radiohead',
    filename: 'fake-plastic-trees.md',
    tags: ['rock', '90s', 'alternative']
  },
  {
    id: 'fallback-wonderwall',
    title: 'Wonderwall',
    artist: 'Oasis',
    filename: 'wonderwall.md',
    tags: ['rock', '90s', 'britpop']
  },
  {
    id: 'fallback-yesterday',
    title: 'Yesterday',
    artist: 'The Beatles',
    filename: 'yesterday.md',
    tags: ['rock', '60s', 'classic']
  }
];

export const songOperations = {
  init: async (): Promise<boolean> => {
    try {
      console.log('[Firestore] Initializing database...', {
        environment: env,
        timestamp: new Date().toISOString()
      });
      // Test connection by trying to get a document
      await getDocs(collection(db, COLLECTIONS.SONGS));
      console.log('[Firestore] Successfully initialized', {
        environment: env,
        timestamp: new Date().toISOString()
      });
      return true;
    } catch (error) {
      console.error('[Firestore] Failed to initialize:', {
        error: error.message,
        code: error.code,
        environment: env,
        timestamp: new Date().toISOString(),
        stack: error.stack
      });
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
      console.log('[Firestore] Fetching all songs', {
        environment: env,
        collection: COLLECTIONS.SONGS,
        timestamp: new Date().toISOString()
      });
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
      console.log(`[Firestore] Found ${songs.length} songs`, {
        environment: env,
        songCount: songs.length,
        songIds: songs.map(s => s.id),
        timestamp: new Date().toISOString()
      });
      return songs.length > 0 ? songs : FALLBACK_SONGS;
    } catch (error) {
      console.error('[Firestore] Failed to get songs:', {
        error: error.message,
        code: error.code,
        environment: env,
        timestamp: new Date().toISOString(),
        stack: error.stack
      });
      return FALLBACK_SONGS;
    }
  },

  getSongById: async (id: string): Promise<SongData | null> => {
    try {
      // If requesting fallback song, return it directly
      if (id === 'fallback-fake-plastic-trees') {
        return {
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
      }

      if (id === 'fallback-wonderwall') {
        return {
          songInfo: {
            title: "Wonderwall",
            artist: "Oasis",
            key: "Em",
            difficulty: "beginner"
          },
          lyrics: [
            { chord: "Em", line: "Today is gonna be the day", position: 0 },
            { chord: "G", line: "That they're gonna throw it back to you", position: 1 },
            { chord: "D", line: "By now you should've somehow", position: 2 },
            { chord: "A", line: "Realized what you gotta do", position: 3 },
            { chord: "Em", line: "I don't believe that anybody", position: 4 },
            { chord: "G", line: "Feels the way I do", position: 5 },
            { chord: "D", line: "About you now", position: 6 },
            { chord: "Em", line: "", position: 7 },
            { chord: "G", line: "Backbeat, the word is on the street", position: 8 },
            { chord: "D", line: "That the fire in your heart is out", position: 9 },
            { chord: "A", line: "I'm sure you've heard it all before", position: 10 },
            { chord: "Em", line: "But you never really had a doubt", position: 11 }
          ],
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now(),
          tags: ["rock", "90s", "britpop"]
        };
      }

      if (id === 'fallback-yesterday') {
        return {
          songInfo: {
            title: "Yesterday",
            artist: "The Beatles",
            key: "F",
            difficulty: "intermediate"
          },
          lyrics: [
            { chord: "F", line: "Yesterday,", position: 0 },
            { chord: "Em7", line: "All my troubles seemed so far away", position: 1 },
            { chord: "A7", line: "Now it looks as though they're here to stay", position: 2 },
            { chord: "Dm", line: "Oh, I believe in yesterday", position: 3 },
            { chord: "F", line: "Suddenly,", position: 4 },
            { chord: "Em7", line: "I'm not half the man I used to be", position: 5 },
            { chord: "A7", line: "There's a shadow hanging over me", position: 6 },
            { chord: "Dm", line: "Oh, yesterday came suddenly", position: 7 },
            { chord: "C", line: "Why she had to go,", position: 8 },
            { chord: "Bb", line: "I don't know, she wouldn't say", position: 9 },
            { chord: "F", line: "I said something wrong,", position: 10 },
            { chord: "Dm", line: "Now I long for yesterday", position: 11 }
          ],
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now(),
          tags: ["rock", "60s", "classic"]
        };
      }
      
      console.log(`[Firestore] Fetching song ${id}`, {
        environment: env,
        songId: id,
        timestamp: new Date().toISOString()
      });
      const docRef = doc(db, COLLECTIONS.SONGS, id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        console.log(`[Firestore] Successfully fetched song ${id}`, {
          environment: env,
          songId: id,
          timestamp: new Date().toISOString(),
          hasData: true
        });
        return docSnap.data() as SongData;
      }
      console.log(`[Firestore] Song ${id} not found`, {
        environment: env,
        songId: id,
        timestamp: new Date().toISOString(),
        hasData: false
      });
      return null;
    } catch (error) {
      console.error(`[Firestore] Failed to get song ${id}:`, {
        error: error.message,
        code: error.code,
        environment: env,
        songId: id,
        timestamp: new Date().toISOString(),
        stack: error.stack
      });
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