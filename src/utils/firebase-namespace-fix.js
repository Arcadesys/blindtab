/**
 * Firebase Namespace Fix
 * 
 * This script fixes Firebase WebChannel issues for the namespace version of Firebase.
 */

(function() {
  console.group('🔧 Firebase Namespace Fix');
  
  try {
    // Check if Firebase namespace is available
    if (typeof firebase === 'undefined') {
      console.error('❌ Firebase namespace not found. Loading Firebase...');
      
      // Load Firebase scripts
      const loadScript = (src) => {
        return new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = src;
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      };
      
      // Load Firebase scripts sequentially
      loadScript('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js')
        .then(() => loadScript('https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js'))
        .then(() => {
          console.log('✅ Firebase loaded successfully');
          applyFix();
        })
        .catch(error => {
          console.error('❌ Failed to load Firebase:', error);
        });
    } else {
      console.log('✅ Firebase namespace found');
      applyFix();
    }
    
    function applyFix() {
      // Initialize Firebase if not already initialized
      if (!firebase.apps.length) {
        firebase.initializeApp({
          projectId: 'blindtab-db',
          apiKey: 'AIzaSyDummyKeyForSecurity',
          authDomain: 'blindtab-db.firebaseapp.com'
        });
        console.log('✅ Firebase initialized');
      }
      
      // Get Firestore instance
      const db = firebase.firestore();
      
      // Apply settings to fix WebChannel issues
      db.settings({
        experimentalForceLongPolling: true,
        merge: true,
        ssl: true,
        host: 'firestore.googleapis.com',
        ignoreUndefinedProperties: true,
        cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
      });
      
      console.log('✅ Applied Firestore settings to fix WebChannel issues');
      
      // Expose to window
      window.db = db;
      window._fixed_db = db;
      
      console.log('✅ Fix applied successfully');
    }
  } catch (error) {
    console.error('❌ Error applying Firebase namespace fix:', error);
  }
  
  console.groupEnd();
})(); 