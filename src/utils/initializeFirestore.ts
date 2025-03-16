/**
 * Firestore Database Initializer
 * 
 * This utility helps initialize a new Firestore database with sample data
 */

import { mockSongs } from './mockData';
import { COLLECTIONS, db, hasDevAccess } from './firebase';
import { isDev } from './env';
import { collection, getDocs, doc, setDoc, query, limit } from 'firebase/firestore';

/**
 * Initialize the Firestore database with sample data
 * @returns true if initialization was successful
 */
export const initializeFirestore = async (): Promise<boolean> => {
  try {
    console.group('🔧 Initializing Firestore Database');
    
    // Test if the database exists and is accessible
    console.log('Testing database connection...');
    
    let databaseExists = false;
    
    try {
      console.log('Using Firebase SDK directly');
      const testQuery = query(collection(db, 'firebase_test'), limit(1));
      await getDocs(testQuery);
      databaseExists = true;
      console.log('✅ Firestore database exists and is accessible');
    } catch (error: any) {
      if (error.code === 'permission-denied') {
        // This means the database exists but we don't have permission
        console.log('✅ Firestore database exists but permission denied for test collection');
        databaseExists = true;
      } else if (error.code === 'not-found' || error.message?.includes('not found')) {
        console.error('❌ Firestore database not found');
        databaseExists = false;
      } else {
        console.error('❌ Error checking database:', error);
        databaseExists = false;
      }
    }
    
    if (!databaseExists) {
      console.error('❌ Firestore database not found. Please create it in the Firebase Console.');
      console.groupEnd();
      return false;
    }
    
    // Check if we already have songs in the database
    console.log('Checking for existing songs...');
    
    const songsQuery = query(collection(db, COLLECTIONS.SONGS), limit(1));
    const songsSnapshot = await getDocs(songsQuery);
    
    if (!songsSnapshot.empty) {
      console.log('✅ Songs already exist in the database. Skipping initialization.');
      console.groupEnd();
      return true;
    }
    
    // Check if user has dev access before initializing
    const userHasDevAccess = await hasDevAccess();
    if (!isDev && !userHasDevAccess) {
      console.log('⚠️ User does not have dev access. Skipping initialization in production.');
      console.groupEnd();
      return false;
    }
    
    console.log('🔧 Initializing database with sample data...');
    
    // Add sample songs
    console.log(`Adding ${mockSongs.length} sample songs...`);
    
    for (const song of mockSongs) {
      console.log(`Adding song: ${song.title}`);
      
      // Ensure the song has the required lyrics field
      if (!song.lyrics || !Array.isArray(song.lyrics)) {
        console.warn(`Song ${song.title} is missing the lyrics field. Adding empty lyrics.`);
        song.lyrics = [];
      }
      
      // Create a copy of the song without the id field
      const { id, ...songData } = song;
      
      // Use the id from the song as the document ID
      await setDoc(doc(db, COLLECTIONS.SONGS, id), songData);
    }
    
    console.log('✅ Successfully added sample songs to Firestore');
    console.groupEnd();
    return true;
  } catch (error) {
    console.error('❌ Error initializing Firestore:', error);
    console.groupEnd();
    return false;
  }
};

// Add to window for easy access
export const addInitializerToWindow = () => {
  (window as any).initializeFirestore = initializeFirestore;
  console.log('Firestore initializer added to window. Run window.initializeFirestore() in console to add sample data.');
}; 