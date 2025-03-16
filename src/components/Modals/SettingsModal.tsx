import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ModalTitle = styled.h2`
  margin: 0;
  color: var(--text-primary);
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-secondary);
  padding: 0.5rem;
  
  &:hover {
    color: var(--text-primary);
  }
`;

const SettingSection = styled.section`
  margin-bottom: 2rem;
  
  h3 {
    color: var(--text-primary);
    margin-bottom: 1rem;
  }
`;

const SettingRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--border-color);
  
  &:last-child {
    border-bottom: none;
  }
`;

const SettingLabel = styled.label`
  color: var(--text-secondary);
  flex: 1;
`;

const SettingControl = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
    
    &:checked + span {
      background-color: var(--primary-color);
    }
    
    &:checked + span:before {
      transform: translateX(24px);
    }
  }
  
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--bg-secondary);
    transition: .4s;
    border-radius: 24px;
    
    &:before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
      border-radius: 50%;
    }
  }
`;

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Settings</ModalTitle>
          <CloseButton onClick={onClose} aria-label="Close settings">×</CloseButton>
        </ModalHeader>

        <SettingSection>
          <h3>Display</h3>
          <SettingRow>
            <SettingLabel htmlFor="darkMode">Dark Mode</SettingLabel>
            <SettingControl>
              <Switch>
                <input 
                  type="checkbox" 
                  id="darkMode"
                  checked={true}
                  onChange={() => {/* TODO: Implement theme toggle */}}
                />
                <span></span>
              </Switch>
            </SettingControl>
          </SettingRow>
          <SettingRow>
            <SettingLabel htmlFor="fontSize">Font Size</SettingLabel>
            <SettingControl>
              <select 
                id="fontSize"
                value="medium"
                onChange={() => {/* TODO: Implement font size change */}}
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </SettingControl>
          </SettingRow>
        </SettingSection>

        <SettingSection>
          <h3>Practice Mode</h3>
          <SettingRow>
            <SettingLabel htmlFor="hideUpcoming">Hide Upcoming Lines</SettingLabel>
            <SettingControl>
              <Switch>
                <input 
                  type="checkbox" 
                  id="hideUpcoming"
                  checked={false}
                  onChange={() => {/* TODO: Implement practice mode toggle */}}
                />
                <span></span>
              </Switch>
            </SettingControl>
          </SettingRow>
          <SettingRow>
            <SettingLabel htmlFor="autoAdvance">Auto-advance Lines</SettingLabel>
            <SettingControl>
              <Switch>
                <input 
                  type="checkbox" 
                  id="autoAdvance"
                  checked={false}
                  onChange={() => {/* TODO: Implement auto-advance toggle */}}
                />
                <span></span>
              </Switch>
            </SettingControl>
          </SettingRow>
        </SettingSection>
      </ModalContent>
    </ModalOverlay>
  );
}; 