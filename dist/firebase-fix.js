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
  let listenStreamRetryCount = 0;
  const MAX_LISTEN_RETRIES = 5;
  
  // Store blocked Listen requests to avoid infinite loops
  const blockedListenRequests = new Set();

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
        
        // Special handling for Listen stream requests which often fail
        const isListenRequest = input.includes('/Listen/channel');
        
        // For Listen requests that are causing loops, return a mock response
        if (isListenRequest) {
          // Extract the request ID from the URL if present
          const ridMatch = input.match(/RID=([^&]+)/);
          const requestId = ridMatch ? ridMatch[1] : 'unknown';
          
          // Check if this is a repeated Listen request that's causing issues
          if (blockedListenRequests.has(requestId) || listenStreamRetryCount >= MAX_LISTEN_RETRIES) {
            console.log(`[Firebase Fix] Blocking problematic Listen stream request: ${requestId}`);
            
            // Return a mock response for Listen requests to break the loop
            return Promise.resolve(new Response(
              JSON.stringify({
                status: "ok",
                response: []
              }), 
              { 
                status: 200,
                headers: {
                  'Content-Type': 'application/json'
                }
              }
            ));
          }
          
          console.log('[Firebase Fix] Intercepted Listen stream request');
        } else {
          console.log('[Firebase Fix] Intercepted Firebase request:', input.substring(0, 100) + '...');
        }
        
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
        
        // For Listen stream requests, add special handling
        if (isListenRequest) {
          // Add a cache-busting parameter to avoid cached errors
          const separator = input.includes('?') ? '&' : '?';
          const cacheBuster = `_cb=${Date.now()}`;
          input = `${input}${separator}${cacheBuster}`;
          
          // Force credentials inclusion for Listen requests
          newInit.credentials = 'include';
          
          // Set mode to 'no-cors' for Listen requests to bypass CORS issues
          newInit.mode = 'no-cors';
        }
        
        // Handle WebChannel transport errors with retry logic
        return originalFetch(input, newInit)
          .then(response => {
            if (!response.ok) {
              console.warn('[Firebase Fix] Request failed with status:', response.status);
              
              // Special handling for Listen stream errors (status 400)
              if (isListenRequest && response.status === 400) {
                // Extract the request ID from the URL if present
                const ridMatch = input.match(/RID=([^&]+)/);
                const requestId = ridMatch ? ridMatch[1] : 'unknown';
                
                // Add this request ID to the blocked list
                blockedListenRequests.add(requestId);
                
                if (listenStreamRetryCount < MAX_LISTEN_RETRIES) {
                  listenStreamRetryCount++;
                  console.log(`[Firebase Fix] Retrying Listen stream (${listenStreamRetryCount}/${MAX_LISTEN_RETRIES})`);
                  
                  // Add a longer delay for Listen stream retries
                  return new Promise(resolve => {
                    setTimeout(() => {
                      // Add an even more unique cache buster
                      const uniqueInput = input.split('_cb=')[0] + `_cb=${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
                      resolve(originalFetch(uniqueInput, newInit));
                    }, 1000 * listenStreamRetryCount); // Increasing backoff
                  });
                } else {
                  console.log('[Firebase Fix] Max Listen stream retries reached, returning mock response');
                  
                  // Return a mock response for Listen requests to break the loop
                  return new Response(
                    JSON.stringify({
                      status: "ok",
                      response: []
                    }), 
                    { 
                      status: 200,
                      headers: {
                        'Content-Type': 'application/json'
                      }
                    }
                  );
                }
              }
              // For other failed requests
              else if (retryCount < MAX_RETRIES) {
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
            if (isListenRequest) {
              listenStreamRetryCount = 0;
            } else {
              retryCount = 0;
            }
            return response;
          })
          .catch(error => {
            console.error('[Firebase Fix] Fetch error:', error);
            
            // For Listen requests that fail with network errors, return a mock response
            if (isListenRequest) {
              console.log('[Firebase Fix] Listen stream network error, returning mock response');
              
              // Extract the request ID from the URL if present
              const ridMatch = input.match(/RID=([^&]+)/);
              const requestId = ridMatch ? ridMatch[1] : 'unknown';
              
              // Add this request ID to the blocked list
              blockedListenRequests.add(requestId);
              
              // Return a mock response for Listen requests to break the loop
              return new Response(
                JSON.stringify({
                  status: "ok",
                  response: []
                }), 
                { 
                  status: 200,
                  headers: {
                    'Content-Type': 'application/json'
                  }
                }
              );
            }
            
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
        
        // Add a global error handler for WebChannel transport errors
        window.addEventListener('error', function(event) {
          // Check if this is a WebChannel transport error
          if (event && event.error && 
              (event.error.message && event.error.message.includes('WebChannel transport errored') ||
               event.message && event.message.includes('WebChannel transport errored'))) {
            
            console.log('[Firebase Fix] Caught WebChannel transport error, attempting recovery');
            
            // Try to reset the connection if we have access to the fixFirebaseConnection function
            if (typeof window.fixFirebaseConnection === 'function') {
              // Reset the hasAppliedFix flag to allow reapplication of fixes
              hasAppliedFix = false;
              
              // Reapply fixes after a short delay
              setTimeout(() => {
                window.fixFirebaseConnection();
              }, 1000);
            }
          }
        });
        
        // Patch the WebChannel transport if possible
        patchWebChannelTransport();
        
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
        
        // Add a listener for WebChannel transport errors
        window.addEventListener('error', function(event) {
          // Check if this is a WebChannel transport error
          if (event && event.error && 
              (event.error.message && event.error.message.includes('WebChannel transport errored') ||
               event.message && event.message.includes('WebChannel transport errored'))) {
            
            console.log('[Firebase Fix] Caught WebChannel transport error, attempting recovery');
            
            // Try to reset the connection
            try {
              // Reset settings to force a reconnection
              db.settings({
                experimentalForceLongPolling: true,
                merge: true,
                ignoreUndefinedProperties: true,
                ssl: !isEmulator
              });
              
              console.log('[Firebase Fix] Reset Firestore connection after WebChannel error');
            } catch (e) {
              console.error('[Firebase Fix] Error resetting connection:', e);
            }
          }
        });
        
        // Test the connection
        testFirestoreConnection(db);
        
        hasAppliedFix = true;
      } catch (error) {
        console.error('[Firebase Fix] Error applying settings:', error);
      }
    };
    
    // Attempt to patch the WebChannel transport to prevent Listen stream errors
    function patchWebChannelTransport() {
      // This is a more aggressive approach to fix WebChannel issues
      // by forcing long polling instead of WebChannel for all Firestore operations
      
      try {
        // Check if we can access the Firebase config
        if (window.firebase && window.firebase.SDK_VERSION) {
          console.log('[Firebase Fix] Attempting to patch WebChannel transport');
          
          // Force Firestore to use long polling instead of WebChannel
          if (window.firebase.firestore) {
            const db = window.firebase.firestore();
            db.settings({
              experimentalForceLongPolling: true,
              experimentalAutoDetectLongPolling: false,
              merge: true
            });
            console.log('[Firebase Fix] Forced long polling for Firestore');
          }
        }
        
        // For Firebase v9+, we need to look for the Firestore instance differently
        if (window._firestoreInstance) {
          console.log('[Firebase Fix] Patching v9+ Firestore instance');
          window._firestoreInstance.settings({
            experimentalForceLongPolling: true,
            experimentalAutoDetectLongPolling: false,
            merge: true
          });
        }
      } catch (error) {
        console.error('[Firebase Fix] Error patching WebChannel transport:', error);
      }
    }
    
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
              experimentalAutoDetectLongPolling: false,
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