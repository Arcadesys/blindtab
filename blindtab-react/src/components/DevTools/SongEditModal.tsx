import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Song, SongData } from '../../types/song';
import { useSong } from '../../contexts/SongContext';
import { Timestamp } from 'firebase/firestore';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
`;

const ModalContent = styled.div`
  background: var(--bg-primary);
  padding: 24px;
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.24);
  border: 1px solid var(--border-color);
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: var(--bg-secondary);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--border-color);
    border-radius: 4px;
    
    &:hover {
      background: var(--primary-color);
    }
  }
`;

const Title = styled.h2`
  margin: 0 0 24px 0;
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: 500;
  color: var(--text-primary);
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 1rem;
  background: var(--bg-secondary);
  color: var(--text-primary);
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px var(--primary-color-alpha);
  }
  
  &::placeholder {
    color: var(--text-secondary);
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 1rem;
  background: var(--bg-secondary);
  color: var(--text-primary);
  min-height: 200px;
  font-family: 'Fira Code', monospace;
  line-height: 1.5;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px var(--primary-color-alpha);
  }
  
  &::placeholder {
    color: var(--text-secondary);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 8px;
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s ease;
  
  background: ${props => 
    props.variant === 'primary' 
      ? 'var(--primary-color)' 
      : 'var(--bg-secondary)'};
  
  color: ${props => 
    props.variant === 'primary' 
      ? 'white' 
      : 'var(--text-primary)'};
  
  border: 1px solid ${props => 
    props.variant === 'primary'
      ? 'var(--primary-color)'
      : 'var(--border-color)'};
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px ${props =>
      props.variant === 'primary'
        ? 'var(--primary-color-alpha)'
        : 'rgba(0, 0, 0, 0.1)'};
  }
  
  &:active {
    transform: translateY(0);
  }
`;

interface SongEditModalProps {
  song?: Song | null;
  onClose: () => void;
  isOpen: boolean;
}

const SongEditModal: React.FC<SongEditModalProps> = ({ song, onClose, isOpen }) => {
  const { createNewSong, saveSongEdits, refreshSongList } = useSong();
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    key: '',
    lyrics: '',
    tags: ''
  });

  useEffect(() => {
    if (song) {
      // Load song data into form
      const lyrics = song.lyrics?.map(l => {
        // Only add chord if it exists
        const chordPart = l.chord ? `[${l.chord}] ` : '';
        return `${chordPart}${l.line}`;
      }).join('\n') || '';

      setFormData({
        title: song.songInfo?.title || song.title || '',
        artist: song.songInfo?.artist || song.artist || '',
        key: song.songInfo?.key || '',
        lyrics: lyrics,
        tags: song.tags?.join(', ') || ''
      });
    } else {
      // Reset form for new song
      setFormData({
        title: '',
        artist: '',
        key: '',
        lyrics: '[C]Add your lyrics here\n[G]Each line can have chords in brackets',
        tags: ''
      });
    }
  }, [song]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const songData: SongData = {
      songInfo: {
        title: formData.title,
        artist: formData.artist,
        key: formData.key,
      },
      lyrics: formData.lyrics.split('\n').map((line, index) => {
        const match = line.match(/^\[([^\]]+)\]\s*(.*)$/);
        return {
          chord: match ? match[1] : '',
          line: match ? match[2] : line.trim(),
          position: index
        };
      }).filter(l => l.line || l.chord), // Remove empty lines
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
      createdAt: song?.createdAt || Timestamp.now(),
      updatedAt: Timestamp.now()
    };

    try {
      if (song) {
        await saveSongEdits(song.id, songData);
      } else {
        await createNewSong(songData);
      }
      await refreshSongList();
      onClose();
    } catch (error) {
      console.error('Error saving song:', error);
      alert('Failed to save song. Check console for details.');
    }
  };

  if (!isOpen) return null;

  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <Title>{song ? 'Edit Song' : 'Add New Song'}</Title>
        <Form onSubmit={handleSubmit}>
          <Field>
            <Label>Title</Label>
            <Input
              type="text"
              value={formData.title}
              onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
              required
              placeholder="Enter song title"
            />
          </Field>
          
          <Field>
            <Label>Artist</Label>
            <Input
              type="text"
              value={formData.artist}
              onChange={e => setFormData(prev => ({ ...prev, artist: e.target.value }))}
              required
              placeholder="Enter artist name"
            />
          </Field>
          
          <Field>
            <Label>Key</Label>
            <Input
              type="text"
              value={formData.key}
              onChange={e => setFormData(prev => ({ ...prev, key: e.target.value }))}
              placeholder="e.g., C, Am, G"
            />
          </Field>
          
          <Field>
            <Label>Tags</Label>
            <Input
              type="text"
              value={formData.tags}
              onChange={e => setFormData(prev => ({ ...prev, tags: e.target.value }))}
              placeholder="rock, 90s, alternative"
            />
          </Field>
          
          <Field>
            <Label>Lyrics (with chords in brackets)</Label>
            <TextArea
              value={formData.lyrics}
              onChange={e => setFormData(prev => ({ ...prev, lyrics: e.target.value }))}
              placeholder="[G]Here come old flat top\n[C]He come grooving up slowly"
              required
            />
          </Field>

          <ButtonGroup>
            <Button type="button" onClick={onClose}>Cancel</Button>
            <Button type="submit" variant="primary">Save Changes</Button>
          </ButtonGroup>
        </Form>
      </ModalContent>
    </Modal>
  );
};

export default SongEditModal; 