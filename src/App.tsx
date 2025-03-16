import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DevTools from './components/DevTools';
import { ThemeProvider } from './contexts/ThemeContext';
import { DisplayProvider } from './contexts/DisplayContext';
import { SongProvider } from './contexts/SongContext';
import { AuthProvider } from './contexts/AuthContext';
import AppContent from './components/AppContent';
import PreviewModeNotice from './components/PreviewModeNotice';

function App() {
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
