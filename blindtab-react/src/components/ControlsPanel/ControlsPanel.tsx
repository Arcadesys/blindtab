import React from 'react';
import styled from 'styled-components';
import { useDisplay } from '../../contexts/DisplayContext';
import { announceToScreenReader } from '../../hooks/useKeyboardNavigation';
import Slider from '../common/Slider';

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
`;

const ControlGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ControlButton = styled.button`
  background: none;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover, &:focus {
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
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const AutoResizeButton = styled(ControlButton)<{ $active: boolean }>`
  background-color: ${props => props.$active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.$active ? 'white' : 'var(--text-primary)'};
  
  &:hover, &:focus {
    background-color: ${props => props.$active ? 'var(--primary-hover-color)' : 'var(--bg-hover)'};
  }
  
  animation: ${props => props.$active ? 'pulse 2s infinite' : 'none'};
`;

const FontSizeControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 180px;
`;

const FontSizeSlider = styled(Slider)`
  width: 100%;
`;

const LineControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const ValueDisplay = styled.span`
  min-width: 2rem;
  text-align: center;
`;

const NavigationSlider = styled(Slider)`
  width: 200px;
  margin: 0 0.5rem;
`;

interface ControlsPanelProps {
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
  currentLineIndex: number;
  totalLines: number;
  onSliderChange: (value: number) => void;
}

const ControlsPanel: React.FC<ControlsPanelProps> = ({
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
  currentLineIndex,
  totalLines,
  onSliderChange
}) => {
  const { 
    fontSize, 
    setFontSize, 
    linesToDisplay, 
    setLinesToDisplay, 
    autoResize, 
    toggleAutoResize 
  } = useDisplay();
  
  const handleFontSizeChange = (delta: number) => {
    const newSize = Math.max(12, Math.min(72, fontSize + delta));
    setFontSize(newSize);
    announceToScreenReader(`Font size changed to ${newSize}`);
  };
  
  const handleLinesChange = (delta: number) => {
    const newLines = Math.max(1, Math.min(10, linesToDisplay + delta));
    setLinesToDisplay(newLines);
    announceToScreenReader(`Lines to display changed to ${newLines}`);
  };
  
  const handleAutoResizeToggle = () => {
    toggleAutoResize();
    announceToScreenReader(`Auto resize ${!autoResize ? 'enabled' : 'disabled'}`);
  };
  
  const handlePrevious = () => {
    if (onPrevious && hasPrevious) {
      onPrevious();
      announceToScreenReader('Previous section');
    }
  };
  
  const handleNext = () => {
    if (onNext && hasNext) {
      onNext();
      announceToScreenReader('Next section');
    }
  };
  
  return (
    <ControlsContainer className="controls-panel">
      <ControlGroup>
        <ControlButton 
          onClick={handlePrevious}
          disabled={!hasPrevious}
          aria-label="Previous section"
          title="Previous section"
          className="previous-button"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path 
              fill="currentColor" 
              d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
            />
          </svg>
        </ControlButton>
        
        <NavigationSlider
          min={0}
          max={Math.max(0, totalLines - 1)}
          value={currentLineIndex}
          onChange={onSliderChange}
          disabled={totalLines <= 1}
          ariaLabel="Song navigation"
          valueFormat={(value, max) => `${value + 1}/${max + 1}`}
        />
        
        <ControlButton 
          onClick={handleNext}
          disabled={!hasNext}
          aria-label="Next section"
          title="Next section"
          className="next-button"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path 
              fill="currentColor" 
              d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
            />
          </svg>
        </ControlButton>
      </ControlGroup>
      
      <ControlGroup>
        <FontSizeControls className="font-size-controls">
          <FontSizeSlider
            min={12}
            max={72}
            value={fontSize}
            onChange={(newSize) => {
              setFontSize(newSize);
              announceToScreenReader(`Font size changed to ${newSize} pixels`);
            }}
            disabled={autoResize}
            ariaLabel="Font size"
            valueFormat={(value) => `${value}px`}
          />
        </FontSizeControls>
        
        <LineControls className="lines-controls">
          <ControlButton 
            onClick={() => handleLinesChange(-1)}
            aria-label="Decrease lines to display"
            title="Decrease lines to display"
            disabled={linesToDisplay <= 1}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path 
                fill="currentColor" 
                d="M19 13H5v-2h14v2z"
              />
            </svg>
          </ControlButton>
          
          <ValueDisplay>{linesToDisplay}</ValueDisplay>
          
          <ControlButton 
            onClick={() => handleLinesChange(1)}
            aria-label="Increase lines to display"
            title="Increase lines to display"
            disabled={linesToDisplay >= 10}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path 
                fill="currentColor" 
                d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
              />
            </svg>
          </ControlButton>
        </LineControls>
        
        <AutoResizeButton 
          onClick={handleAutoResizeToggle}
          $active={autoResize}
          aria-label={`${autoResize ? 'Disable' : 'Enable'} auto resize`}
          title={`${autoResize ? 'Disable' : 'Enable'} auto resize`}
          className="auto-resize-button"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path 
              fill="currentColor" 
              d="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3v6zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6h6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6v-6z"
            />
          </svg>
        </AutoResizeButton>
      </ControlGroup>
    </ControlsContainer>
  );
};

export default ControlsPanel; 