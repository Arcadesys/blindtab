import React from 'react';
import styled from 'styled-components';
import { useSong } from '../../contexts/SongContext';
import { useAuth } from '../../contexts/AuthContext';
import { Song } from '../../types/firebase';

const ModalContent = styled.div`
  padding: 1rem;
  max-height: 70vh;
  overflow-y: auto;
`;

const SongList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SongItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: var(--bg-secondary);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateX(4px);
    background: var(--bg-hover);
  }
`;

const SongInfo = styled.div`
  flex: 1;
`;

const SongTitle = styled.h4`
  margin: 0;
  font-size: 1rem;
`;

const SongArtist = styled.p`
  margin: 0.25rem 0 0;
  font-size: 0.85rem;
  color: var(--text-secondary);
`;

const CollectionBadge = styled.span`
  padding: 0.25rem 0.5rem;
  background: var(--primary);
  color: white;
  border-radius: 12px;
  font-size: 0.75rem;
`;

interface SongListModalProps {
  onClose: () => void;
}

export default function SongListModal({ onClose }: SongListModalProps) {
  const { songs, userSongs, playSong } = useSong();
  const { user } = useAuth();
  
  const userSongIds = new Set(userSongs.map(song => song.id));

  const handleSongSelect = async (song: Song) => {
    await playSong(song.id);
    onClose();
  };

  return (
    <ModalContent>
      <SongList>
        {songs.filter(song => song?.title && song?.artist).map(song => (
          <SongItem key={song.id} onClick={() => handleSongSelect(song)}>
            <SongInfo>
              <SongTitle>{song.title}</SongTitle>
              <SongArtist>{song.artist}</SongArtist>
            </SongInfo>
            {user && userSongIds.has(song.id) && (
              <CollectionBadge>In Collection</CollectionBadge>
            )}
          </SongItem>
        ))}
      </SongList>
    </ModalContent>
  );
} 