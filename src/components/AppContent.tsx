import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSong } from '../contexts/SongContext';
import Header from './Header/Header';
import LeadsheetDisplay from './LeadsheetDisplay/LeadsheetDisplay';
import ControlsPanel from './ControlsPanel/ControlsPanel';
import AccessibilityModal from './Modals/AccessibilityModal';
import SongListModal from './Modals/SongListModal';
import SongLibraryModal from './Modals/SongLibraryModal';
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation';
import useTour from '../hooks/useTour';
import { TourGuide, NetworkStatus } from './common';
import GlobalStyles from '../styles/GlobalStyles';
import { checkDevSequence } from '../utils/devMode';

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

// Empty state message when no song is loaded
const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
  text-align: center;
  color: #666;
`;

const EmptyStateTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 1.5rem;
`;

const EmptyStateText = styled.p`
  margin-bottom: 20px;
  font-size: 1rem;
`;

const EmptyStateButton = styled.button`
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    background-color: #2980b9;
  }
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

const AppContent: React.FC = () => {
  const [accessibilityModalOpen, setAccessibilityModalOpen] = useState(false);
  const [songListModalOpen, setSongListModalOpen] = useState(false);
  const [songLibraryModalOpen, setSongLibraryModalOpen] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const { songs, playSong, currentSong, isLoading, error } = useSong();
  
  // Tour guide setup
  const { isTourOpen, startTour, closeTour, completeTour, resetTour } = useTour({
    tourId: 'blindtab-main-tour',
    autoStart: true
  });
  
  // Get the current song data
  const songLyrics = currentSong?.lyrics || [];
  
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
    if (songLyrics.length && currentLineIndex < songLyrics.length - 1) {
      setCurrentLineIndex(currentLineIndex + 1);
    }
  };
  
  // Song selection handler with better error handling
  const handleSongSelect = async (songId: string) => {
    try {
      await playSong(songId);
      setCurrentLineIndex(0); // Reset to the beginning of the song
      // Announce success to screen reader
      if (currentSong) {
        announceToScreenReader(`Loaded song: ${currentSong.title} by ${currentSong.artist}`);
      }
    } catch (error) {
      console.error(`Error loading song ${songId}:`, error);
      announceToScreenReader(`Error loading song. ${error.message || 'Unknown error'}`);
    }
  };
  
  // Render empty state when no song is loaded
  const renderContent = () => {
    if (!currentSong && !isLoading) {
      return (
        <EmptyState>
          <EmptyStateTitle>No Song Loaded</EmptyStateTitle>
          <EmptyStateText>
            Select a song from the library to get started.
            {error && <div style={{ color: 'red', marginTop: '10px' }}>Error: {error.message}</div>}
          </EmptyStateText>
          <EmptyStateButton onClick={() => setSongLibraryModalOpen(true)}>
            Open Song Library
          </EmptyStateButton>
        </EmptyState>
      );
    }
    
    return (
      <LeadsheetDisplay 
        songData={currentSong} 
        currentLineIndex={currentLineIndex}
      />
    );
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
          {renderContent()}
        </MainContent>
        
        <ControlsPanel 
          onPrevious={handlePrevious}
          onNext={handleNext}
          hasPrevious={currentLineIndex > 0}
          hasNext={songLyrics.length ? currentLineIndex < songLyrics.length - 1 : false}
          currentLineIndex={currentLineIndex}
          totalLines={songLyrics.length || 0}
          onSliderChange={setCurrentLineIndex}
        />
      </AppContainer>
      
      {/* Network status indicator and loading spinner */}
      <NetworkStatus isLoading={isLoading} />
      
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
    </>
  );
};

// Helper function for screen reader announcements
const announceToScreenReader = (message: string) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.setAttribute('class', 'sr-only');
  announcement.textContent = message;
  document.body.appendChild(announcement);
  setTimeout(() => document.body.removeChild(announcement), 1000);
};

export default AppContent; 