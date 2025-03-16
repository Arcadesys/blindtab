/**
 * Firebase Connection Fix Script
 * 
 * This script can be loaded in production to fix common Firebase connection issues.
 * Add this to your HTML with:
 * <script src="/firebase-fix.js"></script>
 */

(function() {
  console.log('🔧 Firebase Connection Fix Script loaded');
  
  // Wait for Firebase to be available
  function waitForFirebase(callback, maxAttempts = 20) {
    let attempts = 0;
    
    const checkFirebase = () => {
      attempts++;
      
      // Check if Firebase is available
      if (window.firebase || window._firebase_app) {
        console.log('✅ Firebase detected, applying fixes...');
        callback();
        return;
      }
      
      // Give up after max attempts
      if (attempts >= maxAttempts) {
        console.error('❌ Firebase not found after', maxAttempts, 'attempts');
        return;
      }
      
      // Try again in 500ms
      setTimeout(checkFirebase, 500);
    };
    
    // Start checking
    checkFirebase();
  }
  
  // Fix Firebase connection issues
  function fixFirebaseConnection() {
    try {
      // 1. Fix CORS issues by adding proper headers
      const originalFetch = window.fetch;
      window.fetch = function(url, options = {}) {
        // Only intercept Firebase API calls
        if (typeof url === 'string' && url.includes('firestore.googleapis.com')) {
          // Add CORS headers
          options.headers = options.headers || {};
          options.headers = {
            ...options.headers,
            'X-Origin': window.location.origin,
            'X-Requested-With': 'XMLHttpRequest'
          };
          
          // Force CORS mode
          options.mode = 'cors';
          options.credentials = 'omit';
          
          console.log('🔧 Applied CORS fix to Firebase fetch request');
        }
        
        return originalFetch.call(this, url, options);
      };
      
      // 2. Fix WebChannel connection issues
      if (window._firebase_app) {
        console.log('🔧 Attempting to fix WebChannel connection issues...');
        
        // Try to access Firestore
        const app = window._firebase_app;
        
        // Check if Firebase Firestore is available
        if (typeof firebase !== 'undefined' && firebase.firestore) {
          // Create a new Firestore instance with better settings
          const newDb = firebase.firestore(app);
          
          // Apply settings to fix WebChannel issues
          newDb.settings({
            experimentalForceLongPolling: true,
            merge: true,
            ignoreUndefinedProperties: true,
            host: 'firestore.googleapis.com',
            ssl: true
          });
          
          console.log('✅ Applied WebChannel connection fixes');
          
          // Replace the existing Firestore instance
          window._fixed_firestore = newDb;
          
          // Test the connection
          newDb.collection('firebase_test').limit(1).get()
            .then(() => {
              console.log('✅ Firestore connection test successful with fixed settings');
            })
            .catch(error => {
              console.error('❌ Firestore connection test failed:', error);
            });
        }
      }
      
      console.log('✅ Firebase connection fixes applied');
    } catch (error) {
      console.error('❌ Error applying Firebase fixes:', error);
    }
  }
  
  // Apply fixes when Firebase is available
  waitForFirebase(fixFirebaseConnection);
  
  // Expose fix function to window
  window.fixFirebaseConnection = fixFirebaseConnection;
  
  console.log('🔧 Firebase fix utility added to window. Run window.fixFirebaseConnection() to apply fixes manually.');
})(); 