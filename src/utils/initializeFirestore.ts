/**
 * Firestore Database Initializer
 * 
 * This utility helps initialize a new Firestore database with sample data
 */

import { firestoreRest } from './firebase';
import { mockSongs } from './mockData';
import { COLLECTIONS } from './firebase';
import { isDev } from './env';
import { collection, getDocs, doc, setDoc, query, limit } from 'firebase/firestore';
import { db } from './firebase';

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
    
    if (isDev) {
      // In development mode, use Firebase SDK directly to avoid CORS issues
      try {
        console.log('Using Firebase SDK directly (development mode)');
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
    } else {
      // In production, use REST client
      databaseExists = await firestoreRest.testConnection();
    }
    
    if (!databaseExists) {
      console.error('❌ Firestore database not found or not accessible');
      console.log('Please create a Firestore database in the Firebase Console first.');
      console.groupEnd();
      return false;
    }
    
    // Check if songs collection already has data
    console.log('Checking if songs collection already has data...');
    let hasExistingSongs = false;
    
    try {
      if (isDev) {
        // Use Firebase SDK directly
        const songsQuery = query(collection(db, COLLECTIONS.SONGS), limit(1));
        const snapshot = await getDocs(songsQuery);
        hasExistingSongs = !snapshot.empty;
      } else {
        // Use REST client
        const existingSongs = await firestoreRest.list(COLLECTIONS.SONGS, 1);
        hasExistingSongs = existingSongs && existingSongs.length > 0;
      }
      
      if (hasExistingSongs) {
        console.log('✅ Songs collection already has data. Skipping initialization.');
        console.groupEnd();
        return true;
      }
    } catch (error) {
      // Collection might not exist yet, which is fine
      console.log('Songs collection does not exist yet. Will create it.');
    }
    
    // Add sample songs from mock data
    console.log('Adding sample songs to Firestore...');
    
    for (const song of mockSongs) {
      console.log(`Adding song: ${song.title}`);
      
      if (isDev) {
        // Use Firebase SDK directly
        // Create a copy of the song without the id field
        const { id, ...songData } = song;
        
        // Use the id from the song as the document ID
        await setDoc(doc(db, COLLECTIONS.SONGS, id), songData);
      } else {
        // Use REST client
        await firestoreRest.set(COLLECTIONS.SONGS, song.id, song);
      }
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