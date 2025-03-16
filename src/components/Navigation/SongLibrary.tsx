import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useSong } from '../../contexts/SongContext';
import { useAuth } from '../../contexts/AuthContext';
import { announceToScreenReader } from '../../hooks/useKeyboardNavigation';
import { Song } from '../../types/firebase';
import SongEditorModal from '../Modals/SongEditorModal.tsx';

const LibraryContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

const SongList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  overflow-y: auto;
`;

const SongCard = styled.div<{ $isSelected?: boolean }>`
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 12px;
  background: ${props => props.$isSelected ? 'var(--bg-hover)' : 'var(--bg-secondary)'};
  color: var(--text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: var(--primary-color);
    background: var(--bg-hover);
    transform: translateX(4px);
  }

  ${props => props.$isSelected && `
    border-color: var(--primary-color);
    border-left: 4px solid var(--primary-color);
  `}
`;

const SongInfo = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SongTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--text-primary);
`;

const SongArtist = styled.p`
  margin: 0;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--text-secondary);
`;

const Tags = styled.div`
  font-size: 0.8rem;
  color: var(--text-tertiary);
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: var(--bg-tertiary);
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  padding-left: 8px;
  border-left: 1px solid var(--border-color);
`;

const IconButton = styled.button<{ $variant?: 'primary' | 'danger' }>`
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => 
    props.$variant === 'primary' ? 'var(--primary-color)' : 
    props.$variant === 'danger' ? 'var(--error-color)' : 
    'transparent'
  };
  color: ${props => props.$variant ? 'white' : 'var(--text-secondary)'};
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => 
      props.$variant === 'primary' ? 'var(--primary-color-dark)' : 
      props.$variant === 'danger' ? 'var(--error-color-dark)' : 
      'var(--bg-hover)'
    };
    color: ${props => props.$variant ? 'white' : 'var(--text-primary)'};
    transform: scale(1.05);
  }

  svg {
    width: 20px;
    height: 20px;
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

const Tabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background: ${props => props.active ? 'var(--primary)' : 'var(--bg-secondary)'};
  color: ${props => props.active ? 'white' : 'var(--text-primary)'};
  cursor: pointer;
  transition: all 0.2s;

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
  const { songs, userSongs, addSongToCollection, removeSongFromCollection, playSong, refreshSongList, isLoading, error } = useSong();
  const { user } = useAuth();
  const [selectedSongId, setSelectedSongId] = useState<string | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [activeTab, setActiveTab] = React.useState<'all' | 'collection'>('all');

  const displaySongs = activeTab === 'all' ? songs : userSongs;
  const userSongIds = new Set(userSongs.map(song => song.id));

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
    setSelectedSongId(song.id);
    setIsEditorOpen(true);
  };

  const handleEditorClose = async () => {
    setIsEditorOpen(false);
    await refreshSongList();
    announceToScreenReader('Song updated successfully');
  };

  const handleSongAction = async (song: Song) => {
    if (!user) return;
    
    if (userSongIds.has(song.id)) {
      await removeSongFromCollection(song.id);
    } else {
      await addSongToCollection(song.id);
    }
  };

  // Filter songs based on search term from props
  const filteredSongs = displaySongs.filter(song => {
    if (!song?.title || !song?.artist) return false;
    return (
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      song.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  if (isLoading && !filteredSongs.length) {
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
      <Tabs>
        <Tab 
          active={activeTab === 'all'} 
          onClick={() => setActiveTab('all')}
        >
          All Songs
        </Tab>
        <Tab 
          active={activeTab === 'collection'} 
          onClick={() => setActiveTab('collection')}
        >
          My Collection
        </Tab>
      </Tabs>

      {filteredSongs.length === 0 ? (
        <EmptyState>
          <div>No songs found</div>
          <div>{searchTerm ? 'Try a different search term' : 'Add some songs to get started'}</div>
        </EmptyState>
      ) : (
        <>
          <SongList>
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
                    <Tags>
                      {song.tags.map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                      ))}
                    </Tags>
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
                    $variant="primary" 
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
          </SongList>

          <SongEditorModal
            isOpen={isEditorOpen}
            onClose={handleEditorClose}
            songId={selectedSongId}
            isNewSong={false}
          />
        </>
      )}
    </LibraryContainer>
  );
};

export default SongLibrary; 