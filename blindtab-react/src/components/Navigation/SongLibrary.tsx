import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useSong } from '../../contexts/SongContext';
import { announceToScreenReader } from '../../hooks/useKeyboardNavigation';
import { Song } from '../../types/song';

const LibraryContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

const SearchBar = styled.div`
  padding: 0.5rem;
  border-bottom: 1px solid var(--border-color);
`;

const SearchInput = styled.input<{ disabled?: boolean }>`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: ${props => props.disabled ? 'var(--bg-disabled, #e9e9e9)' : 'var(--bg-primary)'};
  color: var(--text-primary);
  opacity: ${props => props.disabled ? 0.7 : 1};
  
  &:focus {
    outline: 2px solid var(--focus-color);
    outline-offset: 2px;
  }
`;

const SongListScroll = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem;
`;

const SongItem = styled.div<{ disabled?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  background-color: ${props => props.disabled ? 'var(--bg-disabled, #e9e9e9)' : 'var(--bg-secondary)'};
  color: var(--text-primary);
  transition: background-color 0.2s;
  opacity: ${props => props.disabled ? 0.7 : 1};
  
  &:hover {
    background-color: ${props => props.disabled ? 'var(--bg-disabled, #e9e9e9)' : 'var(--bg-hover)'};
  }
  
  &.selected {
    background-color: ${props => props.disabled ? 'var(--bg-disabled-selected, #c0c0c0)' : 'var(--primary-color)'};
    color: white;
  }
`;

