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
  usingEmulator: isDev && import.meta.env.VITE_USE_FIREBASE_EMULATOR === 'true'
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

// Expose Firebase app to window in production for debugging
if (!isLocalDevelopment) {
  console.log('[Firebase] Exposing Firebase app to window for debugging');
  (window as any)._firebase_app = app;
}

// Initialize Firestore with optimized settings
let db;
try {
  // For local development with emulators, use memory cache
  if (isLocalDevelopment && isDev && import.meta.env.VITE_USE_FIREBASE_EMULATOR === 'true') {
    console.log('[Firebase] Using memory cache for local development with emulators');
    db = initializeFirestore(app, {
      localCache: memoryLocalCache()
    });
  } 
  // For preview deployments, use memory cache to avoid persistence issues
  else if (isPreviewDeployment) {
    console.log('[Firebase] Using memory cache for preview deployment');
    db = initializeFirestore(app, {
      localCache: memoryLocalCache(),
      // Add CORS settings for preview deployments
      experimentalForceLongPolling: true, // Use long polling instead of WebSockets
      experimentalAutoDetectLongPolling: true,
      // Add additional connection settings to handle 400 Bad Request errors
      ssl: true,
      ignoreUndefinedProperties: true,
      cacheSizeBytes: CACHE_SIZE_UNLIMITED
    });
  } 
  // For production, use persistent cache
  else {
    console.log('[Firebase] Using persistent cache for production');
    
    // Use settings that fix the WebChannel connection issue
    db = initializeFirestore(app, {
      localCache: persistentLocalCache({
        tabManager: persistentMultipleTabManager(),
        cacheSizeBytes: CACHE_SIZE_UNLIMITED
      }),
      // These settings fix the WebChannel connection issue
      experimentalForceLongPolling: true,
      experimentalAutoDetectLongPolling: false, // Force long polling only
      ssl: true,
      ignoreUndefinedProperties: true
    });
    
    // Apply additional settings to fix WebChannel connection issues
    try {
      // @ts-ignore - This is a workaround for Firebase WebChannel connection issues
      db._settings = {
        // @ts-ignore
        ...db._settings,
        host: 'firestore.googleapis.com',
        ssl: true,
        // Add these settings to fix the Write stream issue
        timestampsInSnapshots: true,
        ignoreUndefinedProperties: true,
        experimentalAutoDetectLongPolling: false,
        experimentalForceLongPolling: true
      };
      console.log('[Firebase] Applied additional connection settings for production');
    } catch (error) {
      console.error('[Firebase] Failed to apply additional settings:', error);
    }
    
    // Create a wrapper around the db to handle write errors
    const originalDb = db;
    try {
      // Create a proxy to intercept and handle write operations
      const dbProxy = new Proxy(db, {
        get(target, prop) {
          const value = target[prop];
          
          // If it's a method that might involve writing, wrap it
          if (typeof value === 'function' && 
              (prop === 'collection' || 
               prop === 'doc' || 
               prop === 'batch' || 
               prop === 'runTransaction')) {
            
            return function(...args) {
              const result = value.apply(target, args);
              
              // If the result has methods like add, set, update, or delete, wrap those too
              if (result && typeof result === 'object') {
                return new Proxy(result, {
                  get(targetObj, methodProp) {
                    const method = targetObj[methodProp];
                    
                    if (typeof method === 'function' && 
                        (methodProp === 'add' || 
                         methodProp === 'set' || 
                         methodProp === 'update' || 
                         methodProp === 'delete')) {
                      
                      return async function(...methodArgs) {
                        try {
                          return await method.apply(targetObj, methodArgs);
                        } catch (writeError) {
                          console.error('[Firebase] Write operation failed:', writeError);
                          
                          // If it's a WebChannel error, retry with different settings
                          if (writeError.message?.includes('jd') || 
                              writeError.message?.includes('Bad Request') || 
                              writeError.message?.includes('400')) {
                            
                            console.log('[Firebase] Detected WebChannel Write error, retrying...');
                            
                            // Wait a bit before retrying
                            await new Promise(resolve => setTimeout(resolve, 1000));
                            
                            // Retry the operation
                            return method.apply(targetObj, methodArgs);
                          }
                          
                          // Re-throw if it's not a WebChannel error
                          throw writeError;
                        }
                      };
                    }
                    
                    return method;
                  }
                });
              }
              
              return result;
            };
          }
          
          return value;
        }
      });
      
      // Replace the db with our proxy
      db = dbProxy;
      console.log('[Firebase] Applied Write stream error handling');
    } catch (proxyError) {
      console.error('[Firebase] Failed to create db proxy for write error handling:', proxyError);
      // Restore the original db if proxy creation fails
      db = originalDb;
    }
  }
} catch (error) {
  console.error('[Firebase] Error initializing Firestore with persistent cache:', error);
  // Fallback to basic initialization
  console.log('[Firebase] Falling back to basic Firestore initialization');
  db = getFirestore(app);
  
  // Apply settings to the fallback instance as well
  const settings = {
    experimentalForceLongPolling: true,
    experimentalAutoDetectLongPolling: true,
    ssl: true,
    ignoreUndefinedProperties: true
  };
  try {
    console.log('[Firebase] Applying settings to fallback Firestore instance');
    initializeFirestore(app, settings);
    
    // Apply additional settings to fix WebChannel connection issues
    try {
      // @ts-ignore - This is a workaround for Firebase WebChannel connection issues
      db._settings = {
        ...db._settings,
        host: `firestore.googleapis.com`,
        ssl: true
      };
      console.log('[Firebase] Applied additional connection settings to fallback instance');
    } catch (settingsError) {
      console.error('[Firebase] Failed to apply settings to fallback instance:', settingsError);
    }
  } catch (settingsError) {
    console.error('[Firebase] Failed to apply settings to fallback instance:', settingsError);
  }
}

