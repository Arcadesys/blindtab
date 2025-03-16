/**
 * Firebase Debug Utility
 * 
 * This file provides debugging tools for Firebase connection issues
 * in production environments.
 */

import { db, auth, isPreviewDeployment, firestoreRest } from './firebase';
import { collection, getDocs, query, limit, initializeFirestore } from 'firebase/firestore';
import { COLLECTIONS } from './firebase';
import { getApp } from 'firebase/app';

/**
 * Comprehensive Firebase connection test
 * Logs detailed information about the current environment and attempts
 * to diagnose common Firebase connection issues
 */
export const runFirebaseDebug = async () => {
  console.group('🔍 Firebase Debug Report');
  
  // Environment information
  console.log('Environment Information:');
  console.log('- Current URL:', window.location.href);
  console.log('- Hostname:', window.location.hostname);
  console.log('- Protocol:', window.location.protocol);
  console.log('- User Agent:', navigator.userAgent);
  console.log('- Preview Deployment:', isPreviewDeployment ? 'Yes' : 'No');
  console.log('- Firebase Config:', {
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  });
  
  // Auth state
  console.log('Auth State:');
  console.log('- Current User:', auth.currentUser ? 'Signed In' : 'Not Signed In');
  
  // Check if Firestore database exists
  console.log('Checking if Firestore database exists...');
  try {
    // Use the REST client to test the connection
    const databaseExists = await firestoreRest.testConnection();
    
    if (databaseExists) {
      console.log('✅ Firestore database exists and is accessible');
    } else {
      console.error('❌ Firestore database does not exist or is not accessible!');
      console.log('🔧 You need to create a Firestore database in the Firebase Console:');
      console.log('   1. Go to https://console.firebase.google.com/project/' + import.meta.env.VITE_FIREBASE_PROJECT_ID + '/firestore');
      console.log('   2. Click "Create database"');
      console.log('   3. Choose either production or test mode');
      console.log('   4. Select a location close to your users');
      console.log('   5. Wait for the database to be provisioned (this can take a few minutes)');
      console.log('   6. Create a collection called "songs" to store your songs');
    }
  } catch (error) {
    console.error('❌ Error checking if Firestore database exists:', error);
  }
  
  // Test REST client connection
  console.log('Testing REST Client Connection...');
  try {
    const testCollection = 'firebase_test';
    const testDocId = 'rest_test_' + Date.now();
    const testData = {
      message: 'Hello from REST API',
      timestamp: new Date(),
      testValue: 42
    };
    
    // Create test document
    await firestoreRest.set(testCollection, testDocId, testData);
    console.log('✅ REST Client Connection Successful');
    
    // Get the document
    const doc = await firestoreRest.get(testCollection, testDocId);
    console.log('- Test Document:', doc);
    
    // Delete the document
    await firestoreRest.delete(testCollection, testDocId);
    console.log('- Test Document Deleted');
  } catch (error: any) {
    console.error('❌ REST Client Connection Failed:', error);
    console.log('- Error Code:', error.code);
    console.log('- Error Message:', error.message);
    
    // Check for common REST API issues
    if (error.message?.includes('404')) {
      console.log('🔧 Possible Fix: Project ID may be incorrect or Firestore database not created.');
      console.log(`   Current Project ID: ${import.meta.env.VITE_FIREBASE_PROJECT_ID}`);
      console.log('   You need to create a Firestore database in the Firebase Console.');
    } else if (error.message?.includes('403')) {
      console.log('🔧 Possible Fix: API Key may be invalid or missing permissions.');
      console.log('   Check your Firebase API key and make sure it has Firestore permissions.');
    } else if (error.message?.includes('401')) {
      console.log('🔧 Possible Fix: Authentication issue. API Key may be invalid.');
    }
  }
  
  // Test Firestore connection
  console.log('Testing Firestore Connection...');
  try {
    const songsRef = collection(db, COLLECTIONS.SONGS);
    const q = query(songsRef, limit(1));
    const startTime = performance.now();
    const snapshot = await getDocs(q);
    const endTime = performance.now();
    
    console.log('✅ Firestore Connection Successful:');
    console.log(`- Query Time: ${(endTime - startTime).toFixed(2)}ms`);
    console.log(`- Documents Found: ${snapshot.size}`);
    
    // Test document access
    if (snapshot.size > 0) {
      const doc = snapshot.docs[0];
      console.log('- Sample Document:', {
        id: doc.id,
        exists: doc.exists(),
        data: doc.data()
      });
    }
  } catch (error: any) {
    console.error('❌ Firestore Connection Failed:', error);
    console.log('- Error Code:', error.code);
    console.log('- Error Message:', error.message);
    
    // Provide troubleshooting guidance based on error
    if (error.code === 'permission-denied') {
      console.log('🔧 Possible Fix: This domain may not be authorized in Firebase.');
      console.log('   Add it in Firebase Console -> Authentication -> Sign-in method -> Authorized domains');
    } else if (error.code === 'unavailable' || error.message?.includes('network')) {
      console.log('🔧 Possible Fix: Network connectivity issue or Firebase service disruption.');
      console.log('   Check Firebase Status: https://status.firebase.google.com/');
    } else if (error.code === 'resource-exhausted') {
      console.log('🔧 Possible Fix: Firebase quota exceeded. Check your billing plan.');
    } else if (error.code === 'failed-precondition') {
      console.log('🔧 Possible Fix: Firestore indexes may be missing.');
      console.log('   Check Firebase Console -> Firestore -> Indexes');
    } else if (error.message?.includes('400') || error.message?.includes('Bad Request') || error.message?.includes('jd')) {
      console.log('🔧 Possible Fix: WebChannel connection issue (Bad Request).');
      console.log('   This is a known issue with Firebase WebChannel connections.');
      
      // Try to fix the issue
      console.log('Attempting to fix WebChannel connection issue...');
      try {
        const app = getApp();
        
        // Try to create a new Firestore instance with different settings
        const newDb = initializeFirestore(app, {
          experimentalForceLongPolling: true,
          ssl: true,
          ignoreUndefinedProperties: true
        });
        
        // Apply additional settings
        // @ts-ignore - This is a workaround for Firebase WebChannel connection issues
        newDb._settings = {
          // @ts-ignore
          ...newDb._settings,
          host: `firestore.googleapis.com`,
          ssl: true
        };
        
        // Test the new connection
        const newSongsRef = collection(newDb, COLLECTIONS.SONGS);
        const newQ = query(newSongsRef, limit(1));
        const newStartTime = performance.now();
        const newSnapshot = await getDocs(newQ);
        const newEndTime = performance.now();
        
        console.log('✅ Connection Fixed with New Settings:');
        console.log(`- Query Time: ${(newEndTime - newStartTime).toFixed(2)}ms`);
        console.log(`- Documents Found: ${newSnapshot.size}`);
        
        console.log('To fix this issue permanently, update your Firebase configuration:');
        console.log(`
// In your firebase.ts file:
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  ssl: true,
  ignoreUndefinedProperties: true
});

// Then apply this workaround:
// @ts-ignore
db._settings = {
  // @ts-ignore
  ...db._settings,
  host: 'firestore.googleapis.com',
  ssl: true
};
        `);
      } catch (fixError) {
        console.error('Failed to fix WebChannel connection issue:', fixError);
      }
    }
  }
  
  // Network diagnostics
  console.log('Network Diagnostics:');
  console.log('- Online Status:', navigator.onLine ? 'Online' : 'Offline');
  
  // Check for CORS issues
  console.log('Testing CORS Configuration...');
  try {
    const response = await fetch(`https://${import.meta.env.VITE_FIREBASE_PROJECT_ID}.firebaseio.com/.json?shallow=true`);
    console.log('- CORS Test Status:', response.status);
    console.log('- CORS Test OK:', response.ok);
  } catch (error) {
    console.error('- CORS Test Failed:', error);
  }
  
  console.groupEnd();
  
  return 'Firebase debug complete. Check console for detailed report.';
};

// Export a function to add this to the window for easy access in production
export const addDebugToWindow = () => {
  (window as any).runFirebaseDebug = runFirebaseDebug;
  console.log('Firebase debug utility added to window. Run window.runFirebaseDebug() in console.');
}; 