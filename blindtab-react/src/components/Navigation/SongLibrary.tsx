import React, { useState, useEffect } from 'react';
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
  
  // Refresh song list when component mounts
  useEffect(() => {
    refreshSongList();
    setLoadStartTime(Date.now());
  }, [refreshSongList]);
  
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
  
  // Filter songs based on search term
  const filteredSongs = songs.available.filter(song => {
    const searchLower = searchTerm.toLowerCase();
    return (
      song.title.toLowerCase().includes(searchLower) ||
      song.artist.toLowerCase().includes(searchLower)
    );
  });
  
  // Determine if we should show the empty state
  const showEmptyState = !isLoading && !error && filteredSongs.length === 0;
  
  return (
    <LibraryContainer>
      <SearchBar>
        <SearchInput 
          type="text"
          placeholder="Search songs..."
          value={searchTerm}
          onChange={handleSearchChange}
          aria-label="Search songs"
          autoFocus
          disabled={isLoading}
        />
      </SearchBar>
      
      <SongListScroll>
        {timeoutError && (
          <ErrorState>
            <p>{timeoutError}</p>
            <RetryButton onClick={() => {
              setTimeoutError(null);
              setLoadStartTime(Date.now());
              refreshSongList();
            }}>
              Retry
            </RetryButton>
          </ErrorState>
        )}
        
        {showEmptyState ? (
          <EmptyState>
            {songs.available.length === 0 ? (
              <>
                <p>No songs available.</p>
                <p>Add songs to get started.</p>
              </>
            ) : (
              <p>No songs match your search.</p>
            )}
          </EmptyState>
        ) : (
          // Always render the song list, even if it's empty
          <>
            {filteredSongs.map(song => (
              <SongItem 
                key={song.id}
                className={selectedSongId === song.id ? 'selected' : ''}
                disabled={isLoading}
              >
                <SongInfo 
                  onClick={() => handleSongSelect(song.id)}
                  disabled={isLoading}
                >
                  <SongTitle>{song.title}</SongTitle>
                  <SongArtist>{song.artist}</SongArtist>
                </SongInfo>
                <SongActions>
                  <ActionButton 
                    onClick={() => handleLoadSong(song.id)}
                    aria-label={`Load ${song.title}`}
                    title={`Load ${song.title}`}
                    disabled={loadingId === song.id || isLoading}
                  >
                    {loadingId === song.id ? (
                      <Spinner style={{ width: '16px', height: '16px', margin: 0 }} />
                    ) : (
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path 
                          fill="currentColor" 
                          d="M8 5v14l11-7z"
                        />
                      </svg>
                    )}
                  </ActionButton>
                </SongActions>
              </SongItem>
            ))}
            
            {/* If we're loading but have cached songs, show them greyed out */}
            {isLoading && filteredSongs.length === 0 && songs.available.length > 0 && (
              songs.available.map(song => (
                <SongItem 
                  key={song.id}
                  disabled={true}
                >
                  <SongInfo disabled={true}>
                    <SongTitle>{song.title}</SongTitle>
                    <SongArtist>{song.artist}</SongArtist>
                  </SongInfo>
                  <SongActions>
                    <ActionButton 
                      disabled={true}
                      aria-label={`Load ${song.title}`}
                      title={`Load ${song.title}`}
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path 
                          fill="currentColor" 
                          d="M8 5v14l11-7z"
                        />
                      </svg>
                    </ActionButton>
                  </SongActions>
                </SongItem>
              ))
            )}
          </>
        )}
      </SongListScroll>
    </LibraryContainer>
  );
};

export default SongLibrary; 