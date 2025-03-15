import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Song, SongData } from '../../types/song';
import { useSong } from '../../contexts/SongContext';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  min-height: 200px;
  font-family: monospace;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${props => props.variant === 'primary' ? '#007AFF' : '#f0f0f0'};
  color: ${props => props.variant === 'primary' ? 'white' : 'black'};
  
  &:hover {
    opacity: 0.9;
  }
`;

interface SongEditModalProps {
  song?: Song | null;
  onClose: () => void;
}

const SongEditModal: React.FC<SongEditModalProps> = ({ song, onClose }) => {
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
      // If editing existing song, populate form
      setFormData({
        title: song.title || '',
        artist: song.artist || '',
        key: song.key || '',
        lyrics: song.lyrics?.map(l => `[${l.chord || ''}] ${l.line}`).join('\n') || '',
        tags: song.tags?.join(', ') || ''
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
      lyrics: formData.lyrics.split('\\n').map(line => {
        const match = line.match(/\[(.*?)\](.*)/);
        return {
          chord: match ? match[1] : '',
          line: match ? match[2].trim() : line.trim()
        };
      }),
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean)
    };

    try {
      if (song) {
        // Edit existing song
        await saveSongEdits(song.id, songData);
      } else {
        // Create new song
        await createNewSong(songData);
      }
      await refreshSongList();
      onClose();
    } catch (error) {
      console.error('Error saving song:', error);
      alert('Failed to save song. Check console for details.');
    }
  };

  return (
    <Modal onClick={() => onClose()}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <h2>{song ? 'Edit Song' : 'Add New Song'}</h2>
        <Form onSubmit={handleSubmit}>
          <Field>
            <Label>Title</Label>
            <Input
              type="text"
              value={formData.title}
              onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
              required
            />
          </Field>
          
          <Field>
            <Label>Artist</Label>
            <Input
              type="text"
              value={formData.artist}
              onChange={e => setFormData(prev => ({ ...prev, artist: e.target.value }))}
              required
            />
          </Field>
          
          <Field>
            <Label>Key</Label>
            <Input
              type="text"
              value={formData.key}
              onChange={e => setFormData(prev => ({ ...prev, key: e.target.value }))}
            />
          </Field>
          
          <Field>
            <Label>Tags (comma-separated)</Label>
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
            <Button type="submit" variant="primary">Save</Button>
          </ButtonGroup>
        </Form>
      </ModalContent>
    </Modal>
  );
};

export default SongEditModal; 