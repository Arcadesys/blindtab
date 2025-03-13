import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../common';
import { shouldShowDevTools } from '../../utils/devMode';

interface DevToolsProps {
  onTriggerTour: () => void;
  onResetTour: () => void;
}

const DevToolsContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
  background-color: var(--bg-primary);
  border: 1px solid var(--primary-color);
  border-radius: 8px;
  box-shadow: 0 4px 12px var(--modal-shadow);
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 200px;
`;

const DevToolsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const DevToolsTitle = styled.h3`
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-primary);
`;

const CollapseButton = styled.button`
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: var(--text-primary);
  }
`;

const CollapsedButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 12px var(--modal-shadow);
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover {
    background-color: var(--primary-hover-color);
  }
`;

const KeyboardHint = styled.div`
  font-size: 0.7rem;
  color: var(--text-secondary);
  text-align: center;
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px dashed var(--border-color);
`;

const DevTools: React.FC<DevToolsProps> = ({ onTriggerTour, onResetTour }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  
  // Only show dev tools in development mode
  if (!shouldShowDevTools()) {
    return null;
  }
  
  if (isCollapsed) {
    return (
      <CollapsedButton 
        onClick={() => setIsCollapsed(false)}
        aria-label="Open developer tools"
        title="Open developer tools"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      </CollapsedButton>
    );
  }
  
  return (
    <DevToolsContainer>
      <DevToolsHeader>
        <DevToolsTitle>Developer Tools</DevToolsTitle>
        <CollapseButton 
          onClick={() => setIsCollapsed(true)}
          aria-label="Collapse developer tools"
          title="Collapse developer tools"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </CollapseButton>
      </DevToolsHeader>
      
      <Button 
        variant="primary" 
        size="small" 
        onClick={onTriggerTour}
        fullWidth
      >
        Trigger Tour
      </Button>
      
      <Button 
        variant="secondary" 
        size="small" 
        onClick={onResetTour}
        fullWidth
      >
        Reset Tour
      </Button>
      
      <KeyboardHint>
        Tip: Type "dev" to toggle dev tools in production
      </KeyboardHint>
    </DevToolsContainer>
  );
};

export default DevTools; 