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
      
      // Check if user has dev access
      function checkDevAccess() {
        // Always allow in local development
        if (isLocalhost) {
          return true;
        }
        
        // Check if user is logged in and has authorized email
        if (window.firebase && window.firebase.auth) {
          const currentUser = window.firebase.auth().currentUser;
          if (currentUser && currentUser.email) {
            return AUTHORIZED_DEV_EMAILS.includes(currentUser.email);
          }
        }
        
        return false;
      }
      
      // Apply aggressive WebChannel fix
      // This patches the WebChannel transport to avoid 400 Bad Request errors
      function applyWebChannelFix() {
        console.log('🔧 Applying aggressive WebChannel transport fix');
        
        // Fix for WebChannel 400 Bad Request error
        if (typeof XMLHttpRequest !== 'undefined') {
          // Store the original open method
          const originalOpen = XMLHttpRequest.prototype.open;
          
          // Override the open method to fix WebChannel issues
          XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
            // Check if this is a WebChannel request
            if (typeof url === 'string' && 
                (url.includes('google.firestore.v1.Firestore') || 
                 url.includes('firestore.googleapis.com'))) {
              console.log('🔧 Intercepting WebChannel request:', url);
              
              // Add a cache-busting parameter to avoid 400 Bad Request errors
              const separator = url.includes('?') ? '&' : '?';
              const cacheBuster = `_cb=${Date.now()}`;
              url = `${url}${separator}${cacheBuster}`;
              
              console.log('🔧 Modified WebChannel URL:', url);
            }
            
            // Call the original open method with the potentially modified URL
            return originalOpen.call(this, method, url, async, user, password);
          };
          
          console.log('✅ Applied XMLHttpRequest patch for WebChannel');
        }
        
        // Try to patch the WebChannel directly if it's available
        setTimeout(() => {
          try {
            // Look for the WebChannel in the window object
            if (window.goog && window.goog.net && window.goog.net.WebChannel) {
              console.log('🔧 Found WebChannel, applying direct patch');
              
              // Store original WebChannel factory
              const originalCreateWebChannelTransport = window.goog.net.createWebChannelTransport;
              
              // Override the WebChannel factory
              window.goog.net.createWebChannelTransport = function() {
                const transport = originalCreateWebChannelTransport();
                
                // Store the original createXhrIo method
                const originalCreateXhrIo = transport.createXhrIo;
                
                // Override the createXhrIo method
                transport.createXhrIo = function(url) {
                  // Add a cache-busting parameter to the URL
                  if (url && typeof url === 'string') {
                    const separator = url.includes('?') ? '&' : '?';
                    url = `${url}${separator}_wcb=${Date.now()}`;
                    console.log('🔧 Modified WebChannel transport URL:', url);
                  }
                  
                  // Call the original method with the modified URL
                  return originalCreateXhrIo.call(this, url);
                };
                
                console.log('✅ Applied WebChannel transport patch');
                return transport;
              };
            }
          } catch (error) {
            console.error('❌ Error applying WebChannel patch:', error);
          }
        }, 1000); // Wait for WebChannel to be available
      }
      
      // Apply the WebChannel fix immediately
      applyWebChannelFix();
      
      // Fix WebChannel connection issues
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
              ssl: false,
              experimentalForceLongPolling: true,
              ignoreUndefinedProperties: true
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
              ssl: true,
              cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
            });
          }
          
          console.log('✅ Applied WebChannel connection fixes');
          
          // Replace the existing Firestore instance
          window._fixed_firestore = newDb;
          
          // Test the connection
          newDb.collection('firebase_test').limit(1).get()
            .then(() => {
              console.log('✅ Firestore connection test successful with fixed settings');
              
              // Check if user has dev access
              const hasDevAccess = checkDevAccess();
              console.log('User has dev access:', hasDevAccess);
              
              // Store dev access status in session storage
              sessionStorage.setItem('has_dev_access', hasDevAccess ? 'true' : 'false');
            })
            .catch(error => {
              console.error('❌ Firestore connection test failed:', error);
              
              // If we get a 400 Bad Request error, try a more aggressive fix
              if (error.code === 'unavailable' || 
                  (error.message && (
                    error.message.includes('400') || 
                    error.message.includes('Bad Request')))) {
                console.log('🔧 Detected 400 Bad Request error, trying alternative approach');
                
                // Create a new Firestore instance with alternative settings
                const fixedDb = firebase.firestore(app);
                
                // Apply alternative settings - use memory cache instead of persistence
                fixedDb.settings({
                  host: 'firestore.googleapis.com',
                  ssl: true,
                  experimentalForceLongPolling: true,
                  ignoreUndefinedProperties: true,
                  cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
                });
                
                // Replace the existing Firestore instance
                window._fixed_firestore = fixedDb;
                
                // Test the connection again
                fixedDb.collection('firebase_test').limit(1).get()
                  .then(() => {
                    console.log('✅ Firestore connection test successful with alternative fix');
                  })
                  .catch(secondError => {
                    console.error('❌ Alternative fix also failed:', secondError);
                    
                    // Last resort: try with minimal settings
                    console.log('🔧 Trying minimal settings as last resort');
                    const lastResortDb = firebase.firestore(app);
                    lastResortDb.settings({
                      host: 'firestore.googleapis.com',
                      ssl: true
                    });
                    
                    window._fixed_firestore = lastResortDb;
                    
                    lastResortDb.collection('firebase_test').limit(1).get()
                      .then(() => {
                        console.log('✅ Minimal settings fix successful');
                      })
                      .catch(finalError => {
                        console.error('❌ All fixes failed:', finalError);
                      });
                  });
              }
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
  
  // Expose dev access check to window
  window.hasDevAccess = function() {
    return sessionStorage.getItem('has_dev_access') === 'true' || 
           AUTHORIZED_DEV_EMAILS.includes(
             (window.firebase && window.firebase.auth && window.firebase.auth().currentUser?.email) || ''
           );
  };
  
  console.log('🔧 Firebase fix utility added to window. Run window.fixFirebaseConnection() to apply fixes manually.');
})(); 