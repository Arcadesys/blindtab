import React, { useState } from 'react';
import { useSong } from '../../contexts/SongContext';
import { Song } from '../../types/song';
import styled from 'styled-components';
import SongEditorModal from '../Modals/SongEditorModal.tsx';

const Container = styled.div`
  padding: 20px;
`;

const SongGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const SongCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const SongTitle = styled.h3`
  margin: 0 0 8px 0;
  color: #333;
`;

const SongArtist = styled.p`
  margin: 0 0 16px 0;
  color: #666;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;

const Button = styled.button<{ variant?: 'danger' | 'primary' }>`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${props => props.variant === 'danger' ? '#ff4444' : props.variant === 'primary' ? '#007AFF' : '#f0f0f0'};
  color: ${props => props.variant === 'danger' || props.variant === 'primary' ? 'white' : 'black'};
  
  &:hover {
    opacity: 0.9;
  }
`;

const AddButton = styled(Button)`
  margin-bottom: 20px;
`;

const SongManager: React.FC = () => {
  const { songs, refreshSongList, deleteSongById } = useSong();
  const [selectedSongId, setSelectedSongId] = useState<string | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const handleDelete = async (songId: string) => {
    if (window.confirm('Are you sure you want to delete this song?')) {
      await deleteSongById(songId);
      await refreshSongList();
    }
  };

  const handleEdit = (song: Song) => {
    setSelectedSongId(song.id);
    setIsEditorOpen(true);
  };

  const handleAdd = () => {
    setSelectedSongId(null);
    setIsEditorOpen(true);
  };

  return (
    <Container>
      <h2>Song Manager</h2>
      <AddButton variant="primary" onClick={handleAdd}>
        + Add New Song
      </AddButton>

      <SongGrid>
        {songs.available.map(song => (
          <SongCard key={song.id}>
            <SongTitle>{song.title}</SongTitle>
            <SongArtist>{song.artist}</SongArtist>
            <div>
              <strong>ID:</strong> {song.id}
            </div>
            {song.tags && (
              <div>
                <strong>Tags:</strong> {song.tags.join(', ')}
              </div>
            )}
            <ButtonGroup>
              <Button onClick={() => handleEdit(song)}>
                ✏️ Edit
              </Button>
              <Button variant="danger" onClick={() => handleDelete(song.id)}>
                🗑️ Delete
              </Button>
            </ButtonGroup>
          </SongCard>
        ))}
      </SongGrid>

      <SongEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        songId={selectedSongId}
        isNewSong={!selectedSongId}
      />
    </Container>
  );
};

export default SongManager; 