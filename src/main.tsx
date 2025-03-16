import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { runFirebaseDebug } from './utils/firebase-debug'

// Directly attach the debug function to the window object
// This ensures it's available immediately, even before React mounts
if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
  console.log('🔧 Adding Firebase debug utility to window object');
  (window as any).runFirebaseDebug = runFirebaseDebug;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
