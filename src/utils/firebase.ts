import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  connectFirestoreEmulator, 
  collection, 
  getDocs, 
  query, 
  limit, 
  enableIndexedDbPersistence,
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
  CACHE_SIZE_UNLIMITED,
  memoryLocalCache
} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, connectAuthEmulator } from 'firebase/auth';
import { env, isDev } from './env';

// Declare global interface for the fixFirebaseConnection function
declare global {
  interface Window {
    fixFirebaseConnection?: () => void;
    _firebaseInitialized?: boolean;
    _firestoreInstance?: any;
  }
}

// Collection references
export const COLLECTIONS = {
  SONGS: 'songs',
  TAGS: 'tags',
  CONFIG: 'config',
  USER_SONGS: 'user_songs'
} as const;

// For backward compatibility
export const isFallbackMode = false;

// Detect if we're in a preview deployment
export const isPreviewDeployment = window.location.hostname.includes('-projects.vercel.app') || 
                                  window.location.hostname.includes('-staging.vercel.app') ||
                                  window.location.hostname.includes('-preview.vercel.app');

// Detect if we're in a local development environment
export const isLocalDevelopment = window.location.hostname === 'localhost' || 
                                 window.location.hostname === '127.0.0.1';

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Create a Google Auth provider
const googleProvider = new GoogleAuthProvider();

// Validate Firebase configuration
const validateFirebaseConfig = () => {
  const requiredEnvVars = [
    'VITE_FIREBASE_API_KEY',
    'VITE_FIREBASE_AUTH_DOMAIN',
    'VITE_FIREBASE_PROJECT_ID',
  ];

  for (const envVar of requiredEnvVars) {
    if (!import.meta.env[envVar]) {
      console.error(`Missing required environment variable: ${envVar}`);
      return false;
    }
  }
  return true;
};

// Initialize Firebase
const isConfigValid = validateFirebaseConfig();
const app = isConfigValid ? initializeApp(firebaseConfig) : null;

// Initialize Firestore with optimized settings
const db = app ? initializeFirestore(app, {
  // Use memory cache for emulator mode, persistent cache for production
  localCache: import.meta.env.DEV 
    ? memoryLocalCache() // Use memory cache for emulator to avoid conflicts
    : persistentLocalCache({
        tabManager: persistentMultipleTabManager()
      })
}) : null;

// Initialize Auth
const auth = app ? getAuth(app) : null;

// Connect to Firebase emulators in development mode
if (import.meta.env.DEV && app && db && auth) {
  try {
    // Connect to Auth emulator
    connectAuthEmulator(auth, 'http://127.0.0.1:9099');
    console.log('Connected to Auth emulator');

    // Connect to Firestore emulator with retry logic
    const connectToEmulator = (attempt = 1, maxAttempts = 3) => {
      try {
        connectFirestoreEmulator(db, '127.0.0.1', 8080);
        console.log('Connected to Firestore emulator');
      } catch (error) {
        console.error(`Error connecting to Firestore emulator (attempt ${attempt}/${maxAttempts}):`, error);
        
        if (attempt < maxAttempts) {
          console.log(`Retrying emulator connection in ${attempt * 1000}ms...`);
          setTimeout(() => connectToEmulator(attempt + 1, maxAttempts), attempt * 1000);
        } else {
          console.error('Failed to connect to Firestore emulator after multiple attempts');
        }
      }
    };
    
    connectToEmulator();
  } catch (error) {
    console.error('Error connecting to emulators:', error);
  }
}

// Mark Firebase as initialized for the fix script
if (app && db) {
  // Set global flags for the fix script to find
  window._firebaseInitialized = true;
  window._firestoreInstance = db;
  
  // Expose Firebase app to window in development for debugging
  if (import.meta.env.DEV) {
    console.log('[Firebase] Exposing Firebase app to window for debugging');
    (window as any)._firebase_app = app;
  }
  
  // Listen for WebChannel transport errors
  window.addEventListener('error', (event) => {
    if (event && event.error && 
        (event.error.message && event.error.message.includes('WebChannel transport errored') ||
         event.message && event.message.includes('WebChannel transport errored'))) {
      
      console.log('Caught WebChannel transport error, attempting recovery');
      
      // Try to reset the connection if we have access to the fixFirebaseConnection function
      if (typeof window.fixFirebaseConnection === 'function') {
        window.fixFirebaseConnection();
      }
    }
  });
}

// Check if the current user has development access
export const hasDevAccess = () => {
  return sessionStorage.getItem('has_dev_access') === 'true' || 
         auth?.currentUser?.email === 'austen.crowder@gmail.com';
};

// Test the Firestore connection
const testFirestoreConnection = async () => {
  try {
    console.log('[Firebase] Testing Firestore connection...');
    
    // Try to access a test collection
    const testQuery = query(collection(db, 'firebase_test'), limit(1));
    await getDocs(testQuery);
    
    console.log('[Firebase] Firestore connection test passed');
    return true;
  } catch (error) {
    console.error('[Firebase] Firestore connection test failed:', error);
    return false;
  }
};

// Run the connection test
testFirestoreConnection().then(success => {
  if (success) {
    console.log('[Firebase] Firestore is ready to use');
  } else {
    console.warn('[Firebase] Firestore connection failed, check network and Firebase settings');
  }
});

// Export Firebase instances
export { app, db, auth, googleProvider }; 