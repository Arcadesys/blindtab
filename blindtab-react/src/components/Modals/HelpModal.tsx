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
  max-width: 600px;
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

const HelpSection = styled.section`
  margin-bottom: 2rem;
  
  h3 {
    color: var(--text-primary);
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const KeyboardShortcut = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border-color);
  
  &:last-child {
    border-bottom: none;
  }
`;

const KeyCombo = styled.kbd`
  background: var(--bg-secondary);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-family: monospace;
`;

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Help & Keyboard Shortcuts</ModalTitle>
          <CloseButton onClick={onClose} aria-label="Close help">×</CloseButton>
        </ModalHeader>

        <HelpSection>
          <h3>Getting Started</h3>
          <p>
            BlindTab helps you learn songs by displaying one line at a time.
            Use the keyboard shortcuts or on-screen controls to navigate through the song.
          </p>
        </HelpSection>

        <HelpSection>
          <h3>Keyboard Shortcuts</h3>
          <KeyboardShortcut>
            <span>Previous Line</span>
            <KeyCombo>←</KeyCombo>
          </KeyboardShortcut>
          <KeyboardShortcut>
            <span>Next Line</span>
            <KeyCombo>→</KeyCombo>
          </KeyboardShortcut>
          <KeyboardShortcut>
            <span>Open Song Library</span>
            <KeyCombo>L</KeyCombo>
          </KeyboardShortcut>
          <KeyboardShortcut>
            <span>Toggle Settings</span>
            <KeyCombo>S</KeyCombo>
          </KeyboardShortcut>
          <KeyboardShortcut>
            <span>Show Help</span>
            <KeyCombo>?</KeyCombo>
          </KeyboardShortcut>
        </HelpSection>

        <HelpSection>
          <h3>Tips</h3>
          <p>
            • Use the song library to manage your songs<br />
            • Practice mode hides upcoming lines<br />
            • Customize the display in settings<br />
            • Take the guided tour to learn more
          </p>
        </HelpSection>
      </ModalContent>
    </ModalOverlay>
  );
}; 