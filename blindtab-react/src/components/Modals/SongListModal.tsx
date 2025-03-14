import React, { useState } from 'react';
import styled from 'styled-components';
import SongList from '../Navigation/SongList';
import { useSong } from '../../contexts/SongContext';
import { announceToScreenReader } from '../../hooks/useKeyboardNavigation';
import SongEditorModal from './SongEditorModal';

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

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-top: 1px solid var(--border-color);
`;

const ActionButton = styled.button`
  background: none;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 0.5rem;
  
  &:hover, &:focus {
    background-color: var(--bg-hover);
  }
  
  &:focus {
    outline: 2px solid var(--focus-color);
    outline-offset: 2px;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
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
  const { songs, deleteSongById } = useSong();
  const [selectedSongId, setSelectedSongId] = useState<string | null>(null);
  const [editorOpen, setEditorOpen] = useState(false);
  const [isNewSong, setIsNewSong] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  
  if (!isOpen) return null;
  
  const handleSongSelect = (songId: string) => {
    setSelectedSongId(songId);
  };
  
  const handleLoadSong = () => {
    if (selectedSongId) {
      onSongSelect(selectedSongId);
      onClose();
    }
  };
  
  const handleEditSong = () => {
    if (selectedSongId) {
      setIsNewSong(false);
      setEditorOpen(true);
    }
  };
  
  const handleNewSong = () => {
    setIsNewSong(true);
    setEditorOpen(true);
  };
  
  const handleDeleteSong = async () => {
    if (selectedSongId) {
      if (!confirmDelete) {
        setConfirmDelete(true);
        announceToScreenReader('Press delete again to confirm');
        return;
      }
      
      const success = await deleteSongById(selectedSongId);
      
      if (success) {
        announceToScreenReader('Song deleted successfully');
        setSelectedSongId(null);
      } else {
        announceToScreenReader('Failed to delete song');
      }
      
      setConfirmDelete(false);
    }
  };
  
  return (
    <>
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
              selectedSongId={selectedSongId}
            />
          </ModalBody>
          
          <ActionBar>
            <ActionButton 
              onClick={handleNewSong}
              aria-label="Create new song"
              title="Create new song"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path 
                  fill="currentColor" 
                  d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                />
              </svg>
              New
            </ActionButton>
            
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <ActionButton 
                onClick={handleEditSong}
                disabled={!selectedSongId}
                aria-label="Edit selected song"
                title="Edit selected song"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path 
                    fill="currentColor" 
                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                  />
                </svg>
                Edit
              </ActionButton>
              
              <ActionButton 
                onClick={handleDeleteSong}
                disabled={!selectedSongId}
                aria-label={confirmDelete ? "Confirm delete" : "Delete selected song"}
                title={confirmDelete ? "Confirm delete" : "Delete selected song"}
                style={{ color: confirmDelete ? 'var(--error-color)' : undefined }}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path 
                    fill="currentColor" 
                    d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                  />
                </svg>
                {confirmDelete ? 'Confirm' : 'Delete'}
              </ActionButton>
              
              <ActionButton 
                onClick={handleLoadSong}
                disabled={!selectedSongId}
                aria-label="Load selected song"
                title="Load selected song"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path 
                    fill="currentColor" 
                    d="M8 5v14l11-7z"
                  />
                </svg>
                Load
              </ActionButton>
            </div>
          </ActionBar>
        </ModalContent>
      </ModalOverlay>
      
      <SongEditorModal 
        isOpen={editorOpen}
        onClose={() => setEditorOpen(false)}
        songId={isNewSong ? undefined : selectedSongId || undefined}
        isNewSong={isNewSong}
      />
    </>
  );
};

export default SongListModal; 