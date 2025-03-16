import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  connectFirestoreEmulator,
  collection,
  getDocs,
  deleteDoc,
  enableIndexedDbPersistence,
  CACHE_SIZE_UNLIMITED
} from 'firebase/firestore';

const firebaseConfig = {
  projectId: 'blindtab-db',
  appId: '1:123456789012:web:abcdef1234567890',
};

async function clearEmulatorData() {
  try {
    // Initialize Firebase with emulator settings
    process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080';
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    // Connect to emulator
    connectFirestoreEmulator(db, 'localhost', 8080);

    // Enable offline persistence with unlimited cache
    try {
      await enableIndexedDbPersistence(db, {
        cacheSizeBytes: CACHE_SIZE_UNLIMITED
      });
    } catch (err) {
      if (err.code === 'failed-precondition') {
        console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
      } else if (err.code === 'unimplemented') {
        console.warn('The current browser does not support persistence.');
      }
    }

    const collections = ['songs', 'user_songs'];

    for (const collectionName of collections) {
      const querySnapshot = await getDocs(collection(db, collectionName));
      console.log(`Deleting ${querySnapshot.size} documents from ${collectionName}...`);
      
      for (const doc of querySnapshot.docs) {
        try {
          await deleteDoc(doc.ref);
          console.log(`Deleted document ${doc.id} from ${collectionName}`);
        } catch (err) {
          console.error(`Failed to delete document ${doc.id} from ${collectionName}:`, err);
        }
      }
    }

    console.log('All collections cleared!');
    process.exit(0);
  } catch (error) {
    console.error('Error clearing emulator data:', error);
    process.exit(1);
  }
}

clearEmulatorData().catch(error => {
  console.error('Unhandled error:', error);
  process.exit(1);
}); 