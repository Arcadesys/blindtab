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
import SongLibraryModal from './components/Modals/SongLibraryModal';
import DevTools from './components/DevTools/DevTools';
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation';
import useTour from './hooks/useTour';
import { TourGuide } from './components/common';
import GlobalStyles from './styles/GlobalStyles';
import { SongData } from './types/song';
import { checkDevSequence } from './utils/devMode';

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

// Tour steps for the onboarding guide
const tourSteps = [
  {
    target: 'header',
    title: 'Welcome to BlindTab!',
    content: 'BlindTab helps you view and navigate song leadsheets with ease. This quick tour will show you the main features.',
    position: 'bottom'
  },
  {
    target: '.song-library-button',
    title: 'Song Library',
    content: 'Click here or press "O" to open the song library where you can browse, search, and load songs. Each song has a play button to load it.',
    position: 'bottom'
  },
  {
    target: '.accessibility-button',
    title: 'Accessibility Options',
    content: 'Access settings for font size, display preferences, and other accessibility features here.',
    position: 'bottom'
  },
  {
    target: '.theme-toggle',
    title: 'Theme Toggle',
    content: 'Switch between light and dark themes for comfortable viewing in any environment. You can also press "D" to toggle.',
    position: 'left'
  },
  {
    target: 'main',
    title: 'Leadsheet Display',
    content: 'Your song lyrics and chords will appear here. The display automatically adjusts to show the current section of the song.',
    position: 'top'
  },
  {
    target: '.controls-panel',
    title: 'Navigation Controls',
    content: 'Use these buttons to navigate through the song. You can also use arrow keys or space bar to move forward.',
    position: 'top'
  },
  {
    target: '.auto-resize-button',
    title: 'Auto-Resize',
    content: 'Toggle auto-resize to automatically adjust the font size to fit the screen. You can also press "A" to toggle.',
    position: 'top'
  },
  {
    target: '.help-button',
    title: 'Help Button',
    content: 'Click this button anytime to restart this tour and learn about BlindTab features.',
    position: 'left'
  }
];

// Wrapper component to use the SongContext
const AppContent = () => {
  const [accessibilityModalOpen, setAccessibilityModalOpen] = useState(false);
  const [songListModalOpen, setSongListModalOpen] = useState(false);
  const [songLibraryModalOpen, setSongLibraryModalOpen] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const { songs, loadSong, isLoading, error } = useSong();
  
  // Tour guide setup
  const { isTourOpen, startTour, closeTour, completeTour, resetTour } = useTour({
    tourId: 'blindtab-main-tour',
    autoStart: true
  });
  
  // Get the current song data
  const currentSong = songs.current ? songs.loaded[songs.current] : null;
  
  // Check for dev sequence
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      checkDevSequence(e.key);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
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
    'o': () => setSongLibraryModalOpen(true),
    'l': () => setSongListModalOpen(true),
    'h': () => startTour(), // Add keyboard shortcut for help/tour
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
  
  // Song selection handler with better error handling
  const handleSongSelect = async (songId: string) => {
    try {
      const songData = await loadSong(songId);
      if (songData) {
        setCurrentLineIndex(0); // Reset to the beginning of the song
        // Announce success to screen reader
        const songTitle = songData.songInfo.title;
        const songArtist = songData.songInfo.artist;
        announceToScreenReader(`Loaded song: ${songTitle} by ${songArtist}`);
      }
    } catch (error) {
      console.error(`Error loading song ${songId}:`, error);
      announceToScreenReader(`Error loading song. ${error.message || 'Unknown error'}`);
    }
  };
  
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Header 
          onOpenAccessibilityMenu={() => setAccessibilityModalOpen(true)}
          onOpenSongLibrary={() => setSongLibraryModalOpen(true)}
          onStartTour={startTour}
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
          currentLineIndex={currentLineIndex}
          totalLines={currentSong ? currentSong.songData.length : 0}
          onSliderChange={setCurrentLineIndex}
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
        
        <SongLibraryModal
          isOpen={songLibraryModalOpen}
          onClose={() => setSongLibraryModalOpen(false)}
          onSongLoad={handleSongSelect}
        />
        
        <TourGuide 
          steps={tourSteps}
          isOpen={isTourOpen}
          onClose={closeTour}
          onComplete={completeTour}
        />
        
        <DevTools 
          onTriggerTour={startTour}
          onResetTour={resetTour}
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
