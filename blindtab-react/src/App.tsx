import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from './contexts/ThemeContext';
import { DisplayProvider } from './contexts/DisplayContext';
import { SongProvider, useSong } from './contexts/SongContext';
import Header from './components/Header/Header';
import LeadsheetDisplay from './components/LeadsheetDisplay/LeadsheetDisplay';
import ControlsPanel from './components/ControlsPanel/ControlsPanel';
import AccessibilityModal from './components/Modals/AccessibilityModal';
import SongListModal from './components/Modals/SongListModal';
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation';
import GlobalStyles from './styles/GlobalStyles';
import { SongData } from './types/song';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

// Wrapper component to use the SongContext
const AppContent = () => {
  const [accessibilityModalOpen, setAccessibilityModalOpen] = useState(false);
  const [songListModalOpen, setSongListModalOpen] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const { songs, loadSong } = useSong();
  
  // Get the current song data
  const currentSong = songs.current ? songs.loaded[songs.current] : null;
  
  // Keyboard navigation setup
  useKeyboardNavigation({
    'arrowright': () => handleNext(),
    'space': () => handleNext(),
    'arrowleft': () => handlePrevious(),
    '+': () => {/* Increase font size handled by DisplayContext */},
    '=': () => {/* Increase font size handled by DisplayContext */},
    '-': () => {/* Decrease font size handled by DisplayContext */},
    'a': () => {/* Toggle auto-resize handled by DisplayContext */},
    'd': () => {/* Toggle dark mode handled by ThemeContext */},
    'o': () => setSongListModalOpen(true),
  }, {
    preventDefaultKeys: ['space', 'arrowleft', 'arrowright']
  });
  
  // Navigation functions
  const handlePrevious = () => {
    if (currentLineIndex > 0) {
      setCurrentLineIndex(currentLineIndex - 1);
    }
  };
  
  const handleNext = () => {
    if (currentSong && currentLineIndex < currentSong.songData.length - 1) {
      setCurrentLineIndex(currentLineIndex + 1);
    }
  };
  
  // Song selection handler
  const handleSongSelect = async (songId: string) => {
    try {
      await loadSong(songId);
      setCurrentLineIndex(0); // Reset to the beginning of the song
    } catch (error) {
      console.error(`Error loading song ${songId}:`, error);
    }
  };
  
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Header 
          onOpenAccessibilityMenu={() => setAccessibilityModalOpen(true)}
          onOpenSongLibrary={() => setSongListModalOpen(true)}
        />
        
        <MainContent>
          <LeadsheetDisplay 
            songData={currentSong} 
            currentLineIndex={currentLineIndex}
          />
        </MainContent>
        
        <ControlsPanel 
          onPrevious={handlePrevious}
          onNext={handleNext}
          hasPrevious={currentLineIndex > 0}
          hasNext={currentSong ? currentLineIndex < currentSong.songData.length - 1 : false}
        />
        
        <AccessibilityModal 
          isOpen={accessibilityModalOpen}
          onClose={() => setAccessibilityModalOpen(false)}
        />
        
        <SongListModal 
          isOpen={songListModalOpen}
          onClose={() => setSongListModalOpen(false)}
          onSongSelect={handleSongSelect}
        />
      </AppContainer>
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <DisplayProvider>
        <SongProvider>
          <AppContent />
        </SongProvider>
      </DisplayProvider>
    </ThemeProvider>
  );
}

export default App;
