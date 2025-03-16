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
      // Check if we're in emulator mode
      const isLocalhost = window.location.hostname === 'localhost' || 
                         window.location.hostname === '127.0.0.1';
      const isEmulator = isLocalhost && 
                        (window.location.port === '5002' || 
                         window.location.port === '5000' ||
                         window.location.port === '5001');
      
      console.log('Environment:', {
        hostname: window.location.hostname,
        port: window.location.port,
        isLocalhost,
        isEmulator
      });
      
      // 1. Fix CORS issues by adding proper headers and using a proxy if needed
      const originalFetch = window.fetch;
      window.fetch = function(url, options = {}) {
        // Only intercept Firebase API calls
        if (typeof url === 'string' && url.includes('firestore.googleapis.com')) {
          console.log('Intercepting Firebase fetch request:', url);
          
          // Check if we should use a CORS proxy
          const hasCorsIssue = sessionStorage.getItem('firestore_cors_issue') === 'true';
          
          if (!isLocalhost && hasCorsIssue) {
            // Use a CORS proxy service
            console.log('🔧 Using CORS proxy for Firebase request');
            url = 'https://corsproxy.io/?' + encodeURIComponent(url);
          } else {
            // Add CORS headers
            options.headers = options.headers || {};
            options.headers = {
              ...options.headers,
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            };
            
            // Force CORS mode
            options.mode = 'cors';
            options.credentials = 'omit';
          }
          
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
          
          if (isEmulator) {
            // Special settings for emulator
            console.log('🔧 Detected emulator environment, applying emulator settings');
            newDb.settings({
              host: 'localhost:8080',
              ssl: false
            });
            
            // Connect to emulator
            newDb.useEmulator('localhost', 8080);
          } else {
            // Apply settings to fix WebChannel issues - do this in two steps to avoid the SSL error
            // First set the host
            newDb.settings({
              host: 'firestore.googleapis.com'
            });
            
            // Then set the other options
            newDb.settings({
              experimentalForceLongPolling: true,
              merge: true,
              ignoreUndefinedProperties: true,
              ssl: true
            });
          }
          
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
              
              // If we get a CORS error, mark it for future requests
              console.log('Marking CORS issue for future requests');
              sessionStorage.setItem('firestore_cors_issue', 'true');
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