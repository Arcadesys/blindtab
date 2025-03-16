/**
 * Firebase Debug Console Script
 * 
 * This is a standalone script that can be pasted directly into the browser console
 * to debug Firebase connection issues in production.
 * 
 * HOW TO USE:
 * 1. Copy this entire file
 * 2. Open your production site in Chrome
 * 3. Open Chrome DevTools (F12)
 * 4. Paste this script into the console and press Enter
 * 5. The debug function will run automatically
 */

(async function() {
  console.group('🔍 Firebase Debug Report');
  
  // Environment information
  console.log('Environment Information:');
  console.log('- Current URL:', window.location.href);
  console.log('- Hostname:', window.location.hostname);
  console.log('- Protocol:', window.location.protocol);
  console.log('- User Agent:', navigator.userAgent);
  
  // Get Firebase app
  const app = window.firebase?.app?.() || 
              window.firebase?.apps?.[0] || 
              window._firebase_app || 
              null;
  
  if (!app) {
    console.error('❌ Could not find Firebase app instance');
    console.log('Attempting to fix WebChannel connection issues directly...');
    
    // Try to fix WebChannel issues even without direct access to Firebase
    try {
      // Find Firestore instance in window
      const firestoreKeys = Object.keys(window).filter(key => 
        key.includes('firebase') || 
        key.includes('Firestore') || 
        key.includes('firestore') ||
        key.includes('db')
      );
      
      console.log('Potential Firestore keys:', firestoreKeys);
      
      // Try to modify settings on any potential Firestore instances
      firestoreKeys.forEach(key => {
        try {
          const instance = window[key];
          if (instance && typeof instance === 'object') {
            if (instance._settings) {
              console.log(`Found potential Firestore instance at window.${key}`);
              instance._settings.host = 'firestore.googleapis.com';
              instance._settings.ssl = true;
              console.log(`Modified settings for window.${key}`);
            }
          }
        } catch (e) {
          // Ignore errors
        }
      });
      
      // Try to find Firebase in other common locations
      if (window.firebase) {
        console.log('Found firebase in window.firebase');
        if (window.firebase.firestore) {
          const settings = {
            experimentalForceLongPolling: true,
            ssl: true,
            host: 'firestore.googleapis.com'
          };
          window.firebase.firestore().settings(settings);
          console.log('Applied settings to window.firebase.firestore()');
        }
      }
    } catch (e) {
      console.error('Failed to fix WebChannel issues:', e);
    }
    
    console.log('Manual Fix Instructions:');
    console.log(`
    // Add this to your firebase.ts file:
    
    // For production, use these settings:
    db = initializeFirestore(app, {
      experimentalForceLongPolling: true,
      ssl: true,
      ignoreUndefinedProperties: true
    });
    
    // Then apply this workaround:
    // @ts-ignore
    db._settings = {
      ...db._settings,
      host: 'firestore.googleapis.com',
      ssl: true
    };
    `);
    
    console.groupEnd();
    return;
  }
  
  console.log('Firebase App Info:', {
    name: app.name,
    options: {
      projectId: app.options.projectId,
      authDomain: app.options.authDomain
    }
  });
  
  // Try to get Firestore instance
  let db;
  try {
    // Try different ways to access Firestore
    db = window.db || 
         window.firestore || 
         window.firebase?.firestore?.() || 
         app.firestore?.();
    
    if (!db) {
      console.warn('Could not find Firestore instance directly');
      // Try to create a new one
      const firebase = window.firebase;
      if (firebase && firebase.firestore) {
        db = firebase.firestore();
        console.log('Created new Firestore instance');
      }
    }
  } catch (e) {
    console.error('Error accessing Firestore:', e);
  }
  
  if (db) {
    console.log('Found Firestore instance');
    
    // Try to fix WebChannel connection issues
    try {
      console.log('Attempting to fix WebChannel connection issues...');
      
      // Apply settings to fix WebChannel issues
      const settings = {
        experimentalForceLongPolling: true,
        ssl: true,
        host: 'firestore.googleapis.com'
      };
      
      // Try different ways to apply settings
      if (db.settings) {
        db.settings(settings);
        console.log('Applied settings via db.settings()');
      }
      
      // Try to access internal settings
      if (db._settings) {
        db._settings = {
          ...db._settings,
          host: 'firestore.googleapis.com',
          ssl: true
        };
        console.log('Applied settings via db._settings');
      }
      
      console.log('WebChannel connection issues should be fixed');
      console.log('Refresh the page and try again');
    } catch (e) {
      console.error('Failed to fix WebChannel issues:', e);
    }
  } else {
    console.error('Could not find or create Firestore instance');
  }
  
  // Network diagnostics
  console.log('Network Diagnostics:');
  console.log('- Online Status:', navigator.onLine ? 'Online' : 'Offline');
  
  // Check for CORS issues
  console.log('Testing CORS Configuration...');
  try {
    const projectId = app?.options?.projectId || 
                     window.FIREBASE_PROJECT_ID || 
                     prompt('Enter your Firebase Project ID:');
    
    if (projectId) {
      const response = await fetch(`https://${projectId}.firebaseio.com/.json?shallow=true`);
      console.log('- CORS Test Status:', response.status);
      console.log('- CORS Test OK:', response.ok);
    } else {
      console.warn('Could not determine Firebase Project ID for CORS test');
    }
  } catch (error) {
    console.error('- CORS Test Failed:', error);
  }
  
  console.groupEnd();
  
  return 'Firebase debug complete. Check console for detailed report.';
})(); 