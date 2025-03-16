import React from 'react';
import styled from 'styled-components';

const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  background-color: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
`;

const NavigationButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  background-color: var(--primary-color);
  color: white;
  border: none;
  
  &:hover, &:focus {
    background-color: var(--primary-hover-color);
    transform: translateY(-1px);
  }
  
  &:focus {
    outline: 2px solid var(--focus-color);
    outline-offset: 2px;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const LineDisplay = styled.div`
  font-size: 1rem;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

interface ControlsPanelProps {
  onPrevLine: () => void;
  onNextLine: () => void;
  currentLine: number;
  totalLines: number;
}

const ControlsPanel: React.FC<ControlsPanelProps> = ({
  onPrevLine,
  onNextLine,
  currentLine,
  totalLines
}) => {
  return (
    <ControlsContainer className="controls-panel">
      <NavigationButton
        onClick={onPrevLine}
        disabled={currentLine <= 1}
        aria-label="Previous line"
      >
        ← Previous
      </NavigationButton>

      <LineDisplay>
        Line {currentLine} of {totalLines}
      </LineDisplay>

      <NavigationButton
        onClick={onNextLine}
        disabled={currentLine >= totalLines}
        aria-label="Next line"
      >
        Next →
      </NavigationButton>
    </ControlsContainer>
  );
};

export default ControlsPanel; 