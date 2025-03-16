import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSong } from '../../contexts/SongContext';
import type { Song } from '../../types/firebase';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: var(--text-primary);
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: var(--bg-secondary);
  color: var(--text-primary);
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  min-height: 200px;
  font-family: monospace;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const Button = styled.button<{ $variant?: 'primary' | 'danger' }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${props => props.$variant === 'primary' ? 'var(--primary)' : 
    props.$variant === 'danger' ? 'var(--error)' : 'var(--bg-secondary)'};
  color: ${props => props.$variant ? 'white' : 'var(--text-primary)'};

  &:hover {
    opacity: 0.9;
  }
`;

interface SongEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  songId?: string | null;
  isNewSong?: boolean;
}

export default function SongEditorModal({ 
  isOpen, 
  onClose,
  songId,
  isNewSong = false
}: SongEditorModalProps) {
  const { songs, createNewSong, updateSong } = useSong();
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [key, setKey] = useState('');
  const [tempo, setTempo] = useState('');
  const [timeSignature, setTimeSignature] = useState('');
  const [rawLyrics, setRawLyrics] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && songId && !isNewSong) {
      const song = songs.find(s => s.id === songId);
      if (song) {
        setTitle(song.title);
        setArtist(song.artist);
        setKey(song.key || '');
        setTempo(song.tempo?.toString() || '');
        setTimeSignature(song.timeSignature || '');
        // Convert lyrics array back to text format
        const lyricsText = song.lyrics
          .sort((a, b) => a.position - b.position)
          .map(line => {
            if (line.chords) {
              return `[${line.chords}] ${line.line}`;
            }
            return line.line;
          })
          .join('\n');
        setRawLyrics(lyricsText);
      }
    } else {
      setTitle('');
      setArtist('');
      setKey('');
      setTempo('');
      setTimeSignature('');
      setRawLyrics('');
    }
  }, [isOpen, songId, isNewSong, songs]);

  const parseLyrics = (text: string) => {
    return text.split('\n').map((line, index) => {
      const chordMatch = line.match(/^\[(.*?)\]/);
      if (chordMatch) {
        return {
          line: line.replace(/^\[(.*?)\]\s*/, '').trim(),
          chords: chordMatch[1].trim(),
          position: index
        };
      }
      return {
        line: line.trim(),
        chords: '',
        position: index
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      if (isNewSong) {
        await createNewSong({
          title,
          artist,
          key: key || undefined,
          tempo: tempo ? parseInt(tempo, 10) : undefined,
          timeSignature: timeSignature || undefined,
          lyrics: parseLyrics(rawLyrics)
        });
      } else if (songId) {
        await updateSong(songId, {
          title,
          artist,
          key: key || undefined,
          tempo: tempo ? parseInt(tempo, 10) : undefined,
          timeSignature: timeSignature || undefined,
          lyrics: parseLyrics(rawLyrics)
        });
      }
      onClose();
    } catch (err) {
      console.error('Error saving song:', err);
      setError(err instanceof Error ? err.message : 'Failed to save song');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Enter song title"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="artist">Artist</Label>
            <Input
              id="artist"
              value={artist}
              onChange={e => setArtist(e.target.value)}
              placeholder="Enter artist name"
              required
            />
          </FormGroup>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            <FormGroup>
              <Label htmlFor="key">Key</Label>
              <Input
                id="key"
                value={key}
                onChange={e => setKey(e.target.value)}
                placeholder="e.g., C"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="tempo">Tempo (BPM)</Label>
              <Input
                id="tempo"
                type="number"
                value={tempo}
                onChange={e => setTempo(e.target.value)}
                placeholder="e.g., 120"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="timeSignature">Time Signature</Label>
              <Input
                id="timeSignature"
                value={timeSignature}
                onChange={e => setTimeSignature(e.target.value)}
                placeholder="e.g., 4/4"
              />
            </FormGroup>
          </div>

          <FormGroup>
            <Label htmlFor="lyrics">Lyrics & Chords</Label>
            <TextArea
              id="lyrics"
              value={rawLyrics}
              onChange={e => setRawLyrics(e.target.value)}
              placeholder="Enter lyrics with chords in brackets before words, e.g:
[Am] Here comes the sun
[C] Little darling
[G] It's been a long cold lonely winter"
              required
            />
          </FormGroup>

          {error && (
            <div style={{ color: 'var(--error)', marginTop: '1rem' }}>
              {error}
            </div>
          )}

          <ButtonGroup>
            <Button type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" $variant="primary" disabled={isLoading}>
              {isLoading ? 'Saving...' : isNewSong ? 'Create Song' : 'Update Song'}
            </Button>
          </ButtonGroup>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
} 