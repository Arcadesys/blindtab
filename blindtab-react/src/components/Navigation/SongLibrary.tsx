import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useSong } from '../../contexts/SongContext';
import { announceToScreenReader } from '../../hooks/useKeyboardNavigation';
import { Song } from '../../types/song';
import AddSongModal from '../Modals/AddSongModal';

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

// Enhanced styling for the song list to make it more like a picklist
const SongPicklist = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  max-height: 300px;
  overflow-y: auto;
  background-color: var(--bg-primary);
  margin-top: 0.5rem;
`;

const PicklistItem = styled.div<{ $isSelected: boolean; disabled?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--border-color);
  background-color: ${props => props.$isSelected ? 'var(--primary-color)' : props.disabled ? 'var(--bg-disabled, #e9e9e9)' : 'transparent'};
  color: ${props => props.$isSelected ? 'white' : 'var(--text-primary)'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.7 : 1};
  transition: background-color 0.2s;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: ${props => props.disabled ? 'var(--bg-disabled, #e9e9e9)' : props.$isSelected ? 'var(--primary-hover-color)' : 'var(--bg-hover)'};
  }
`;

const PicklistInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const PicklistTitle = styled.div`
  font-weight: bold;
`;

const PicklistArtist = styled.div`
  font-size: 0.85rem;
  opacity: 0.8;
`;

const PicklistActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const EditButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0.5rem;
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
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const LoadButton = styled.button<{ $isLoading?: boolean }>`
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover, &:focus {
    background-color: var(--primary-hover-color);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const CategoryHeader = styled.div`
  font-weight: bold;
  padding: 0.5rem;
  background-color: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  margin-top: 1rem;
  border-radius: 4px 4px 0 0;
