import React from 'react';
import styled from 'styled-components';
import SongList from '../Navigation/SongList';

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
  height: 80vh;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
  flex: 1;
  overflow: hidden;
`;

interface SongListModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSongSelect: (songId: string) => void;
}

const SongListModal: React.FC<SongListModalProps> = ({ 
  isOpen, 
  onClose, 
  onSongSelect 
}) => {
  if (!isOpen) return null;
  
  const handleSongSelect = (songId: string) => {
    onSongSelect(songId);
    onClose();
  };
  
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent 
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-labelledby="song-list-title"
        aria-modal="true"
      >
        <ModalHeader>
          <ModalTitle id="song-list-title">Song Library</ModalTitle>
          <CloseButton 
            onClick={onClose}
            aria-label="Close song list"
          >
            ×
          </CloseButton>
        </ModalHeader>
        
        <ModalBody>
          <SongList 
            onSongSelect={handleSongSelect}
            onClose={onClose}
          />
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default SongListModal; 