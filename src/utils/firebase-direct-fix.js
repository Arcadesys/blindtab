/**
 * Firebase Direct Fix Script
 * 
 * This script directly fixes the WebChannel connection issue in production
 * by dynamically loading Firebase and applying the correct settings.
 * 
 * HOW TO USE:
 * 1. Copy this entire script
 * 2. Open your production site in Chrome
 * 3. Open Chrome DevTools (F12)
 * 4. Paste this script into the console and press Enter
 * 5. The fix will be applied automatically
 */

(async function() {
  console.group('🔧 Firebase Direct Fix');
  
  console.log('Applying WebChannel connection fix...');
  
  // Step 1: Load Firebase SDK dynamically
  try {
    // Load Firebase App
    const appScript = document.createElement('script');
    appScript.src = 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';
    document.head.appendChild(appScript);
    
    await new Promise(resolve => {
      appScript.onload = resolve;
      setTimeout(resolve, 3000); // Timeout after 3 seconds
    });
    
    // Load Firestore
    const firestoreScript = document.createElement('script');
    firestoreScript.src = 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';
    document.head.appendChild(firestoreScript);
    
    await new Promise(resolve => {
      firestoreScript.onload = resolve;
      setTimeout(resolve, 3000); // Timeout after 3 seconds
    });
    
    console.log('✅ Firebase SDK loaded successfully');
  } catch (error) {
    console.error('❌ Failed to load Firebase SDK:', error);
    console.groupEnd();
    return;
  }
  
  // Step 2: Initialize Firebase with the correct settings
  try {
    // Initialize Firebase
    const firebaseConfig = {
      projectId: 'blindtab-db',
      apiKey: 'AIzaSyDummyKeyForSecurity', // This is just a placeholder
      authDomain: 'blindtab-db.firebaseapp.com'
    };
    
    // Check if Firebase is available
    if (typeof firebase === 'undefined') {
      throw new Error('Firebase SDK not available');
    }
    
    // Initialize Firebase app
    const app = firebase.initializeApp(firebaseConfig, 'direct-fix');
    console.log('✅ Firebase app initialized');
    
    // Initialize Firestore with correct settings
    const db = firebase.firestore(app);
    db.settings({
      experimentalForceLongPolling: true,
      ssl: true,
      host: 'firestore.googleapis.com',
      ignoreUndefinedProperties: true
    });
    
    console.log('✅ Applied WebChannel connection fix');
    console.log('🔄 Please refresh the page for the changes to take effect');
    
    // Expose to window for debugging
    window._fixed_firebase_app = app;
    window._fixed_db = db;
    
    // Test the connection
    try {
      const songsCollection = db.collection('songs');
      const snapshot = await songsCollection.limit(1).get();
      console.log(`✅ Connection test successful, found ${snapshot.size} documents`);
    } catch (testError) {
      console.error('❌ Connection test failed:', testError);
    }
  } catch (error) {
    console.error('❌ Failed to initialize Firebase:', error);
  }
  
  console.groupEnd();
})(); 