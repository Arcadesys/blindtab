import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DevTools from './components/DevTools';
import { ThemeProvider } from './contexts/ThemeContext';
import { DisplayProvider } from './contexts/DisplayContext';
import { SongProvider } from './contexts/SongContext';
import AppContent from './components/AppContent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <ThemeProvider>
            <DisplayProvider>
              <SongProvider>
                <AppContent />
              </SongProvider>
            </DisplayProvider>
          </ThemeProvider>
        } />
        {import.meta.env.DEV && (
          <Route path="/dev" element={
            <ThemeProvider>
              <DisplayProvider>
                <SongProvider>
                  <DevTools />
                </SongProvider>
              </DisplayProvider>
            </ThemeProvider>
          } />
        )}
      </Routes>
    </Router>
  );
}

export default App;