// Expose Firestore db to window in production for debugging
if (!isLocalDevelopment) {
  console.log('[Firebase] Exposing Firestore db to window for debugging');
  (window as any).db = db;
}

// Initialize Auth
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Use emulator in development if available
if (isLocalDevelopment && isDev && import.meta.env.VITE_USE_FIREBASE_EMULATOR === 'true') {
  try {
    const firestoreHost = import.meta.env.VITE_FIRESTORE_EMULATOR_HOST || 'localhost:8080';
    const [host, portStr] = firestoreHost.split(':');
    const port = parseInt(portStr, 10);
    
    console.log(`[Firebase] Connecting to Firestore emulator at ${host}:${port}`);
    connectFirestoreEmulator(db, host, port);
    connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
    
    console.log('[Firebase] Connected to local emulators:', {
      firestore: firestoreHost,
      auth: 'localhost:9099'
    });
    
    // Set a flag to indicate we're using emulators
    isFallbackMode = false;
  } catch (error) {
    console.error('[Firebase] Failed to connect to emulators:', error);
  }
}

// Initialize Firebase with environment-specific settings
if (isLocalDevelopment && isDev) {
  console.log('[Firebase] Initializing for local development');
  if (import.meta.env.VITE_USE_FIREBASE_EMULATOR === 'true') {
    console.log('[Firebase] Using Firebase emulators');
  } else {
    console.log('[Firebase] Using production Firebase (not emulators)');
  }
} else if (isPreviewDeployment) {
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
    console.log('[Firebase] Testing connection to Firestore...');
    const songsRef = collection(db, COLLECTIONS.SONGS);
    const q = query(songsRef, limit(1));
    const snapshot = await getDocs(q);
    console.log(`[Firebase] Connection test successful, found ${snapshot.size} documents`);
    isFallbackMode = false;
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
    } else if (error.message?.includes('400') || error.message?.includes('Bad Request')) {
      console.error('[Firebase] Bad Request error detected. This is likely due to WebChannel connection issues.');
      
      // Try to fix the WebChannel connection issue
      try {
        console.log('[Firebase] Attempting to fix WebChannel connection issue...');
        
        // @ts-ignore - This is a workaround for Firebase WebChannel connection issues
        db._settings = {
          ...db._settings,
          host: `firestore.googleapis.com`,
          ssl: true
        };
        
        // Try to reinitialize with different settings
        const newDb = initializeFirestore(app, {
          experimentalForceLongPolling: true,
          ssl: true,
          ignoreUndefinedProperties: true
        });
        
        // Test the new connection
        const newSongsRef = collection(newDb, COLLECTIONS.SONGS);
        const newQ = query(newSongsRef, limit(1));
        const newSnapshot = await getDocs(newQ);
        
        console.log('[Firebase] Connection fixed! Using new Firestore instance.');
        db = newDb;
        isFallbackMode = false;
        return true;
      } catch (fixError) {
        console.error('[Firebase] Failed to fix WebChannel connection issue:', fixError);
        isFallbackMode = true;
      }
    } else {
      console.error('[Firebase] Error details:', {
        code: error.code,
        message: error.message,
        name: error.name,
        stack: error.stack
      });
      
      // For network errors in any environment, try to switch to fallback mode
      if (error.name === 'FirebaseError' || error.message?.includes('network') || error.message?.includes('jd')) {
        console.warn('[Firebase] Network error detected. Attempting to reinitialize with enhanced long polling.');
        
        try {
          // Try to reinitialize Firestore with enhanced connection settings
          const newDb = initializeFirestore(app, {
            experimentalForceLongPolling: true,
            experimentalAutoDetectLongPolling: true,
            ssl: true,
            ignoreUndefinedProperties: true,
            cacheSizeBytes: CACHE_SIZE_UNLIMITED
          });
          
          // If successful, replace the existing db instance
          db = newDb;
          console.log('[Firebase] Reinitialized Firestore with enhanced connection settings');
          
          // Apply additional settings to fix WebChannel connection issues
          // @ts-ignore - This is a workaround for Firebase WebChannel connection issues
          db._settings = {
            ...db._settings,
            host: `firestore.googleapis.com`,
            ssl: true
          };
          
          // Test the new connection
          const newSongsRef = collection(db, COLLECTIONS.SONGS);
          const newQ = query(newSongsRef, limit(1));
          await getDocs(newQ);
          
          console.log('[Firebase] Connection fixed with enhanced settings!');
          isFallbackMode = false;
          return true;
        } catch (reinitError) {
          console.error('[Firebase] Failed to reinitialize with enhanced settings:', reinitError);
          isFallbackMode = true;
        }
      }
    }
    
    return false;
  }
};

// Run the test but don't block initialization
testConnection();

console.log('[Firebase] Initialization successful');

// Export the initialized instances and helper functions
export { db, auth, googleProvider, isFallbackMode, isPreviewDeployment }; 