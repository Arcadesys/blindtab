import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { env, isDev } from './env';

// Collection references
export const COLLECTIONS = {
  SONGS: 'songs',
  TAGS: 'tags',
  CONFIG: 'config'
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
  environment: env
});

let db;

try {
  console.log(`[Firebase] Initializing Firebase in ${env} environment`);
  
  // Validate config values
  Object.entries(firebaseConfig).forEach(([key, value]) => {
    if (!value || value === 'undefined') {
      throw new Error(`Invalid Firebase config: ${key} is ${value}`);
    }
  });

  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);

  // Use emulator in development if available
  if (isDev && import.meta.env.VITE_USE_FIREBASE_EMULATOR) {
    connectFirestoreEmulator(db, 'localhost', 8080);
    console.log('[Firebase] Connected to local emulator');
  }

  // Initialize Firebase with environment-specific settings
  if (env === 'staging') {
    console.log('[Firebase] Initializing for staging environment');
    // Add any staging-specific initialization here
  } else if (env === 'production') {
    console.log('[Firebase] Initializing for production environment');
    // Add any production-specific initialization here
  }

  // Test the connection
  db.collection(COLLECTIONS.SONGS).limit(1).get()
    .then(() => console.log('[Firebase] Connection test successful'))
    .catch(error => console.error('[Firebase] Connection test failed:', error));

  console.log('[Firebase] Initialization successful');
} catch (error) {
  console.error('[Firebase] Initialization failed:', error);
  console.error('[Firebase] Current environment:', env);
  console.error('[Firebase] Auth domain:', firebaseConfig.authDomain);
  console.error('[Firebase] Project ID:', firebaseConfig.projectId);
  throw error;
}

// Export the initialized Firestore instance
export { db }; 