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

// Collection references
export const COLLECTIONS = {
  SONGS: 'songs',
  TAGS: 'tags',
  CONFIG: 'config',
  USER_SONGS: 'user_songs'
} as const;

// Track if we're in fallback mode (read-only)
let isFallbackMode = false;

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

// Detect if we're in a preview deployment
const isPreviewDeployment = window.location.hostname.includes('-projects.vercel.app') || 
                           window.location.hostname.includes('-staging.vercel.app') ||
                           window.location.hostname.includes('-preview.vercel.app');

// Log config for debugging (excluding sensitive data)
console.log('[Firebase] Configuration:', {
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId,
  storageBucket: firebaseConfig.storageBucket,
  environment: env,
  currentDomain: window.location.hostname,
  currentOrigin: window.location.origin,
  currentPath: window.location.pathname,
  isPreviewDeployment,
  isDev
});

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore with optimized settings
let db;
try {
  // For preview deployments, use memory cache to avoid persistence issues
  if (isPreviewDeployment) {
    console.log('[Firebase] Using memory cache for preview deployment');
    db = initializeFirestore(app, {
      localCache: memoryLocalCache()
    });
  } else {
    // For production and development, use persistent cache
    db = initializeFirestore(app, {
      localCache: persistentLocalCache({
        tabManager: persistentMultipleTabManager(),
        cacheSizeBytes: CACHE_SIZE_UNLIMITED
      })
    });
  }
} catch (error) {
  console.error('[Firebase] Error initializing Firestore with persistent cache:', error);
  // Fallback to basic initialization
  console.log('[Firebase] Falling back to basic Firestore initialization');
  db = getFirestore(app);
}

// Initialize Auth
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

// Initialize Firebase with environment-specific settings
if (isPreviewDeployment) {
  console.log('[Firebase] Initializing for preview deployment');
  console.warn('[Firebase] Preview deployments may have limited functionality');
} else if (env === 'staging') {
  console.log('[Firebase] Initializing for staging environment');
} else if (env === 'production') {
  console.log('[Firebase] Initializing for production environment');
}

// Test the connection using the new modular API
const testConnection = async () => {
  try {
    const songsRef = collection(db, COLLECTIONS.SONGS);
    const q = query(songsRef, limit(1));
    await getDocs(q);
    console.log('[Firebase] Connection test successful');
    return true;
  } catch (error: any) {
    console.error('[Firebase] Connection test failed:', error);
    
    if (error.code === 'permission-denied') {
      console.error('[Firebase] This might be due to unauthorized domain access. Please check Firebase Console -> Authentication -> Sign-in method -> Authorized domains');
      console.error('[Firebase] Current domain:', window.location.hostname);
      
      // For preview deployments, we'll still try to use the app in read-only mode
      if (isPreviewDeployment) {
        console.warn('[Firebase] Preview deployment detected. Switching to read-only mode.');
        isFallbackMode = true;
      }
    } else if (error.code === 'failed-precondition') {
      console.error('[Firebase] This might be due to incorrect project configuration or missing indexes');
    }
    
    return false;
  }
};

// Run the test but don't block initialization
testConnection();

console.log('[Firebase] Initialization successful');

// Export the initialized instances and helper functions
export { db, auth, googleProvider, isFallbackMode, isPreviewDeployment }; 