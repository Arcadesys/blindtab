import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DevTools from './components/DevTools';
import { ThemeProvider } from './contexts/ThemeContext';
import { DisplayProvider } from './contexts/DisplayContext';
import { SongProvider } from './contexts/SongContext';
import { AuthProvider } from './contexts/AuthContext';
import AppContent from './components/AppContent';
import PreviewModeNotice from './components/PreviewModeNotice';
import { useEffect } from 'react';
import { addDebugToWindow, runFirebaseDebug } from './utils/firebase-debug';
import { addInitializerToWindow } from './utils/initializeFirestore';
import { isProd, isDev } from './utils/env';

function App() {
  // Add Firebase debug utility to window in production
  useEffect(() => {
    if (isProd) {
      // Directly attach the debug function to window
      (window as any).runFirebaseDebug = runFirebaseDebug;
      
      // Also use the helper function as a backup
      addDebugToWindow();
      
      console.log('🔧 Firebase debug utility added. Run window.runFirebaseDebug() in console to diagnose issues.');
    }
  }, []);

  useEffect(() => {
    // Run Firebase debug in development mode
    if (isDev) {
      console.log('Running Firebase debug in development mode...');
      runFirebaseDebug().then(result => {
        console.log(result);
      });
      
      // Add Firestore initializer to window
      addInitializerToWindow();
      console.log('🔧 Firestore initializer added. Run window.initializeFirestore() in console to add sample data.');
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <ThemeProvider>
            <DisplayProvider>
              <AuthProvider>
                <SongProvider>
                  <AppContent />
                  <PreviewModeNotice />
                </SongProvider>
              </AuthProvider>
            </DisplayProvider>
          </ThemeProvider>
        } />
        {import.meta.env.DEV && (
          <Route path="/dev" element={
            <ThemeProvider>
              <DisplayProvider>
                <AuthProvider>
                  <SongProvider>
                    <DevTools />
                    <PreviewModeNotice />
                  </SongProvider>
                </AuthProvider>
              </DisplayProvider>
            </ThemeProvider>
          } />
        )}
      </Routes>
    </Router>
  );
}

export default App;
