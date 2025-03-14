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

const ErrorMessage = styled.div`
  color: var(--error-color, red);
  padding: 0.5rem;
  background-color: rgba(255, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 0.9rem;
`;

const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 1rem;
`;

const Tab = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  background: ${props => props.$active ? 'var(--bg-secondary)' : 'transparent'};
  border: none;
  border-bottom: 2px solid ${props => props.$active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.$active ? 'var(--primary-color)' : 'var(--text-primary)'};
  font-weight: ${props => props.$active ? 'bold' : 'normal'};
  cursor: pointer;
  
  &:hover, &:focus {
    background-color: var(--bg-hover);
  }
  
  &:focus {
    outline: 2px solid var(--focus-color);
    outline-offset: 2px;
  }
`;

const PreviewContainer = styled.div`
  flex: 1;
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--bg-primary);
  overflow: auto;
  font-family: 'Courier New', monospace;
  white-space: pre-wrap;
`;

const PreviewLine = styled.div<{ $hasChords: boolean }>`
  position: relative;
  padding-top: ${props => props.$hasChords ? '1.5em' : '0'};
  margin-bottom: 0.5em;
`;

const PreviewChord = styled.span`
  position: absolute;
  top: 0;
  color: var(--primary-color);
  font-weight: bold;
`;

interface AddSongModalProps {
  isOpen: boolean;
  onClose: () => void;
  songId?: string;
  isEditMode?: boolean;
  onSongSaved?: (songId: string) => void;
}

const AddSongModal: React.FC<AddSongModalProps> = ({
  isOpen,
  onClose,
  songId,
  isEditMode = false,
  onSongSaved
}) => {
  const { songs, loadSong, saveSongEdits, createNewSong } = useSong();
  const [markdown, setMarkdown] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');
  const [previewData, setPreviewData] = useState<SongData | null>(null);
  
  // Load song data when the modal opens
  useEffect(() => {
    if (isOpen) {
      if (songId && isEditMode) {
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
              setPreviewData(songData);
            }
          } catch (error) {
            console.error('Error loading song for editing:', error);
            setError('Failed to load song data');
          }
        };
        
        loadSongData();
      } else {
        // Set up template for new song
        setMarkdown(`# New Song Title
## Artist Name
Key: C
Tempo: 120
Time: 4/4

[C]Add your [G]lyrics and chords [Am]here
[F]Each chord is in [C]brackets before the word it belongs to
`);
        try {
          setPreviewData(parseMarkdown(markdown));
        } catch (e) {
          console.error('Error parsing initial markdown:', e);
        }
      }
    }
  }, [isOpen, songId, isEditMode, songs.loaded, loadSong]);
  
  // Update preview when markdown changes
  useEffect(() => {
    if (activeTab === 'preview' && markdown) {
      try {
        const data = parseMarkdown(markdown);
        setPreviewData(data);
        setError(null);
      } catch (e) {
        console.error('Error parsing markdown:', e);
        setError('Invalid markdown format');
      }
    }
  }, [markdown, activeTab]);
  
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
      let savedSongId = songId;
      
      if (!isEditMode) {
        savedSongId = await createNewSong(songData);
        success = !!savedSongId;
      } else if (songId) {
        success = await saveSongEdits(songId, markdown);
      }
      
      if (success) {
        announceToScreenReader(`Song ${isEditMode ? 'updated' : 'created'} successfully`);
        if (onSongSaved && savedSongId) {
          onSongSaved(savedSongId);
        }
        onClose();
      } else {
        setError(`Failed to ${isEditMode ? 'update' : 'create'} song`);
      }
    } catch (error) {
      console.error(`Error ${isEditMode ? 'updating' : 'creating'} song:`, error);
      setError(`Failed to ${isEditMode ? 'update' : 'create'} song`);
    } finally {
      setIsSaving(false);
    }
  };
  
  const renderPreview = () => {
    if (!previewData) return <div>No preview available</div>;
    
    return (
      <div>
        <h1>{previewData.songInfo.title}</h1>
        <h2>{previewData.songInfo.artist}</h2>
        
        {previewData.songInfo.key && <p>Key: {previewData.songInfo.key}</p>}
        {previewData.songInfo.tempo && <p>Tempo: {previewData.songInfo.tempo}</p>}
        {previewData.songInfo.timeSignature && <p>Time: {previewData.songInfo.timeSignature}</p>}
        
        <div style={{ marginTop: '1rem' }}>
          {previewData.songData.map((line, index) => {
            if (!line.lyric && !line.chords?.length) {
              return <div key={index}>&nbsp;</div>;
            }
            
            return (
              <PreviewLine key={index} $hasChords={!!line.chords?.length}>
                {line.chords?.map((chord, chordIndex) => (
                  <PreviewChord 
                    key={chordIndex}
                    style={{ left: `${chord.position}ch` }}
                  >
                    {chord.text}
                  </PreviewChord>
                ))}
                {line.lyric}
              </PreviewLine>
            );
          })}
        </div>
      </div>
    );
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
            {isEditMode ? 'Edit Song' : 'Add New Song'}
          </ModalTitle>
          <CloseButton 
            onClick={onClose}
            aria-label="Close song editor"
          >
            ×
          </CloseButton>
        </ModalHeader>
        
        <ModalBody>
          <TabContainer>
            <Tab 
              $active={activeTab === 'edit'} 
              onClick={() => setActiveTab('edit')}
            >
              Edit
            </Tab>
            <Tab 
              $active={activeTab === 'preview'} 
              onClick={() => setActiveTab('preview')}
            >
              Preview
            </Tab>
          </TabContainer>
          
          {activeTab === 'edit' ? (
            <EditorTextarea
              value={markdown}
              onChange={e => setMarkdown(e.target.value)}
              aria-label="Song markdown editor"
              placeholder="Enter song markdown here..."
              autoFocus
            />
          ) : (
            <PreviewContainer>
              {renderPreview()}
            </PreviewContainer>
          )}
          
          {error && (
            <ErrorMessage>
              {error}
            </ErrorMessage>
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
              {isSaving ? 'Saving...' : isEditMode ? 'Update Song' : 'Create Song'}
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

export default AddSongModal; 