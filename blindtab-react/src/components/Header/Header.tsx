import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';
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
      
      <Controls>
        <HeaderButton 
          onClick={handleSongLibraryClick}
          aria-label="Open song library"
          title="Open song library (O)"
          className="song-library-button"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path 
              fill="currentColor" 
              d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"
            />
          </svg>
        </HeaderButton>
        
        <HeaderButton 
          onClick={handleAccessibilityClick}
          aria-label="Open accessibility options"
          title="Open accessibility options"
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
      </Controls>
    </HeaderContainer>
  );
};

export default Header; 