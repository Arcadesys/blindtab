import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSong } from '../../contexts/SongContext';
import { SongData } from '../../types/song';
import { songDataToMarkdown, parseMarkdown } from '../../utils/markdownParser';
import { announceToScreenReader } from '../../hooks/useKeyboardNavigation';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: var(--background-color);
  border-radius: 8px;
  box-shadow: 0 4px 12px var(--modal-shadow);
  width: 90%;
  max-width: 800px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-secondary);
  
  &:hover, &:focus {
    color: var(--text-primary);
  }
  
  &:focus {
    outline: 2px solid var(--focus-color);
    outline-offset: 2px;
  }
`;

const ModalBody = styled.div`
  flex: 1;
  padding: 1rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const EditorTextarea = styled.textarea`
  flex: 1;
  padding: 1rem;
  font-family: monospace;
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  resize: none;
  
  &:focus {
    outline: 2px solid var(--focus-color);
    outline-offset: 2px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button<{ $primary?: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  
  background-color: ${props => props.$primary ? 'var(--primary-color)' : 'var(--bg-secondary)'};
  color: ${props => props.$primary ? 'white' : 'var(--text-primary)'};
  border: ${props => props.$primary ? 'none' : '1px solid var(--border-color)'};
  
  &:hover, &:focus {
    background-color: ${props => props.$primary ? 'var(--primary-hover-color)' : 'var(--bg-hover)'};
  }
  
  &:focus {
    outline: 2px solid var(--focus-color);
    outline-offset: 2px;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const HelpText = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: var(--bg-secondary);
  border-radius: 4px;
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

interface SongEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  songId?: string;
  isNewSong?: boolean;
}

const SongEditorModal: React.FC<SongEditorModalProps> = ({
  isOpen,
  onClose,
  songId,
  isNewSong = false
}) => {
  const { songs, loadSong, saveSongEdits, createNewSong } = useSong();
  const [markdown, setMarkdown] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Load song data when the modal opens
  useEffect(() => {
    if (isOpen && songId && !isNewSong) {
      const loadSongData = async () => {
        try {
          // Check if the song is already loaded
          let songData: SongData | null = null;
          
          if (songs.loaded[songId]) {
            songData = songs.loaded[songId];
          } else {
            songData = await loadSong(songId);
          }
          
          if (songData) {
            const md = songDataToMarkdown(songData);
            setMarkdown(md);
          }
        } catch (error) {
          console.error('Error loading song for editing:', error);
          setError('Failed to load song data');
        }
      };
      
      loadSongData();
    } else if (isOpen && isNewSong) {
      // Set up template for new song
      setMarkdown(`# New Song Title
## Artist Name
Key: C
Tempo: 120
Time: 4/4

[C]Add your [G]lyrics and chords [Am]here
[F]Each chord is in [C]brackets before the word it belongs to
`);
    }
  }, [isOpen, songId, isNewSong, songs.loaded, loadSong]);
  
  if (!isOpen) return null;
  
  const handleSave = async () => {
    setIsSaving(true);
    setError(null);
    
    try {
      // Validate the markdown
      const songData = parseMarkdown(markdown);
      
      if (!songData.songInfo.title || songData.songInfo.title === 'Untitled') {
        setError('Song must have a title (use "# Title" at the top)');
        setIsSaving(false);
        return;
      }
      
      if (!songData.songInfo.artist || songData.songInfo.artist === 'Unknown') {
        setError('Song must have an artist (use "## Artist" after the title)');
        setIsSaving(false);
        return;
      }
      
      let success = false;
      
      if (isNewSong) {
        const newSongId = await createNewSong(songData);
        success = !!newSongId;
      } else if (songId) {
        success = await saveSongEdits(songId, markdown);
      }
      
      if (success) {
        announceToScreenReader('Song saved successfully');
        onClose();
      } else {
        setError('Failed to save song');
      }
    } catch (error) {
      console.error('Error saving song:', error);
      setError('Failed to save song');
    } finally {
      setIsSaving(false);
    }
  };
  
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent 
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-labelledby="song-editor-title"
        aria-modal="true"
      >
        <ModalHeader>
          <ModalTitle id="song-editor-title">
            {isNewSong ? 'Create New Song' : 'Edit Song'}
          </ModalTitle>
          <CloseButton 
            onClick={onClose}
            aria-label="Close song editor"
          >
            ×
          </CloseButton>
        </ModalHeader>
        
        <ModalBody>
          <EditorTextarea
            value={markdown}
            onChange={e => setMarkdown(e.target.value)}
            aria-label="Song markdown editor"
            placeholder="Enter song markdown here..."
            autoFocus
          />
          
          {error && (
            <div style={{ color: 'var(--error-color)', marginTop: '0.5rem' }}>
              {error}
            </div>
          )}
          
          <ButtonGroup>
            <Button onClick={onClose}>
              Cancel
            </Button>
            <Button 
              $primary 
              onClick={handleSave}
              disabled={isSaving}
            >
              {isSaving ? 'Saving...' : 'Save Song'}
            </Button>
          </ButtonGroup>
          
          <HelpText>
            <h3>Markdown Format:</h3>
            <ul>
              <li><code># Song Title</code> - First line should be the title</li>
              <li><code>## Artist Name</code> - Second line should be the artist</li>
              <li><code>Key: C</code> - Optional key information</li>
              <li><code>Tempo: 120</code> - Optional tempo in BPM</li>
              <li><code>Time: 4/4</code> - Optional time signature</li>
              <li><code>[C]Lyrics with [G]chords</code> - Chords in brackets before the word</li>
            </ul>
          </HelpText>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default SongEditorModal; 