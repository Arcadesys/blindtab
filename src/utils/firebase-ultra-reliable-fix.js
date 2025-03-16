// Firebase Ultra-Reliable Fix - Copy and paste this into your browser console
(function() {
  console.log('🔧 Loading Firebase...');
  
  // Load Firebase App
  var appScript = document.createElement('script');
  appScript.src = 'https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js';
  document.head.appendChild(appScript);
  
  // Load Firestore after App is loaded
  appScript.onload = function() {
    console.log('✅ Firebase App loaded');
    
    var firestoreScript = document.createElement('script');
    firestoreScript.src = 'https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js';
    document.head.appendChild(firestoreScript);
    
    // Initialize Firebase after Firestore is loaded
    firestoreScript.onload = function() {
      console.log('✅ Firebase Firestore loaded');
      
      // Initialize Firebase
      firebase.initializeApp({
        projectId: 'blindtab-db',
        apiKey: 'AIzaSyDummyKeyForSecurity',
        authDomain: 'blindtab-db.firebaseapp.com'
      });
      
      // Get Firestore
      var db = firebase.firestore();
      
      // Apply settings
      db.settings({
        experimentalForceLongPolling: true,
        ssl: true,
        host: 'firestore.googleapis.com',
        merge: true,
        ignoreUndefinedProperties: true,
        cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
      });
      
      // Expose to window
      window.db = db;
      window._fixed_db = db;
      
      console.log('✅ Fix applied! Refresh the page to use the fixed Firebase.');
    };
  };
})(); 