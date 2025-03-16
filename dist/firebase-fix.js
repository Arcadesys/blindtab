/**
 * Firebase Connection Fix Script
 * 
 * This script can be loaded in production to fix common Firebase connection issues.
 * Add this to your HTML with:
 * <script src="/firebase-fix.js"></script>
 */

(function() {
  console.log('🔧 Firebase Connection Fix Script loaded');
  
  // Special access for development features in production
  const AUTHORIZED_DEV_EMAILS = ['austen.crowder@gmail.com'];
  
  // Wait for Firebase to be available
  function waitForFirebase(callback, maxAttempts = 30) {
    let attempts = 0;
    
    const checkFirebase = () => {
      attempts++;
      
      // Check if Firebase is available - look for our marker or the Firebase SDK
      if (window._firebaseInitialized || window.firebase || window._firebase_app) {
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
  
  // Track retry attempts to avoid infinite loops
  let retryCount = 0;
  const MAX_RETRIES = 3;
  let hasAppliedFix = false;
  let isUsingProxy = false;
  let isEmulator = false;

  // Check if we're in an emulator environment
  function checkEmulator() {
    const host = window.location.hostname;
    const port = window.location.port;
    
    // Check if we're running on localhost with emulator ports
    return (host === 'localhost' || host === '127.0.0.1') && 
           (port === '5002' || port === '5000' || port === '3000' || port === '5173');
  }
  
  // Main fix function
  function fixFirebaseConnection() {
    if (hasAppliedFix) {
      console.log('[Firebase Fix] Fixes already applied, skipping');
      return;
    }
    
    console.log('[Firebase Fix] Applying WebChannel connection fixes');
    
    // Check if we're in emulator mode
    isEmulator = checkEmulator();
    if (isEmulator) {
      console.log('[Firebase Fix] Emulator environment detected');
    }
    
    // Store original fetch
    const originalFetch = window.fetch;
    
    // Override fetch to handle CORS and add necessary headers
    window.fetch = function(input, init) {
      // Only intercept Firebase API calls
      if (typeof input === 'string' && 
          (input.includes('firestore.googleapis.com') || 
           input.includes('www.googleapis.com/identitytoolkit'))) {
        
        console.log('[Firebase Fix] Intercepted Firebase request:', input.substring(0, 100) + '...');
        
        // Clone the init object to avoid modifying the original
        const newInit = init ? { ...init } : {};
        
        // Ensure headers object exists
        newInit.headers = newInit.headers || {};
        
        // Add necessary headers for CORS
        if (typeof newInit.headers.append === 'function') {
          newInit.headers.append('Accept', 'application/json');
          newInit.headers.append('Content-Type', 'application/json');
        } else {
          newInit.headers = {
            ...newInit.headers,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          };
        }
        
        // Handle WebChannel transport errors with retry logic
        return originalFetch(input, newInit)
          .then(response => {
            if (!response.ok && (response.status === 400 || response.status === 0)) {
              console.warn('[Firebase Fix] Request failed, may retry:', response.status);
              
              // Only retry a limited number of times
              if (retryCount < MAX_RETRIES) {
                retryCount++;
                console.log(`[Firebase Fix] Retrying request (${retryCount}/${MAX_RETRIES})`);
                
                // Add a small delay before retry
                return new Promise(resolve => {
                  setTimeout(() => {
                    resolve(originalFetch(input, newInit));
                  }, 500 * retryCount); // Increasing backoff
                });
              }
            }
            
            // Reset retry count on successful requests
            retryCount = 0;
            return response;
          })
          .catch(error => {
            console.error('[Firebase Fix] Fetch error:', error);
            
            // Only retry network errors a limited number of times
            if (retryCount < MAX_RETRIES && error.name === 'TypeError') {
              retryCount++;
              console.log(`[Firebase Fix] Retrying after network error (${retryCount}/${MAX_RETRIES})`);
              
              return new Promise(resolve => {
                setTimeout(() => {
                  resolve(originalFetch(input, newInit));
                }, 1000 * retryCount); // Longer backoff for network errors
              });
            }
            
            throw error;
          });
      }
      
      // Pass through non-Firebase requests
      return originalFetch(input, init);
    };
    
    // Fix Firestore settings
    const fixFirestoreSettings = () => {
      // Check if we're using the modular SDK (v9+)
      if (window._firebaseInitialized) {
        console.log('[Firebase Fix] Using Firebase v9+ modular SDK, skipping legacy settings');
        hasAppliedFix = true;
        return;
      }
      
      // Check for legacy Firebase SDK
      if (!window.firebase || !window.firebase.firestore) {
        console.log('[Firebase Fix] Firebase or Firestore not available yet, waiting...');
        setTimeout(fixFirestoreSettings, 500);
        return;
      }
      
      try {
        // Check if Firestore is already initialized with cache settings
        const db = firebase.firestore();
        
        // Check if settings have already been applied by the app
        if (db._settings && db._settings.cacheSizeBytes) {
          console.log('[Firebase Fix] Firestore already has cache settings, skipping settings application');
          
          // Just test the connection without modifying settings
          testFirestoreConnection(db);
          hasAppliedFix = true;
          return;
        }
        
        // First, set the host property
        if (isEmulator) {
          // For emulator, use localhost
          db.settings({
            host: 'localhost:8080',
            ssl: false
          });
          
          console.log('[Firebase Fix] Applied emulator settings');
        } else {
          // For production, set host first
          db.settings({
            host: 'firestore.googleapis.com'
          });
          
          // Then apply other settings
          db.settings({
            experimentalForceLongPolling: true,
            merge: true,
            ignoreUndefinedProperties: true,
            ssl: true
          });
          
          console.log('[Firebase Fix] Applied production settings');
        }
        
        // Test the connection
        testFirestoreConnection(db);
        
        hasAppliedFix = true;
      } catch (error) {
        console.error('[Firebase Fix] Error applying settings:', error);
      }
    };
    
    // Test Firestore connection
    const testFirestoreConnection = (db) => {
      console.log('[Firebase Fix] Testing Firestore connection...');
      
      // Try to access a test collection
      db.collection('firebase_test')
        .limit(1)
        .get()
        .then(() => {
          console.log('[Firebase] Firestore connection test passed');
          console.log('[Firebase] Firestore is ready to use');
        })
        .catch(error => {
          console.error('[Firebase Fix] Connection test failed:', error);
          
          // If we're still having issues, try one more approach
          if (!hasAppliedFix && !isEmulator) {
            console.log('[Firebase Fix] Trying alternative connection method...');
            
            // Reset settings and try with long polling explicitly enabled
            db.settings({
              host: 'firestore.googleapis.com',
              ssl: true,
              experimentalForceLongPolling: true,
              experimentalAutoDetectLongPolling: true,
              cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
            });
            
            // Test again
            db.collection('firebase_test')
              .limit(1)
              .get()
              .then(() => {
                console.log('[Firebase] Alternative method successful');
                hasAppliedFix = true;
              })
              .catch(finalError => {
                console.error('[Firebase Fix] All connection attempts failed:', finalError);
              });
          }
        });
    };
    
    // Start the fix process
    fixFirestoreSettings();
  }
  
  // Apply fixes when Firebase is available
  waitForFirebase(fixFirebaseConnection);
  
  // Expose fix function to window
  window.fixFirebaseConnection = fixFirebaseConnection;
  
  // Expose dev access check to window
  window.hasDevAccess = function() {
    return sessionStorage.getItem('has_dev_access') === 'true' || 
           AUTHORIZED_DEV_EMAILS.includes(
             (window.firebase && window.firebase.auth && window.firebase.auth().currentUser?.email) || ''
           );
  };
  
  console.log('🔧 Firebase fix utility added to window. Run window.fixFirebaseConnection() to apply fixes manually.');
})(); 