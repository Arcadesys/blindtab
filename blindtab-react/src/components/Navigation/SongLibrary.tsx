import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useSong } from '../../contexts/SongContext';
import { announceToScreenReader } from '../../hooks/useKeyboardNavigation';
import { Song } from '../../types/song';
import SongEditModal from '../DevTools/SongEditModal';

const LibraryContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

const SearchHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  gap: 8px;
`;

const SearchInput = styled.input<{ disabled?: boolean }>`
  flex: 1;
  padding: 8px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: ${props => props.disabled ? 'var(--bg-disabled)' : 'var(--bg-primary)'};
  color: var(--text-primary);
  
  &:focus {
    outline: 2px solid var(--focus-color);
    outline-offset: 2px;
  }
`;

const Button = styled.button<{ variant?: 'primary' | 'danger' }>`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${props => 
    props.variant === 'primary' ? 'var(--primary-color)' : 
    props.variant === 'danger' ? 'var(--error-color)' : 
    'var(--bg-secondary)'
  };
  color: ${props => props.variant ? 'white' : 'var(--text-primary)'};
  
  &:hover {
    opacity: 0.9;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const SongGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  padding: 16px;
  overflow-y: auto;
`;

const SongCard = styled.div<{ $isSelected?: boolean }>`
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 16px;
  background: ${props => props.$isSelected ? 'var(--primary-color)' : 'var(--bg-secondary)'};
  color: ${props => props.$isSelected ? 'white' : 'var(--text-primary)'};
  cursor: pointer;
  
  &:hover {
    border-color: var(--primary-color);
  }
`;

const SongTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 1.1rem;
`;

const SongArtist = styled.p`
  margin: 0 0 16px 0;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;

const LoadingState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  text-align: center;
`;

const ErrorState = styled(LoadingState)`
  color: var(--error-color);
`;

const EmptyState = styled(LoadingState)`
  color: var(--text-secondary);
`;

interface SongLibraryProps {
  onSongLoad: (songId: string) => void;
  onClose?: () => void;
}

const SongLibrary: React.FC<SongLibraryProps> = ({ onSongLoad, onClose }) => {
  const { songs, refreshSongList, isLoading, error } = useSong();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSongId, setSelectedSongId] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingSong, setEditingSong] = useState<Song | null>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleRefreshList = useCallback(async () => {
    await refreshSongList();
  }, [refreshSongList]);

  const handleSongSelect = (song: Song) => {
    setSelectedSongId(song.id);
    announceToScreenReader(`Selected song: ${song.title} by ${song.artist}`);
  };

  const handleLoadSong = async (song: Song) => {
    await onSongLoad(song.id);
    if (onClose) onClose();
  };

  const handleEdit = (song: Song, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingSong(song);
    setIsEditing(true);
  };

  const handleAdd = () => {
    setEditingSong(null);
    setIsEditing(true);
  };

  const handleCloseModal = () => {
    setIsEditing(false);
    setEditingSong(null);
  };

  // Filter songs based on search term
  const filteredSongs = songs.available.filter(song => 
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading && filteredSongs.length === 0) {
    return (
      <LibraryContainer>
        <SearchHeader>
          <SearchInput 
            placeholder="Search songs..." 
            value={searchTerm}
            onChange={handleSearchChange}
            disabled={true}
          />
        </SearchHeader>
        <LoadingState>
          <div>Loading songs...</div>
        </LoadingState>
      </LibraryContainer>
    );
  }

  if (error && filteredSongs.length === 0) {
    return (
      <LibraryContainer>
        <SearchHeader>
          <SearchInput 
            placeholder="Search songs..." 
            value={searchTerm}
            onChange={handleSearchChange}
            disabled={true}
          />
        </SearchHeader>
        <ErrorState>
          <div>{error}</div>
          <Button onClick={handleRefreshList}>
            Retry
          </Button>
        </ErrorState>
      </LibraryContainer>
    );
  }

  return (
    <LibraryContainer>
      <SearchHeader>
        <SearchInput 
          placeholder="Search songs..." 
          value={searchTerm}
          onChange={handleSearchChange}
          disabled={isLoading}
        />
        <Button variant="primary" onClick={handleAdd}>
          Add Song
        </Button>
        <Button onClick={handleRefreshList} disabled={isLoading}>
          Refresh
        </Button>
      </SearchHeader>

      {filteredSongs.length === 0 ? (
        <EmptyState>
          <div>No songs found</div>
          <div>{searchTerm ? 'Try a different search term' : 'Add some songs to get started'}</div>
        </EmptyState>
      ) : (
        <SongGrid>
          {filteredSongs.map(song => (
            <SongCard 
              key={song.id}
              $isSelected={selectedSongId === song.id}
              onClick={() => handleSongSelect(song)}
            >
              <SongTitle>{song.title}</SongTitle>
              <SongArtist>{song.artist}</SongArtist>
              {song.tags && song.tags.length > 0 && (
                <div>Tags: {song.tags.join(', ')}</div>
              )}
              <ButtonGroup>
                <Button onClick={(e) => handleEdit(song, e)}>
                  Edit
                </Button>
                <Button variant="primary" onClick={() => handleLoadSong(song)}>
                  Load
                </Button>
              </ButtonGroup>
            </SongCard>
          ))}
        </SongGrid>
      )}

      {isEditing && (
        <SongEditModal
          song={editingSong}
          onClose={handleCloseModal}
        />
      )}
    </LibraryContainer>
  );
};

export default SongLibrary; 