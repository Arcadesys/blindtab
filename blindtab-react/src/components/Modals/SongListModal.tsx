import React, { useState } from 'react';
import styled from 'styled-components';
import SongList from '../Navigation/SongList';
import { useSong } from '../../contexts/SongContext';
import { announceToScreenReader } from '../../hooks/useKeyboardNavigation';
import { SongEditorModal } from './SongEditorModal';

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
  const { songs, deleteSongById, refreshSongList } = useSong();
  const [selectedSongId, setSelectedSongId] = useState<string | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
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
      setIsEditMode(true);
      setIsEditorOpen(true);
    }
  };
  
  const handleNewSong = () => {
    setIsEditMode(false);
    setSelectedSongId(null);
    setIsEditorOpen(true);
  };
  
  const handleEditorClose = async () => {
    setIsEditorOpen(false);
    await refreshSongList();
    announceToScreenReader(`Song ${isEditMode ? 'updated' : 'created'} successfully`);
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
        <ModalContent onClick={e => e.stopPropagation()}>
          <ModalHeader>
            <ModalTitle>Song Library</ModalTitle>
            <CloseButton onClick={onClose}>×</CloseButton>
          </ModalHeader>
          
          <ModalBody>
            <SongList>
              {songs.available.map(song => (
                <SongItem
                  key={song.id}
                  $selected={selectedSongId === song.id}
                  onClick={() => handleSongSelect(song.id)}
                >
                  <SongInfo>
                    <SongTitle>{song.title}</SongTitle>
                    <SongArtist>{song.artist}</SongArtist>
                  </SongInfo>
                  <SongActions>
                    <ActionButton onClick={() => handleLoadSong()}>
                      ▶
                    </ActionButton>
                    <ActionButton onClick={() => handleEditSong()}>
                      ✏️
                    </ActionButton>
                    <ActionButton onClick={() => handleDeleteSong()}>
                      🗑️
                    </ActionButton>
                  </SongActions>
                </SongItem>
              ))}
            </SongList>
          </ModalBody>
          
          <ModalFooter>
            <Button onClick={handleNewSong}>
              + Add New Song
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
      
      <SongEditorModal 
        isOpen={isEditorOpen}
        onClose={handleEditorClose}
        songId={isEditMode ? selectedSongId : undefined}
        isNewSong={!isEditMode}
      />
    </>
  );
};

export default SongListModal; 