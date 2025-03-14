import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SongLibrary from '../Navigation/SongLibrary';
import { useSong } from '../../contexts/SongContext';

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
  const [isCheckingConnection, setIsCheckingConnection] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'unknown' | 'connected' | 'disconnected'>('unknown');
  
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
  
  if (!isOpen) return null;
  
  // Determine if we're using fallback data
  const usingFallbackData = error && error.includes('fallback data');
  
  return (
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
        
        {usingFallbackData && (
          <InfoBanner>
            Using fallback data. Some features may be limited.
          </InfoBanner>
        )}
        
        {error && (
          <ErrorMessage>
            <p>{error}</p>
            <ButtonRow>
              <ActionButton 
                onClick={handleRetry}
                disabled={isLoading || isCheckingConnection}
              >
                Retry
              </ActionButton>
              <ActionButton 
                onClick={handleCheckConnection}
                disabled={isLoading || isCheckingConnection}
              >
                Check Connection
              </ActionButton>
            </ButtonRow>
          </ErrorMessage>
        )}
        
        <ModalBody>
          <SongLibrary 
            onSongLoad={onSongLoad}
            onClose={onClose}
          />
          
          {(isLoading || isCheckingConnection) && (
            <LoadingOverlay>
              <Spinner />
              <LoadingText>
                {isCheckingConnection ? 'Checking database connection...' : 'Loading songs...'}
              </LoadingText>
            </LoadingOverlay>
          )}
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default SongLibraryModal; 