const SongInfo = styled.div<{ disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

const SongTitle = styled.div`
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

const SongArtist = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const SongActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover, &:focus {
    background-color: rgba(0, 0, 0, 0.1);
  }
  
  &:focus {
    outline: 2px solid var(--focus-color);
    outline-offset: 2px;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover, &:focus {
      background-color: transparent;
    }
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 1rem;
  text-align: center;
  color: var(--text-secondary);
`;

const LoadingState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 1rem;
  text-align: center;
  color: var(--text-secondary);
`;

const ErrorState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 1rem;
  text-align: center;
  color: var(--error-color, red);
`;

const RetryButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover, &:focus {
    background-color: var(--primary-color-dark, #0056b3);
  }
  
  &:focus {
    outline: 2px solid var(--focus-color);
    outline-offset: 2px;
  }
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid var(--primary-color);
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

interface SongLibraryProps {
  onSongLoad: (songId: string) => void;
  onClose?: () => void;
}

const SongLibrary: React.FC<SongLibraryProps> = ({ onSongLoad, onClose }) => {
  const { songs, refreshSongList, isLoading, error } = useSong();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSongId, setSelectedSongId] = useState<string | null>(null);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [timeoutError, setTimeoutError] = useState<string | null>(null);
  const [loadStartTime, setLoadStartTime] = useState<number | null>(null);
  const [hasInitialized, setHasInitialized] = useState(false);
  
  // Refresh song list when component mounts - but only once
  useEffect(() => {
    if (!hasInitialized) {
      refreshSongList();
      setLoadStartTime(Date.now());
      setHasInitialized(true);
    }
  }, [refreshSongList, hasInitialized]);
  
  // Check for timeout
  useEffect(() => {
    if (!isLoading || !loadStartTime) return;
    
    const timeoutId = setTimeout(() => {
      if (isLoading && Date.now() - loadStartTime > 5000) {
        setTimeoutError('Loading is taking longer than expected. The database might be unavailable.');
      }
    }, 5000);
    
    return () => clearTimeout(timeoutId);
  }, [isLoading, loadStartTime]);
  
  // Reset timeout error when loading completes
  useEffect(() => {
    if (!isLoading && timeoutError) {
      setTimeoutError(null);
    }
  }, [isLoading, timeoutError]);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const handleSongSelect = (songId: string) => {
    if (isLoading) return;
    
    setSelectedSongId(songId);
    
    const song = songs.available.find(s => s.id === songId);
    if (song) {
      announceToScreenReader(`Selected song: ${song.title} by ${song.artist}`);
    }
  };
  
  const handleLoadSong = async (songId: string) => {
    if (isLoading) return;
    
    try {
      setLoadingId(songId);
      await onSongLoad(songId);
      if (onClose) onClose();
    } catch (error) {
      console.error(`Error loading song ${songId}:`, error);
      announceToScreenReader(`Error loading song. ${error.message}`);
    } finally {
      setLoadingId(null);
    }
  };
  
  const handleRetry = useCallback(() => {
    refreshSongList();
    setLoadStartTime(Date.now());
    setTimeoutError(null);
  }, [refreshSongList]);
  
  // Filter songs based on search term
  const filteredSongs = songs.available.filter(song => 
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Render loading state
  if (isLoading && !timeoutError && filteredSongs.length === 0) {
    return (
      <LibraryContainer>
        <SearchBar>
          <SearchInput 
            placeholder="Search songs..." 
            value={searchTerm}
            onChange={handleSearchChange}
            disabled={true}
            aria-label="Search songs"
          />
        </SearchBar>
        <LoadingState>
          <Spinner />
          <div>Loading songs...</div>
        </LoadingState>
      </LibraryContainer>
    );
  }
  
  // Render error state
  if ((error || timeoutError) && filteredSongs.length === 0) {
    return (
      <LibraryContainer>
        <SearchBar>
          <SearchInput 
            placeholder="Search songs..." 
            value={searchTerm}
            onChange={handleSearchChange}
            disabled={true}
            aria-label="Search songs"
          />
        </SearchBar>
        <ErrorState>
          <div>{error || timeoutError}</div>
          <RetryButton onClick={handleRetry}>
            Retry
          </RetryButton>
        </ErrorState>
      </LibraryContainer>
    );
  }
  
  // Render empty state
  if (filteredSongs.length === 0) {
    return (
      <LibraryContainer>
        <SearchBar>
          <SearchInput 
            placeholder="Search songs..." 
            value={searchTerm}
            onChange={handleSearchChange}
            aria-label="Search songs"
          />
        </SearchBar>
        <EmptyState>
          <div>No songs found</div>
          {searchTerm ? (
            <div>Try a different search term</div>
          ) : (
            <div>Add some songs to get started</div>
          )}
        </EmptyState>
      </LibraryContainer>
    );
  }
  
  // Render song list
  return (
    <LibraryContainer>
      <SearchBar>
        <SearchInput 
          placeholder="Search songs..." 
          value={searchTerm}
          onChange={handleSearchChange}
          disabled={isLoading}
          aria-label="Search songs"
        />
      </SearchBar>
      <SongListScroll>
        {filteredSongs.map(song => (
          <SongItem 
            key={song.id}
            className={selectedSongId === song.id ? 'selected' : ''}
            onClick={() => handleSongSelect(song.id)}
            disabled={isLoading}
          >
            <SongInfo disabled={isLoading}>
              <SongTitle>{song.title}</SongTitle>
              <SongArtist>{song.artist}</SongArtist>
            </SongInfo>
            <SongActions>
              <ActionButton
                onClick={(e) => {
                  e.stopPropagation();
                  handleLoadSong(song.id);
                }}
                disabled={isLoading || loadingId === song.id}
                aria-label={`Load ${song.title}`}
                title={`Load ${song.title}`}
              >
                {loadingId === song.id ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                )}
              </ActionButton>
            </SongActions>
          </SongItem>
        ))}
        {isLoading && (
          <LoadingState>
            <Spinner />
            <div>Loading more songs...</div>
          </LoadingState>
        )}
        {timeoutError && (
          <ErrorState>
            <div>{timeoutError}</div>
            <RetryButton onClick={handleRetry}>
              Retry
            </RetryButton>
          </ErrorState>
        )}
      </SongListScroll>
    </LibraryContainer>
  );
};

export default SongLibrary; 