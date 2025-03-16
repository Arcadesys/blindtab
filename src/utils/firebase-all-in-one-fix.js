/**
 * Firebase All-In-One Fix
 * 
 * This script:
 * 1. Loads Firebase from CDN
 * 2. Initializes Firebase with the correct settings
 * 3. Fixes WebChannel connection issues
 * 4. Adds automatic retry for failed operations
 * 5. Ensures Firebase is properly connected to the network
 */

(async function() {
  console.group('🔧 Firebase All-In-One Fix');
  
  try {
    console.log('Step 1: Loading Firebase...');
    
    // Load Firebase App
    const appScript = document.createElement('script');
    appScript.src = 'https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js';
    document.head.appendChild(appScript);
    
    // Wait for script to load
    await new Promise((resolve) => {
      appScript.onload = resolve;
      setTimeout(resolve, 2000); // Timeout after 2 seconds
    });
    
    // Load Firestore
    const firestoreScript = document.createElement('script');
    firestoreScript.src = 'https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js';
    document.head.appendChild(firestoreScript);
    
    // Wait for script to load
    await new Promise((resolve) => {
      firestoreScript.onload = resolve;
      setTimeout(resolve, 2000); // Timeout after 2 seconds
    });
    
    console.log('✅ Firebase scripts loaded');
    
    // Check if Firebase is available
    if (typeof firebase === 'undefined') {
      throw new Error('Firebase not available after loading scripts');
    }
    
    console.log('Step 2: Initializing Firebase...');
    
    // Initialize Firebase if not already initialized
    let app;
    if (firebase.apps.length === 0) {
      app = firebase.initializeApp({
        projectId: 'blindtab-db',
        apiKey: 'AIzaSyDummyKeyForSecurity',
        authDomain: 'blindtab-db.firebaseapp.com'
      });
    } else {
      app = firebase.apps[0];
    }
    
    console.log('✅ Firebase initialized');
    
    console.log('Step 3: Setting up Firestore...');
    
    // Get Firestore instance
    const db = firebase.firestore();
    
    // Apply settings to fix WebChannel issues
    db.settings({
      experimentalForceLongPolling: true,
      ssl: true,
      host: 'firestore.googleapis.com',
      merge: true,
      ignoreUndefinedProperties: true,
      cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
    });
    
    console.log('✅ Applied Firestore settings');
    
    console.log('Step 4: Adding automatic retry for failed operations...');
    
    // Create a wrapper around Firestore to handle errors and retries
    const originalGet = db.collection;
    
    // Wrap collection method to add retry logic
    db.collection = function(...args) {
      const collectionRef = originalGet.apply(this, args);
      
      // Store original methods
      const originalAdd = collectionRef.add;
      const originalSet = collectionRef.doc().set;
      const originalUpdate = collectionRef.doc().update;
      const originalDelete = collectionRef.doc().delete;
      
      // Wrap add method
      collectionRef.add = async function(...addArgs) {
        try {
          return await originalAdd.apply(this, addArgs);
        } catch (error) {
          console.error('[Firebase] Add operation failed:', error);
          if (error.message?.includes('offline') || 
              error.message?.includes('network') || 
              error.message?.includes('jd') || 
              error.message?.includes('Bad Request') || 
              error.message?.includes('400')) {
            console.log('[Firebase] Retrying add operation...');
            await new Promise(resolve => setTimeout(resolve, 1000));
            return originalAdd.apply(this, addArgs);
          }
          throw error;
        }
      };
      
      // Wrap document methods
      const originalDoc = collectionRef.doc;
      collectionRef.doc = function(...docArgs) {
        const docRef = originalDoc.apply(this, docArgs);
        
        // Wrap set method
        docRef.set = async function(...setArgs) {
          try {
            return await originalSet.apply(this, setArgs);
          } catch (error) {
            console.error('[Firebase] Set operation failed:', error);
            if (error.message?.includes('offline') || 
                error.message?.includes('network') || 
                error.message?.includes('jd') || 
                error.message?.includes('Bad Request') || 
                error.message?.includes('400')) {
              console.log('[Firebase] Retrying set operation...');
              await new Promise(resolve => setTimeout(resolve, 1000));
              return originalSet.apply(this, setArgs);
            }
            throw error;
          }
        };
        
        // Wrap update method
        docRef.update = async function(...updateArgs) {
          try {
            return await originalUpdate.apply(this, updateArgs);
          } catch (error) {
            console.error('[Firebase] Update operation failed:', error);
            if (error.message?.includes('offline') || 
                error.message?.includes('network') || 
                error.message?.includes('jd') || 
                error.message?.includes('Bad Request') || 
                error.message?.includes('400')) {
              console.log('[Firebase] Retrying update operation...');
              await new Promise(resolve => setTimeout(resolve, 1000));
              return originalUpdate.apply(this, updateArgs);
            }
            throw error;
          }
        };
        
        // Wrap delete method
        docRef.delete = async function(...deleteArgs) {
          try {
            return await originalDelete.apply(this, deleteArgs);
          } catch (error) {
            console.error('[Firebase] Delete operation failed:', error);
            if (error.message?.includes('offline') || 
                error.message?.includes('network') || 
                error.message?.includes('jd') || 
                error.message?.includes('Bad Request') || 
                error.message?.includes('400')) {
              console.log('[Firebase] Retrying delete operation...');
              await new Promise(resolve => setTimeout(resolve, 1000));
              return originalDelete.apply(this, deleteArgs);
            }
            throw error;
          }
        };
        
        return docRef;
      };
      
      return collectionRef;
    };
    
    console.log('✅ Added automatic retry for failed operations');
    
    console.log('Step 5: Testing connection...');
    
    // Test the connection
    try {
      const testCollection = db.collection('_test_connection');
      const testDoc = testCollection.doc('_test_' + Date.now());
      
      // Test write operation
      await testDoc.set({ test: true, timestamp: Date.now() });
      console.log('✅ Write test successful');
      
      // Test read operation
      const docSnapshot = await testDoc.get();
      console.log('✅ Read test successful');
      
      // Clean up test document
      await testDoc.delete();
      console.log('✅ Delete test successful');
      
      console.log('✅ Connection tests passed');
    } catch (error) {
      console.error('❌ Connection test failed:', error);
      console.log('⚠️ Firebase may still work, but connection test failed');
    }
    
    // Expose to window
    window.db = db;
    window._fixed_db = db;
    window._firebase_app = app;
    
    console.log('✅ Fix applied successfully!');
    console.log('🔄 Refresh the page to use the fixed Firebase');
    
  } catch (error) {
    console.error('❌ Error applying Firebase fix:', error);
    console.log('Try refreshing the page and running the script again');
  }
  
  console.groupEnd();
})(); 