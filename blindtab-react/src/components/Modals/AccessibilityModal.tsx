import React from 'react';
import styled from 'styled-components';
import { useDisplay } from '../../contexts/DisplayContext';
import { useTheme } from '../../contexts/ThemeContext';
import { announceToScreenReader } from '../../hooks/useKeyboardNavigation';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: var(--background-color);
  border-radius: 8px;
  box-shadow: 0 4px 12px var(--modal-shadow);
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-secondary);
  
  &:hover, &:focus {
    color: var(--text-primary);
  }
  
  &:focus {
    outline: 2px solid var(--focus-color);
    outline-offset: 2px;
  }
`;

const ModalBody = styled.div`
  padding: 1rem;
`;

const SettingGroup = styled.div`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SettingTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
`;

const SettingDescription = styled.p`
  margin: 0 0 1rem 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--border-color);
    transition: .4s;
    border-radius: 34px;
  }
  
  span:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
  
  input:checked + span {
    background-color: var(--primary-color);
  }
  
  input:focus + span {
    box-shadow: 0 0 1px var(--primary-color);
  }
  
  input:checked + span:before {
    transform: translateX(26px);
  }
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Slider = styled.input`
  flex: 1;
  height: 8px;
  border-radius: 4px;
  background: var(--border-color);
  outline: none;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--primary-color);
    cursor: pointer;
  }
  
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--primary-color);
    cursor: pointer;
  }
`;

const SliderValue = styled.span`
  min-width: 40px;
  text-align: right;
`;

const KeyboardShortcuts = styled.div`
  margin-top: 1rem;
`;

const ShortcutTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 0.5rem;
    text-align: left;
    border-bottom: 1px solid var(--border-color);
  }
  
  th {
    font-weight: bold;
    color: var(--text-secondary);
  }
`;

const KeyboardKey = styled.kbd`
  display: inline-block;
  padding: 0.2rem 0.5rem;
  font-size: 0.9rem;
  font-family: monospace;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`;

interface AccessibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AccessibilityModal: React.FC<AccessibilityModalProps> = ({ isOpen, onClose }) => {
  const { 
    fontSize, 
    setFontSize, 
    linesToDisplay, 
    setLinesToDisplay, 
    autoResize, 
    toggleAutoResize,
    enableAnimations,
    toggleAnimations
  } = useDisplay();
  
  const { isDarkTheme, toggleTheme } = useTheme();
  
  if (!isOpen) return null;
  
  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(e.target.value, 10);
    setFontSize(newSize);
    announceToScreenReader(`Font size set to ${newSize} pixels`);
  };
  
  const handleLinesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLines = parseInt(e.target.value, 10);
    setLinesToDisplay(newLines);
    announceToScreenReader(`Lines to display set to ${newLines}`);
  };
  
  const handleAutoResizeToggle = () => {
    toggleAutoResize();
    announceToScreenReader(`Auto resize ${!autoResize ? 'enabled' : 'disabled'}`);
  };
  
  const handleThemeToggle = () => {
    toggleTheme();
    announceToScreenReader(`${!isDarkTheme ? 'Dark' : 'Light'} theme enabled`);
  };
  
  const handleAnimationsToggle = () => {
    toggleAnimations();
    announceToScreenReader(`Animations ${!enableAnimations ? 'enabled' : 'disabled'}`);
  };
  
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent 
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-labelledby="accessibility-title"
        aria-modal="true"
      >
        <ModalHeader>
          <ModalTitle id="accessibility-title">Accessibility Settings</ModalTitle>
          <CloseButton 
            onClick={onClose}
            aria-label="Close accessibility settings"
          >
            ×
          </CloseButton>
        </ModalHeader>
        
        <ModalBody>
          <SettingGroup>
            <SettingTitle>Display Settings</SettingTitle>
            <SettingDescription>Adjust how the leadsheet is displayed</SettingDescription>
            
            <SliderContainer>
              <label htmlFor="font-size">Font Size:</label>
              <Slider 
                type="range" 
                id="font-size"
                min="12" 
                max="72" 
                value={fontSize} 
                onChange={handleFontSizeChange}
                disabled={autoResize}
              />
              <SliderValue>{fontSize}px</SliderValue>
            </SliderContainer>
            
            <SliderContainer>
              <label htmlFor="lines-display">Lines to Display:</label>
              <Slider 
                type="range" 
                id="lines-display"
                min="1" 
                max="10" 
                value={linesToDisplay} 
                onChange={handleLinesChange}
              />
              <SliderValue>{linesToDisplay}</SliderValue>
            </SliderContainer>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
              <ToggleSwitch>
                <input 
                  type="checkbox" 
                  checked={autoResize} 
                  onChange={handleAutoResizeToggle}
                  id="auto-resize"
                />
                <span></span>
              </ToggleSwitch>
              <label htmlFor="auto-resize">Auto-resize text to fit screen</label>
            </div>
          </SettingGroup>
          
          <SettingGroup>
            <SettingTitle>Theme</SettingTitle>
            <SettingDescription>Choose between light and dark theme</SettingDescription>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <ToggleSwitch>
                <input 
                  type="checkbox" 
                  checked={isDarkTheme} 
                  onChange={handleThemeToggle}
                  id="dark-theme"
                />
                <span></span>
              </ToggleSwitch>
              <label htmlFor="dark-theme">Dark Theme</label>
            </div>
          </SettingGroup>
          
          <SettingGroup>
            <SettingTitle>Scroll Animations</SettingTitle>
            <SettingDescription>
              Enable smooth scrolling animations when navigating through songs.
              Disabling may improve performance and reduce motion for users sensitive to animations.
            </SettingDescription>
            <ToggleSwitch>
              <input 
                type="checkbox" 
                checked={enableAnimations}
                onChange={handleAnimationsToggle}
                aria-label="Toggle animations"
              />
              <span></span>
            </ToggleSwitch>
          </SettingGroup>
          
          <SettingGroup>
            <SettingTitle>Keyboard Shortcuts</SettingTitle>
            <SettingDescription>Use these shortcuts for quick navigation</SettingDescription>
            
            <KeyboardShortcuts>
              <ShortcutTable>
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Shortcut</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Next Section</td>
                    <td><KeyboardKey>→</KeyboardKey> or <KeyboardKey>Space</KeyboardKey></td>
                  </tr>
                  <tr>
                    <td>Previous Section</td>
                    <td><KeyboardKey>←</KeyboardKey></td>
                  </tr>
                  <tr>
                    <td>Increase Font Size</td>
                    <td><KeyboardKey>+</KeyboardKey> or <KeyboardKey>=</KeyboardKey></td>
                  </tr>
                  <tr>
                    <td>Decrease Font Size</td>
                    <td><KeyboardKey>-</KeyboardKey></td>
                  </tr>
                  <tr>
                    <td>Toggle Auto-resize</td>
                    <td><KeyboardKey>A</KeyboardKey></td>
                  </tr>
                  <tr>
                    <td>Toggle Dark Mode</td>
                    <td><KeyboardKey>D</KeyboardKey></td>
                  </tr>
                  <tr>
                    <td>Open Song Library</td>
                    <td><KeyboardKey>O</KeyboardKey></td>
                  </tr>
                  <tr>
                    <td>Open Song Manager</td>
                    <td><KeyboardKey>L</KeyboardKey></td>
                  </tr>
                  <tr>
                    <td>Start App Tour</td>
                    <td><KeyboardKey>H</KeyboardKey></td>
                  </tr>
                </tbody>
              </ShortcutTable>
            </KeyboardShortcuts>
          </SettingGroup>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AccessibilityModal; 