import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SongLibrary from '../Navigation/SongLibrary';
import { useSong } from '../../contexts/SongContext';
import AddSongModal from './AddSongModal';
import { ImportSong } from '../ImportSong';
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
  width: 95%;
  max-width: 800px;
  height: 90vh;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid var(--border-color);
  padding: 0.25rem 0.5rem;
  gap: 0.25rem;
  background: var(--bg-secondary);
  align-items: center;
`;

const Tab = styled.button<{ $active: boolean }>`
  padding: 0.4rem 0.75rem;
  border: none;
  background: ${props => props.$active ? 'var(--bg-primary)' : 'none'};
  color: ${props => props.$active ? 'var(--text-color)' : 'var(--text-secondary)'};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.9rem;
  border: 1px solid ${props => props.$active ? 'var(--border-color)' : 'transparent'};

  &:hover {
    background: var(--bg-primary);
    color: var(--text-color);
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.4rem 0.6rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 0.9rem;
  background: var(--bg-primary);
  color: var(--text-primary);
  max-width: 300px;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const ActionButton = styled.button`
  padding: 0.4rem 0.6rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  white-space: nowrap;
  
  &:hover, &:focus {
    background: var(--primary-color-dark, #0056b3);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  cursor: pointer;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  
  &:hover {
    background: var(--bg-hover);
    color: var(--text-primary);
  }
`;

const SongList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem;
`;

interface SongLibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSongLoad: (songId: string) => void;
}

const SongLibraryModal: React.FC<SongLibraryModalProps> = ({ 
  isOpen, 
  onClose, 
  onSongLoad 
}) => {
  const { isLoading, error, refreshSongList, checkDatabaseConnection } = useSong();
  const [activeTab, setActiveTab] = useState<'all' | 'search'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [addSongModalOpen, setAddSongModalOpen] = useState(false);
  
  const handleAddNewSong = () => {
    setAddSongModalOpen(true);
  };
  
  const handleSongSaved = async (songId: string) => {
    await refreshSongList();
    announceToScreenReader('Song created successfully');
    onSongLoad(songId);
    onClose();
  };
  
  if (!isOpen) return null;
  
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <TabContainer>
          <Tab 
            $active={activeTab === 'all'} 
            onClick={() => setActiveTab('all')}
          >
            All Songs
          </Tab>
          <Tab 
            $active={activeTab === 'search'} 
            onClick={() => setActiveTab('search')}
          >
            Search
          </Tab>
          {activeTab === 'search' && (
            <SearchInput 
              type="text" 
              placeholder="Search songs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
          )}
          <div style={{ flex: 1 }} />
          <ActionButton onClick={handleAddNewSong}>
            Add
          </ActionButton>
          <ActionButton onClick={refreshSongList}>
            Refresh
          </ActionButton>
          <CloseButton onClick={onClose} aria-label="Close">
            ×
          </CloseButton>
        </TabContainer>

        <SongList>
          <SongLibrary 
            onSongLoad={onSongLoad}
            onClose={onClose}
            searchTerm={activeTab === 'search' ? searchTerm : ''}
          />
        </SongList>
        
        {addSongModalOpen && (
          <AddSongModal
            isOpen={addSongModalOpen}
            onClose={() => setAddSongModalOpen(false)}
            isEditMode={false}
            onSongSaved={handleSongSaved}
          />
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default SongLibraryModal; 