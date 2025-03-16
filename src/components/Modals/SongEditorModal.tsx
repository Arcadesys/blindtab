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
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
`;

const ModalContent = styled.div`
  background-color: var(--background-color);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  width: 95%;
  max-width: 1000px;
  height: 95vh;
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;
  animation: modalEnter 0.3s ease-out;
  
  @keyframes modalEnter {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--border-color);
  background: var(--bg-secondary);
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  svg {
    width: 20px;
    height: 20px;
    color: var(--primary-color);
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  cursor: pointer;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--bg-hover);
    color: var(--text-primary);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--focus-color);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const EditorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 1px;
  background: var(--border-color);
  height: 100%;
  overflow: hidden;
`;

const EditorSection = styled.div`
  background: var(--background-color);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const EditorTextarea = styled.textarea`
  flex: 1;
  padding: 1.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  line-height: 1.6;
  border: none;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  resize: none;
  
  &:focus {
    outline: none;
  }
`;

const HelpPanel = styled.div`
  background: var(--bg-primary);
  padding: 1.5rem;
  overflow-y: auto;
`;

const HelpSection = styled.div`
  &:not(:last-child) {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--border-color);
  }
`;

const HelpTitle = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    width: 16px;
    height: 16px;
    color: var(--primary-color);
  }
`;

const HelpList = styled.ul`
  margin: 0;
  padding: 0 0 0 1.25rem;
  list-style-type: none;
  
  li {
    position: relative;
    margin-bottom: 0.75rem;
    line-height: 1.4;
    
    &:before {
      content: '•';
      position: absolute;
      left: -1.25rem;
      color: var(--primary-color);
    }
  }
`;

const CodeExample = styled.code`
  background: var(--bg-secondary);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.9em;
  color: var(--primary-color);
`;

const ButtonBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
`;

const ErrorMessage = styled.div`
  color: var(--error-color);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const Button = styled.button<{ $primary?: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  background-color: ${props => props.$primary ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.$primary ? 'white' : 'var(--text-primary)'};
  border: ${props => props.$primary ? 'none' : '1px solid var(--border-color)'};
  
  &:hover {
    background-color: ${props => props.$primary ? 'var(--primary-hover-color)' : 'var(--bg-hover)'};
    transform: translateY(-1px);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--focus-color);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
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
  
  const validateSongData = (songData: SongData): string | null => {
    if (!songData.songInfo) {
      return 'Invalid song format';
    }

    if (!songData.songInfo.title || songData.songInfo.title === 'Untitled') {
      return 'Song must have a title (use "# Title" at the top)';
    }

    if (!songData.songInfo.artist || songData.songInfo.artist === 'Unknown') {
      return 'Song must have an artist (use "## Artist" after the title)';
    }

    // Filter out empty lines first
    const contentLines = songData.lyrics?.filter(line => {
      // Remove lines that are completely empty or just whitespace
      if (!line) return false;
      if (line.line?.trim() === '' && !line.chords?.length) return false;
      return true;
    });

    // Check if we have any content lines
    const hasContent = contentLines?.some(line => {
      return (
        // Has chords
        (line.chords && line.chords.length > 0) ||
        // Has non-empty text
        (line.line && line.line.trim() !== '')
      );
    });

    if (!hasContent) {
      return 'Song must have at least one line of lyrics or chords';
    }

    return null;
  };

  const handleSave = async () => {
    if (isSaving) return;

    setIsSaving(true);
    setError(null);

    try {
      // Trim whitespace to avoid empty content
      const trimmedMarkdown = markdown.trim();
      if (!trimmedMarkdown) {
        setError('Song content cannot be empty');
        return;
      }

      // Parse and validate the markdown
      let songData: SongData;
      try {
        songData = parseMarkdown(trimmedMarkdown);
      } catch (e) {
        setError('Invalid markdown format. Please check the formatting guide.');
        return;
      }

      // Validate the song data
      const validationError = validateSongData(songData);
      if (validationError) {
        setError(validationError);
        return;
      }

      let success = false;
      try {
        if (isNewSong) {
          const newSongId = await createNewSong(songData);
          success = !!newSongId;
          if (success) {
            announceToScreenReader(`Song "${songData.songInfo.title}" created successfully`);
          }
        } else if (songId) {
          success = await saveSongEdits(songId, trimmedMarkdown);
          if (success) {
            announceToScreenReader(`Song "${songData.songInfo.title}" saved successfully`);
          }
        }
      } catch (e) {
        console.error('Error saving song:', e);
        setError(e.message || 'Failed to save song. Please try again.');
        return;
      }

      if (success) {
        onClose();
      } else {
        setError('Failed to save song. Please try again.');
      }
    } finally {
      setIsSaving(false);
    }
  };

  // Add keyboard shortcut for saving
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault();
        handleSave();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [markdown, isSaving]);
  
  if (!isOpen) return null;
  
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            {isNewSong ? 'Create New Song' : 'Edit Song'}
          </ModalTitle>
          <CloseButton 
            onClick={onClose}
            aria-label="Close song editor"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </CloseButton>
        </ModalHeader>
        
        <EditorContainer>
          <EditorSection>
            <EditorTextarea
              value={markdown}
              onChange={e => setMarkdown(e.target.value)}
              aria-label="Song markdown editor"
              placeholder="Enter song markdown here..."
              autoFocus
            />
            <ButtonBar>
              {error && (
                <ErrorMessage>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12" y2="16" />
                  </svg>
                  {error}
                </ErrorMessage>
              )}
              <ButtonGroup>
                <Button onClick={onClose}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5" />
                    <path d="M12 19l-7-7 7-7" />
                  </svg>
                  Cancel
                </Button>
                <Button 
                  $primary 
                  onClick={handleSave}
                  disabled={isSaving}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                    <polyline points="17 21 17 13 7 13 7 21" />
                    <polyline points="7 3 7 8 15 8" />
                  </svg>
                  {isSaving ? 'Saving...' : 'Save Song'}
                </Button>
              </ButtonGroup>
            </ButtonBar>
          </EditorSection>
          
          <HelpPanel>
            <HelpSection>
              <HelpTitle>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12" y2="17" />
                </svg>
                Markdown Format
              </HelpTitle>
              <HelpList>
                <li><CodeExample># Song Title</CodeExample> - First line for the title</li>
                <li><CodeExample>## Artist Name</CodeExample> - Second line for the artist</li>
                <li><CodeExample>Key: C</CodeExample> - Optional key information</li>
                <li><CodeExample>Tempo: 120</CodeExample> - Optional tempo in BPM</li>
                <li><CodeExample>Time: 4/4</CodeExample> - Optional time signature</li>
              </HelpList>
            </HelpSection>
            
            <HelpSection>
              <HelpTitle>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
                Chord Format
              </HelpTitle>
              <HelpList>
                <li><CodeExample>[C]Word</CodeExample> - Place chord in brackets before the word</li>
                <li><CodeExample>[Am7]Multiple [D]chords</CodeExample> - Use multiple chords in a line</li>
                <li>Leave a blank line between verses</li>
              </HelpList>
            </HelpSection>
            
            <HelpSection>
              <HelpTitle>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                </svg>
                Tips
              </HelpTitle>
              <HelpList>
                <li>Use clear, descriptive titles</li>
                <li>Include complete artist names</li>
                <li>Add tags for easy searching</li>
              </HelpList>
            </HelpSection>
          </HelpPanel>
        </EditorContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default SongEditorModal; 