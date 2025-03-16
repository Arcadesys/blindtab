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

// For backward compatibility
export const isFallbackMode = false;

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

// Detect if we're in a local development environment
const isLocalDevelopment = window.location.hostname === 'localhost' || 
                          window.location.hostname === '127.0.0.1';

// Special access for development features in production
const AUTHORIZED_DEV_EMAILS = ['austen.crowder@gmail.com'];

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
  isLocalDevelopment,
  isDev,
  usingEmulator: isDev && import.meta.env.VITE_USE_FIREBASE_EMULATOR === 'true',
  authorizedDevEmails: AUTHORIZED_DEV_EMAILS
});

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Expose Firebase app to window in production for debugging
if (!isLocalDevelopment) {
  console.log('[Firebase] Exposing Firebase app to window for debugging');
  (window as any)._firebase_app = app;
}

// Initialize Firestore with optimized settings
const db = initializeFirestore(app, {
  // Use persistent cache for better offline support
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
    cacheSizeBytes: CACHE_SIZE_UNLIMITED
  }),
  // Improve connection reliability
  experimentalForceLongPolling: true,
  ignoreUndefinedProperties: true
});

// For development, connect to emulator if needed
if (isLocalDevelopment && isDev && import.meta.env.VITE_USE_FIREBASE_EMULATOR === 'true') {
  console.log('[Firebase] Connecting to Firestore emulator');
  connectFirestoreEmulator(db, 'localhost', 8080);
}

// Initialize Auth
const auth = getAuth(app);

// Connect to Auth emulator if needed
if (isLocalDevelopment && isDev && import.meta.env.VITE_USE_FIREBASE_EMULATOR === 'true') {
  console.log('[Firebase] Connecting to Auth emulator');
  connectAuthEmulator(auth, 'http://localhost:9099');
}

// Create a Google Auth provider
const googleProvider = new GoogleAuthProvider();

// Function to check if current user has dev access
export const hasDevAccess = async (): Promise<boolean> => {
  // Always allow in local development
  if (isLocalDevelopment || isDev) {
    return true;
  }
  
  // Check if user is logged in and has authorized email
  const currentUser = auth.currentUser;
  if (currentUser && currentUser.email) {
    return AUTHORIZED_DEV_EMAILS.includes(currentUser.email);
  }
  
  return false;
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

// Run the connection test and don't enable persistence (it's already enabled via localCache)
testFirestoreConnection().then(success => {
  if (success) {
    console.log('[Firebase] Firestore is ready to use');
  } else {
    console.warn('[Firebase] Firestore connection failed, check network and Firebase settings');
  }
});

// Export everything
export { 
  app, 
  db, 
  auth, 
  googleProvider,
  isPreviewDeployment,
  isLocalDevelopment
};

// Default export
export default db; 