`;

const RefreshButton = styled.button`
  padding: 0.5rem;
  background: none;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 0.5rem;
  
  &:hover, &:focus {
    background-color: var(--bg-hover);
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const SearchHeader = styled.div`
  display: flex;
  align-items: center;
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
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingSongId, setEditingSongId] = useState<string | null>(null);
  const [isCreatingNewSong, setIsCreatingNewSong] = useState(false);
  
  // Memoize the refreshSongList function to prevent infinite loops
  const handleRefreshSongList = useCallback(() => {
    refreshSongList();
    setLoadStartTime(Date.now());
    setTimeoutError(null);
    announceToScreenReader('Refreshing song list');
  }, [refreshSongList]);
  
  // Refresh song list when component mounts - but only once
  useEffect(() => {
    if (!hasInitialized) {
      handleRefreshSongList();
      setHasInitialized(true);
    }
  }, [handleRefreshSongList, hasInitialized]);
  
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
    handleRefreshSongList();
  }, [handleRefreshSongList]);
  
  // Filter songs based on search term
  const filteredSongs = songs.available.filter(song => 
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Group songs by artist for better organization
  const songsByArtist = filteredSongs.reduce((acc, song) => {
    if (!acc[song.artist]) {
      acc[song.artist] = [];
    }
    acc[song.artist].push(song);
    return acc;
  }, {} as Record<string, Song[]>);
  
  // Sort artists alphabetically
  const sortedArtists = Object.keys(songsByArtist).sort();
  
  const handleEditSong = (songId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLoading) return;
    
    setEditingSongId(songId);
    setIsCreatingNewSong(false);
    setEditModalOpen(true);
  };
  
  const handleCreateNewSong = () => {
    setEditingSongId(null);
    setIsCreatingNewSong(true);
    setEditModalOpen(true);
  };
  
  const handleSongSaved = async (songId: string) => {
    await refreshSongList();
    setSelectedSongId(songId);
    announceToScreenReader(`Song ${isCreatingNewSong ? 'created' : 'updated'} successfully`);
  };
  
  // Render loading state
  if (isLoading && !timeoutError && filteredSongs.length === 0) {
    return (
      <LibraryContainer>
        <SearchHeader>
          <SearchInput 
            placeholder="Search songs..." 
            value={searchTerm}
            onChange={handleSearchChange}
            disabled={true}
            aria-label="Search songs"
          />
        </SearchHeader>
        <LoadingState>
          <Spinner />
          <div>Loading songs from database...</div>
        </LoadingState>
      </LibraryContainer>
    );
  }
  
  // Render error state
  if ((error || timeoutError) && filteredSongs.length === 0) {
    return (
      <LibraryContainer>
        <SearchHeader>
          <SearchInput 
            placeholder="Search songs..." 
            value={searchTerm}
            onChange={handleSearchChange}
            disabled={true}
            aria-label="Search songs"
          />
        </SearchHeader>
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
        <SearchHeader>
          <SearchInput 
            placeholder="Search songs..." 
            value={searchTerm}
            onChange={handleSearchChange}
            aria-label="Search songs"
          />
          <RefreshButton 
            onClick={handleRefreshSongList}
            aria-label="Refresh song list"
            title="Refresh song list"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 4v6h-6"></path>
              <path d="M1 20v-6h6"></path>
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10"></path>
              <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14"></path>
            </svg>
          </RefreshButton>
        </SearchHeader>
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
  
  // Render song picklist
  return (
    <LibraryContainer>
      <SearchHeader>
        <SearchInput 
          placeholder="Search songs..." 
          value={searchTerm}
          onChange={handleSearchChange}
          disabled={isLoading}
          aria-label="Search songs"
        />
        <RefreshButton 
          onClick={handleRefreshSongList}
          aria-label="Refresh song list"
          title="Refresh song list"
          disabled={isLoading}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 4v6h-6"></path>
            <path d="M1 20v-6h6"></path>
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10"></path>
            <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14"></path>
          </svg>
        </RefreshButton>
      </SearchHeader>
      
      <SongListScroll>
        {searchTerm ? (
          // When searching, show a flat list
          <SongPicklist>
            {filteredSongs.map(song => (
              <PicklistItem 
                key={song.id}
                $isSelected={selectedSongId === song.id}
                onClick={() => handleSongSelect(song.id)}
                disabled={isLoading}
              >
                <PicklistInfo>
                  <PicklistTitle>{song.title}</PicklistTitle>
                  <PicklistArtist>{song.artist}</PicklistArtist>
                </PicklistInfo>
                <PicklistActions>
                  <EditButton
                    onClick={(e) => handleEditSong(song.id, e)}
                    disabled={isLoading}
                    aria-label={`Edit ${song.title}`}
                    title={`Edit ${song.title}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </EditButton>
                  <LoadButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLoadSong(song.id);
                    }}
                    disabled={isLoading || loadingId === song.id}
                    aria-label={`Load ${song.title}`}
                    title={`Load ${song.title}`}
                    $isLoading={loadingId === song.id}
                  >
                    {loadingId === song.id ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                        Loading...
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                        Load
                      </>
                    )}
                  </LoadButton>
                </PicklistActions>
              </PicklistItem>
            ))}
          </SongPicklist>
        ) : (
          // When not searching, group by artist
          sortedArtists.map(artist => (
            <div key={artist}>
              <CategoryHeader>{artist}</CategoryHeader>
              <SongPicklist>
                {songsByArtist[artist].map(song => (
                  <PicklistItem 
                    key={song.id}
                    $isSelected={selectedSongId === song.id}
                    onClick={() => handleSongSelect(song.id)}
                    disabled={isLoading}
                  >
                    <PicklistInfo>
                      <PicklistTitle>{song.title}</PicklistTitle>
                    </PicklistInfo>
                    <PicklistActions>
                      <EditButton
                        onClick={(e) => handleEditSong(song.id, e)}
                        disabled={isLoading}
                        aria-label={`Edit ${song.title}`}
                        title={`Edit ${song.title}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                      </EditButton>
                      <LoadButton
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLoadSong(song.id);
                        }}
                        disabled={isLoading || loadingId === song.id}
                        aria-label={`Load ${song.title}`}
                        title={`Load ${song.title}`}
                        $isLoading={loadingId === song.id}
                      >
                        {loadingId === song.id ? (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10" />
                              <path d="M12 6v6l4 2" />
                            </svg>
                            Loading...
                          </>
                        ) : (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                            Load
                          </>
                        )}
                      </LoadButton>
                    </PicklistActions>
                  </PicklistItem>
                ))}
              </SongPicklist>
            </div>
          ))
        )}
        
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
      
      <AddNewButton
        onClick={handleCreateNewSong}
        aria-label="Create new song"
        title="Create new song"
        disabled={isLoading}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </AddNewButton>
      
      <AddSongModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        songId={editingSongId || undefined}
        isEditMode={!isCreatingNewSong}
        onSongSaved={handleSongSaved}
      />
    </LibraryContainer>
  );
};

export default SongLibrary; 