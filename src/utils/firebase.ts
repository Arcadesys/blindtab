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

// Import our REST client
import { firestoreRest, FirestoreRestClient } from './firebase-rest-client';

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

// Detect if we're in a local development environment
const isLocalDevelopment = window.location.hostname === 'localhost' || 
                          window.location.hostname === '127.0.0.1';

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
  usingRestClient: true // Indicate we're using the REST client
});

// For preview deployments, we might need to override the authDomain
// This helps with Firebase Auth domain authorization issues
if (isPreviewDeployment && !isLocalDevelopment) {
  console.log('[Firebase] Preview deployment detected, using default authDomain');
  // Keep the original authDomain from Firebase console
  // Don't try to use the preview URL as authDomain
}

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize REST client with the correct API key
const restClient = new FirestoreRestClient(
  firebaseConfig.projectId,
  firebaseConfig.apiKey
);

// Expose Firebase app to window in production for debugging
if (!isLocalDevelopment) {
  console.log('[Firebase] Exposing Firebase app to window for debugging');
  (window as any)._firebase_app = app;
  (window as any)._firebase_rest = restClient;
}

// Initialize Firestore with basic settings (for compatibility with existing code)
// We'll primarily use the REST client for data operations
let db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  ssl: true,
  ignoreUndefinedProperties: true
});

// Apply additional settings to fix WebChannel connection issues
// @ts-ignore - This is a workaround for Firebase WebChannel connection issues
db._settings = {
  // @ts-ignore
  ...db._settings,
  host: 'firestore.googleapis.com',
  ssl: true
};

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

// Test the REST client connection
const testRestConnection = async () => {
  try {
    console.log('[Firebase] Testing REST client connection...');
    
    // First, test if the database exists and is accessible
    const databaseExists = await restClient.testConnection();
    if (!databaseExists) {
      console.error('[Firebase] Firestore database not found or not accessible');
      return false;
    }
    
    // If database exists, try to create a test document
    const testCollection = 'firebase_test';
    const testDocId = 'rest_test_' + Date.now();
    const testData = {
      message: 'Hello from REST API',
      timestamp: new Date(),
      testValue: 42
    };
    
    // Create test document
    await restClient.set(testCollection, testDocId, testData);
    console.log('[Firebase] REST client test document created successfully');
    
    // Get the document
    const doc = await restClient.get(testCollection, testDocId);
    console.log('[Firebase] REST client test document retrieved successfully:', doc);
    
    // Delete the document
    await restClient.delete(testCollection, testDocId);
    console.log('[Firebase] REST client test document deleted successfully');
    
    console.log('[Firebase] REST client connection test passed');
    return true;
  } catch (error) {
    console.error('[Firebase] REST client connection test failed:', error);
    return false;
  }
};

// Run the connection test
testRestConnection().then(success => {
  if (success) {
    console.log('[Firebase] REST client is ready to use');
  } else {
    console.warn('[Firebase] REST client failed, falling back to standard Firestore');
    isFallbackMode = true;
  }
});

// Export everything
export { 
  app, 
  db, 
  auth, 
  googleProvider, 
  restClient as firestoreRest,
  isFallbackMode,
  isPreviewDeployment,
  isLocalDevelopment
};

// Default export is now the REST client
export default restClient; 