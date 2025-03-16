import React, { useState } from 'react';
import styled from 'styled-components';
import { Song } from '../../types/song';
import { useSong } from '../../contexts/SongContext';
import { announceToScreenReader } from '../../hooks/useKeyboardNavigation';

const SongListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

const SearchBar = styled.div`
  padding: 0.5rem;
  border-bottom: 1px solid var(--border-color);
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  
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

const SongItem = styled.button<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.$isActive ? 'var(--primary-color)' : 'var(--bg-secondary)'};
  color: ${props => props.$isActive ? 'white' : 'var(--text-primary)'};
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover, &:focus {
    background-color: ${props => props.$isActive ? 'var(--primary-hover-color)' : 'var(--bg-hover)'};
  }
  
  &:focus {
    outline: 2px solid var(--focus-color);
    outline-offset: 2px;
  }
`;

const SongTitle = styled.div`
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

const SongArtist = styled.div`
  font-size: 0.9rem;
  color: inherit;
  opacity: 0.8;
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

interface SongListProps {
  onSongSelect: (songId: string) => void;
  selectedSongId?: string | null;
  onClose?: () => void;
}

const SongList: React.FC<SongListProps> = ({ 
  onSongSelect, 
  selectedSongId,
  onClose 
}) => {
  const { songs } = useSong();
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const handleSongClick = (songId: string) => {
    onSongSelect(songId);
    
    const song = songs.available.find(s => s.id === songId);
    if (song) {
      announceToScreenReader(`Selected song: ${song.title} by ${song.artist}`);
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
  
  return (
    <SongListContainer>
      <SearchBar>
        <SearchInput 
          type="text"
          placeholder="Search songs..."
          value={searchTerm}
          onChange={handleSearchChange}
          aria-label="Search songs"
        />
      </SearchBar>
      
      <SongListScroll>
        {filteredSongs.length > 0 ? (
          filteredSongs.map(song => (
            <SongItem 
              key={song.id}
              $isActive={selectedSongId === song.id || songs.current === song.id}
              onClick={() => handleSongClick(song.id)}
              aria-label={`${song.title} by ${song.artist}`}
            >
              <SongTitle>{song.title}</SongTitle>
              <SongArtist>{song.artist}</SongArtist>
            </SongItem>
          ))
        ) : (
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
        )}
      </SongListScroll>
    </SongListContainer>
  );
};

export default SongList; 