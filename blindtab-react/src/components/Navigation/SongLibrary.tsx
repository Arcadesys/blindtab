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
  padding: 12px;
  background: ${props => props.$isSelected ? 'var(--primary-color)' : 'var(--bg-secondary)'};
  color: ${props => props.$isSelected ? 'white' : 'var(--text-primary)'};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  
  &:hover {
    border-color: var(--primary-color);
  }
`;

const SongInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const SongTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SongArtist = styled.p`
  margin: 4px 0 0 0;
  font-size: 0.9rem;
  opacity: 0.8;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Tags = styled.div`
  font-size: 0.8rem;
  opacity: 0.7;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-left: auto;
`;

const IconButton = styled.button<{ variant?: 'primary' | 'danger' }>`
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => 
    props.variant === 'primary' ? 'var(--primary-color)' : 
    props.variant === 'danger' ? 'var(--error-color)' : 
    'var(--bg-tertiary)'
  };
  color: ${props => props.variant ? 'white' : 'var(--text-primary)'};
  
  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
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

const Button = styled.button<{ $variant?: 'danger' | 'primary' }>`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${props => props.$variant === 'danger' ? '#ff4444' : props.$variant === 'primary' ? '#007AFF' : '#f0f0f0'};
  color: ${props => props.$variant === 'danger' || props.$variant === 'primary' ? 'white' : 'black'};
  
  &:hover {
    opacity: 0.9;
  }
`;

interface SongLibraryProps {
  onSongLoad: (songId: string) => void;
  onClose?: () => void;
  searchTerm?: string;
}

const SongLibrary: React.FC<SongLibraryProps> = ({ 
  onSongLoad, 
  onClose,
  searchTerm = ''
}) => {
  const { songs, refreshSongList, isLoading, error } = useSong();
  const [selectedSongId, setSelectedSongId] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingSong, setEditingSong] = useState<Song | null>(null);

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

  const handleCloseModal = () => {
    setIsEditing(false);
    setEditingSong(null);
  };

  // Filter songs based on search term from props
  const filteredSongs = songs.available.filter(song => 
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading && filteredSongs.length === 0) {
    return (
      <LibraryContainer>
        <LoadingState>
          <div>Loading songs...</div>
        </LoadingState>
      </LibraryContainer>
    );
  }

  if (error && filteredSongs.length === 0) {
    return (
      <LibraryContainer>
        <ErrorState>
          <div>{error}</div>
          <Button onClick={refreshSongList} $variant="primary">
            Retry
          </Button>
        </ErrorState>
      </LibraryContainer>
    );
  }

  return (
    <LibraryContainer>
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
              <SongInfo>
                <SongTitle>{song.title}</SongTitle>
                <SongArtist>{song.artist}</SongArtist>
                {song.tags && song.tags.length > 0 && (
                  <Tags>Tags: {song.tags.join(', ')}</Tags>
                )}
              </SongInfo>
              <ButtonGroup>
                <IconButton 
                  onClick={(e) => handleEdit(song, e)}
                  title="Edit song"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                </IconButton>
                <IconButton 
                  variant="primary" 
                  onClick={() => handleLoadSong(song)}
                  title="Load song"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </IconButton>
              </ButtonGroup>
            </SongCard>
          ))}
        </SongGrid>
      )}

      {isEditing && (
        <SongEditModal
          isOpen={isEditing}
          onClose={handleCloseModal}
          song={editingSong}
        />
      )}
    </LibraryContainer>
  );
};

export default SongLibrary; 