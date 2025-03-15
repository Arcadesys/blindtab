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
  position: relative;
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid var(--primary-color);
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.p`
  color: var(--text-primary);
  font-weight: bold;
  margin: 0;
  text-align: center;
`;

const ErrorMessage = styled.div`
  color: var(--error-color, red);
  text-align: center;
  margin-top: 0.5rem;
  padding: 0.5rem;
  background-color: rgba(255, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  justify-content: center;
`;

const ActionButton = styled.button`
  padding: 0.25rem 0.5rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  
  &:hover, &:focus {
    background: var(--primary-color-dark, #0056b3);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const InfoBanner = styled.div`
  background-color: rgba(0, 123, 255, 0.1);
  color: var(--primary-color);
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
  text-align: center;
`;

const AddNewButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 5;
  
  &:hover, &:focus {
    background-color: var(--primary-hover-color, #0056b3);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
  
  &:focus {
    outline: 2px solid var(--focus-color);
    outline-offset: 2px;
  }
  
  transition: all 0.2s ease;
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid var(--border-color);
  padding: 0 1rem;
`;

const Tab = styled.button<{ $active: boolean }>`
  padding: 0.75rem 1.5rem;
  border: none;
  background: none;
  color: ${props => props.$active ? 'var(--text-color)' : 'var(--text-secondary)'};
  border-bottom: 2px solid ${props => props.$active ? 'var(--primary-color)' : 'transparent'};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: var(--text-color);
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const RetryButton = styled.button`
  padding: 0.5rem 1rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  
  &:hover, &:focus {
    background: var(--primary-color-dark, #0056b3);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const AddButton = styled.button`
  padding: 0.5rem 1rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-top: 1rem;
  
  &:hover, &:focus {
    background: var(--primary-color-dark, #0056b3);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
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
  const { isLoading, error, refreshSongList, checkDatabaseConnection, isConnected } = useSong();
  const [isCheckingConnection, setIsCheckingConnection] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'unknown' | 'connected' | 'disconnected'>('unknown');
  const [addSongModalOpen, setAddSongModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'library' | 'import'>('library');
  
  // Check connection when modal opens
  useEffect(() => {
    if (isOpen && error) {
      handleCheckConnection();
    }
  }, [isOpen, error]);
  
  const handleCheckConnection = async () => {
    try {
      setIsCheckingConnection(true);
      const isConnected = await checkDatabaseConnection();
      setConnectionStatus(isConnected ? 'connected' : 'disconnected');
      
      if (isConnected) {
        // If connected, refresh the song list
        await refreshSongList();
      }
    } catch (err) {
      setConnectionStatus('disconnected');
    } finally {
      setIsCheckingConnection(false);
    }
  };
  
  const handleRetry = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await refreshSongList();
  };
  
  const handleAddNewSong = () => {
    setAddSongModalOpen(true);
  };
  
  const handleSongSaved = async (songId: string) => {
    await refreshSongList();
    announceToScreenReader('Song created successfully');
    // Optionally load the new song right away
    onSongLoad(songId);
    onClose();
  };
  
  if (!isOpen) return null;
  
  // Determine if we're using fallback data
  const usingFallbackData = error && error.includes('fallback data');
  
  return (
    <>
      <ModalOverlay onClick={onClose}>
        <ModalContent 
          onClick={e => e.stopPropagation()}
          role="dialog"
          aria-labelledby="song-library-title"
          aria-modal="true"
        >
          <ModalHeader>
            <ModalTitle id="song-library-title">
              Song Library
              {isLoading && <span> (Loading...)</span>}
            </ModalTitle>
            <CloseButton 
              onClick={onClose}
              aria-label="Close song library"
            >
              ×
            </CloseButton>
          </ModalHeader>
          
          <TabContainer>
            <Tab 
              $active={activeTab === 'library'} 
              onClick={() => setActiveTab('library')}
            >
              Library
            </Tab>
            <Tab 
              $active={activeTab === 'import'} 
              onClick={() => setActiveTab('import')}
            >
              Import from Web
            </Tab>
          </TabContainer>
          
          {activeTab === 'library' ? (
            <>
              {!isConnected ? (
                <ErrorContainer>
                  <ErrorMessage>
                    Unable to connect to the song library. Please check your connection and try again.
                  </ErrorMessage>
                  <RetryButton onClick={handleRetry}>
                    Retry Connection
                  </RetryButton>
                </ErrorContainer>
              ) : (
                <SongLibrary 
                  onSongLoad={onSongLoad}
                  onClose={onClose}
                />
              )}
              <AddButton onClick={handleAddNewSong}>
                + Add New Song
              </AddButton>
            </>
          ) : (
            <ImportSong />
          )}
        </ModalContent>
      </ModalOverlay>
      
      {addSongModalOpen && (
        <AddSongModal
          isOpen={addSongModalOpen}
          onClose={() => setAddSongModalOpen(false)}
          isEditMode={false}
          onSongSaved={handleSongSaved}
        />
      )}
    </>
  );
};

export default SongLibraryModal; 