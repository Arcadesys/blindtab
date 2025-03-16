import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { env, isDev } from './env';

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

// Get collection prefix based on environment
const collectionPrefix = import.meta.env.VITE_FIREBASE_COLLECTION_PREFIX || '';

// Log config for debugging (excluding sensitive data)
console.log('[Firebase] Configuration:', {
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId,
  storageBucket: firebaseConfig.storageBucket,
  environment: import.meta.env.VITE_APP_ENV,
  collectionPrefix
});

let db;

try {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);

  // Use emulator in development if available
  if (isDev && import.meta.env.VITE_USE_FIREBASE_EMULATOR) {
    connectFirestoreEmulator(db, 'localhost', 8080);
    console.log('[Firebase] Connected to local emulator');
  }

  console.log('[Firebase] Initialization successful');
} catch (error) {
  console.error('[Firebase] Initialization failed:', error);
  throw error;
}

// Export the initialized Firestore instance
export { db };

// Collection references with environment-specific prefixes
export const COLLECTIONS = {
  SONGS: `${collectionPrefix}songs`,
  TAGS: `${collectionPrefix}tags`,
  CONFIG: `${collectionPrefix}config`
} as const; 