import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator, collection, getDocs, query, limit, enableIndexedDbPersistence } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, connectAuthEmulator } from 'firebase/auth';
import { env, isDev } from './env';

// Collection references
export const COLLECTIONS = {
  SONGS: 'songs',
  TAGS: 'tags',
  CONFIG: 'config',
  USER_SONGS: 'user_songs'
} as const;

// Validate Firebase configuration
const requiredEnvVars = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_STORAGE_BUCKET',
  'VITE_FIREBASE_MESSAGING_SENDER_ID',
  'VITE_FIREBASE_APP_ID'
] as const;

// Check for missing environment variables
const missingVars = requiredEnvVars.filter(
  varName => !import.meta.env[varName]
);

if (missingVars.length > 0) {
  throw new Error(
    `Missing required Firebase configuration: ${missingVars.join(', ')}`
  );
}

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Log config for debugging (excluding sensitive data)
console.log('[Firebase] Configuration:', {
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId,
  storageBucket: firebaseConfig.storageBucket,
  environment: env,
  currentDomain: window.location.hostname,
  currentOrigin: window.location.origin,
  currentPath: window.location.pathname,
  isStaging: window.location.hostname.includes('-staging.vercel.app'),
  isDev: isDev
});

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Use emulator in development if available
if (isDev && import.meta.env.VITE_USE_FIREBASE_EMULATOR) {
  try {
    connectFirestoreEmulator(db, 'localhost', 8080);
    connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
    console.log('[Firebase] Connected to local emulators:', {
      firestore: 'localhost:8080',
      auth: 'localhost:9099'
    });
  } catch (error) {
    console.error('[Firebase] Failed to connect to emulators:', error);
  }
}

// Enable offline persistence for better performance
if (!isDev) {
  enableIndexedDbPersistence(db)
    .catch((err) => {
      if (err.code === 'failed-precondition') {
        console.warn('[Firebase] Multiple tabs open, persistence can only be enabled in one tab at a time.');
      } else if (err.code === 'unimplemented') {
        console.warn('[Firebase] The current browser doesn\'t support persistence.');
      }
    });
}

// Initialize Firebase with environment-specific settings
if (env === 'staging') {
  console.log('[Firebase] Initializing for staging environment');
  // Add any staging-specific initialization here
} else if (env === 'production') {
  console.log('[Firebase] Initializing for production environment');
  // Add any production-specific initialization here
}

// Test the connection using the new modular API
const songsRef = collection(db, COLLECTIONS.SONGS);
const q = query(songsRef, limit(1));
getDocs(q)
  .then(() => console.log('[Firebase] Connection test successful'))
  .catch(error => {
    console.error('[Firebase] Connection test failed:', error);
    if (error.code === 'permission-denied') {
      console.error('[Firebase] This might be due to unauthorized domain access. Please check Firebase Console -> Authentication -> Sign-in method -> Authorized domains');
    } else if (error.code === 'failed-precondition') {
      console.error('[Firebase] This might be due to incorrect project configuration or missing indexes');
    }
  });

console.log('[Firebase] Initialization successful');

// Export the initialized instances
export { db, auth, googleProvider }; 