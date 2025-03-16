/**
 * Firestore Database Initializer
 * 
 * This utility helps initialize a new Firestore database with sample data
 */

import { firestoreRest } from './firebase';
import { mockSongs } from './mockData';
import { COLLECTIONS } from './firebase';

/**
 * Initialize the Firestore database with sample data
 * @returns true if initialization was successful
 */
export const initializeFirestore = async (): Promise<boolean> => {
  try {
    console.group('🔧 Initializing Firestore Database');
    
    // Test if the database exists and is accessible
    console.log('Testing database connection...');
    const databaseExists = await firestoreRest.testConnection();
    
    if (!databaseExists) {
      console.error('❌ Firestore database not found or not accessible');
      console.log('Please create a Firestore database in the Firebase Console first.');
      console.groupEnd();
      return false;
    }
    
    // Check if songs collection already has data
    console.log('Checking if songs collection already has data...');
    try {
      const existingSongs = await firestoreRest.list(COLLECTIONS.SONGS, 1);
      if (existingSongs && existingSongs.length > 0) {
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
      await firestoreRest.set(COLLECTIONS.SONGS, song.id, song);
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