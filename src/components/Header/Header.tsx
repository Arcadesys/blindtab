import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';
import { useSong } from '../../contexts/SongContext';
import ThemeToggle from './ThemeToggle';
import { ProfileMenu } from '../ProfileMenu';
import { announceToScreenReader } from '../../hooks/useKeyboardNavigation';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-primary);
  
  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
  flex: 1;
  overflow: hidden;
  text-align: center;
`;

const SongTitle = styled.div`
  font-weight: bold;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

const SongArtist = styled.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const HeaderButton = styled.button`
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover, &:focus {
    color: var(--text-primary);
    background-color: var(--bg-hover);
  }
  
  &:focus {
    outline: 2px solid var(--focus-color);
    outline-offset: 2px;
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

interface HeaderProps {
  onOpenAccessibilityMenu?: () => void;
  onOpenSongLibrary?: () => void;
  onStartTour?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  onOpenAccessibilityMenu,
  onOpenSongLibrary,
  onStartTour
}) => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const { songs } = useSong();
  
  // Get current song info
  const currentSongId = songs.current;
  const currentSong = currentSongId ? songs.loaded[currentSongId] : null;
  const songTitle = currentSong?.songInfo.title || '';
  const songArtist = currentSong?.songInfo.artist || '';
  const songKey = currentSong?.songInfo.key || '';
  const songTempo = currentSong?.songInfo.tempo || '';
  
  // Format song info for display
  const songMetadata = [];
  if (songKey) songMetadata.push(`Key: ${songKey}`);
  if (songTempo) songMetadata.push(`Tempo: ${songTempo}`);
  const metadataText = songMetadata.join(' · ');
  
  const handleAccessibilityClick = () => {
    if (onOpenAccessibilityMenu) {
      onOpenAccessibilityMenu();
      announceToScreenReader('Accessibility menu opened');
    }
  };
  
  const handleSongLibraryClick = () => {
    if (onOpenSongLibrary) {
      onOpenSongLibrary();
      announceToScreenReader('Song library opened');
    }
  };
  
  const handleHelpClick = () => {
    if (onStartTour) {
      onStartTour();
      announceToScreenReader('Starting app tour');
    }
  };
  
  return (
    <HeaderContainer>
      <Logo>
        <a href="/" aria-label="BlindTab Home">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path 
              fill="currentColor" 
              d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
            />
          </svg>
          BlindTab
        </a>
      </Logo>
      
      <SongInfo>
        {songTitle && (
          <>
            <SongTitle>{songTitle}</SongTitle>
            <SongArtist>{songArtist}</SongArtist>
            {metadataText && (
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                {metadataText}
              </div>
            )}
          </>
        )}
      </SongInfo>
      
      <Controls>
        <HeaderButton 
          onClick={handleSongLibraryClick}
          aria-label="Open song library"
          title="Open song library"
          className="song-library-button"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path 
              fill="currentColor" 
              d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"
            />
          </svg>
        </HeaderButton>
        
        <HeaderButton 
          onClick={handleAccessibilityClick}
          aria-label="Open accessibility menu"
          title="Open accessibility menu"
          className="accessibility-button"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path 
              fill="currentColor" 
              d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"
            />
          </svg>
        </HeaderButton>
        
        <HeaderButton 
          onClick={handleHelpClick}
          aria-label="Start app tour"
          title="Start app tour"
          className="help-button"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path 
              fill="currentColor" 
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
            />
          </svg>
        </HeaderButton>
        
        <ThemeToggle 
          isDarkTheme={isDarkTheme} 
          toggleTheme={toggleTheme} 
          className="theme-toggle"
        />

        <ProfileMenu />
      </Controls>
    </HeaderContainer>
  );
};

export default Header; 