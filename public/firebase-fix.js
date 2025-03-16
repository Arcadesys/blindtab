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
      
      // Get Firebase API key from the page
      let apiKey = '';
      try {
        // Try to extract API key from meta tag
        const metaTag = document.querySelector('meta[name="firebase-api-key"]');
        if (metaTag) {
          apiKey = metaTag.getAttribute('content');
        }
        
        // If not found, try to extract from Firebase config
        if (!apiKey && window._firebase_config) {
          apiKey = window._firebase_config.apiKey;
        }
        
        // Last resort - look for it in the page source
        if (!apiKey) {
          const scripts = document.querySelectorAll('script');
          for (const script of scripts) {
            const content = script.textContent || '';
            const match = content.match(/apiKey["']?\s*:\s*["']([^"']+)["']/);
            if (match && match[1]) {
              apiKey = match[1];
              break;
            }
          }
        }
        
        console.log('Firebase API key found:', apiKey ? '✅' : '❌');
      } catch (e) {
        console.error('Error extracting API key:', e);
      }
      
      // 1. Fix CORS issues by adding proper headers and using a proxy if needed
      const originalFetch = window.fetch;
      window.fetch = function(url, options = {}) {
        // Only intercept Firebase API calls
        if (typeof url === 'string' && (
            url.includes('firestore.googleapis.com') || 
            url.includes('google.firestore.v1.Firestore'))) {
          
          // Mark that we're intercepting this request
          console.log('🔧 Applied CORS fix to Firebase fetch request');
          
          // Check if we should use a CORS proxy
          const hasCorsIssue = sessionStorage.getItem('firestore_cors_issue') === 'true';
          const has400Error = sessionStorage.getItem('firestore_400_error') === 'true';
          
          // Add authentication headers if we have an API key
          if (apiKey && !options.headers?.Authorization) {
            options.headers = options.headers || {};
            options.headers = {
              ...options.headers,
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'X-Firebase-Auth': apiKey
            };
            
            // Add auth parameter to URL if not already present
            if (typeof url === 'string' && !url.includes('key=') && apiKey) {
              const separator = url.includes('?') ? '&' : '?';
              url = `${url}${separator}key=${apiKey}`;
            }
          }
          
          // If we're having CORS issues and not on localhost, use a proxy
          if (!isLocalhost && (hasCorsIssue || has400Error)) {
            // Try a different CORS proxy service
            const proxyUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(url);
            console.log('🔄 Using CORS proxy for Firebase request:', proxyUrl);
            
            // When using a proxy, we need to ensure we're not sending credentials
            options.mode = 'cors';
            options.credentials = 'omit';
            
            // Return the proxied request
            return originalFetch.call(this, proxyUrl, options)
              .then(response => {
                if (!response.ok) {
                  // If proxy also fails, try another proxy
                  if (response.status === 400 || response.status === 403) {
                    sessionStorage.setItem('firestore_400_error', 'true');
                    
                    // Try a different proxy as fallback
                    const backupProxyUrl = 'https://corsproxy.io/?' + encodeURIComponent(url);
                    console.log('🔄 First proxy failed, trying backup:', backupProxyUrl);
                    return originalFetch.call(this, backupProxyUrl, options);
                  }
                }
                return response;
              })
              .catch(error => {
                console.error('Proxy request failed:', error);
                // Mark that we had an error for future requests
                sessionStorage.setItem('firestore_cors_issue', 'true');
                sessionStorage.setItem('firestore_400_error', 'true');
                throw error;
              });
          }
          
          // Force CORS mode
          options.mode = 'cors';
          
          // Return the original request with our modifications
          return originalFetch.call(this, url, options)
            .then(response => {
              // Check for CORS or 400 errors
              if (!response.ok) {
                if (response.status === 0 || response.type === 'opaque') {
                  console.log('CORS issue detected, will use proxy for future requests');
                  sessionStorage.setItem('firestore_cors_issue', 'true');
                }
                
                if (response.status === 400 || response.status === 403) {
                  console.log('400/403 error detected, will use proxy for future requests');
                  sessionStorage.setItem('firestore_400_error', 'true');
                }
              }
              return response;
            })
            .catch(error => {
              console.error('Firebase request failed:', error);
              // Mark that we had an error for future requests
              sessionStorage.setItem('firestore_cors_issue', 'true');
              throw error;
            });
        }
        
        // For non-Firebase requests, just pass through
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
            })
            .catch(error => {
              console.error('❌ Firestore connection test failed:', error);
              
              // If we get a CORS error, mark it for future requests
              console.log('Marking CORS issue for future requests');
              sessionStorage.setItem('firestore_cors_issue', 'true');
              
              if (error.code === 'permission-denied' || error.code === 'invalid-argument') {
                sessionStorage.setItem('firestore_400_error', 'true');
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
  
  console.log('🔧 Firebase fix utility added to window. Run window.fixFirebaseConnection() to apply fixes manually.');
})(); 