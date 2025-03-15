import React, { useState } from 'react';
import styled from 'styled-components';
import { parseSongText } from '../utils/songParser';
import { useSong } from '../contexts/SongContext';

const Container = styled.div`
  padding: 1rem;
  background-color: var(--background-color);
  border-radius: 0.5rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const InstructionText = styled.p`
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
`;

const ExampleCode = styled.pre`
  font-size: 0.75rem;
  color: var(--text-secondary);
  background-color: var(--background-secondary);
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  font-family: monospace;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 16rem;
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 0.25rem;
  font-family: monospace;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  background-color: var(--background-color);
  color: var(--text-color);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px var(--primary-color-light);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ImportButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 0.875rem;
  
  &:hover {
    background-color: var(--primary-color-dark);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--primary-color-light);
  }
`;

const StatusMessage = styled.span<{ type: 'success' | 'error' }>`
  color: ${props => props.type === 'success' ? 'var(--success-color)' : 'var(--error-color)'};
`;

export function ImportSong() {
  const [songText, setSongText] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { createNewSong } = useSong();

  const handleImport = async () => {
    try {
      const songData = parseSongText(songText);
      
      // Validate that we have the minimum required data
      if (!songData.songInfo.title || !songData.songInfo.artist || songData.songData.length === 0) {
        throw new Error('Please include a title, artist, and song content');
      }

      // Create the song using the SongContext
      const songId = await createNewSong(songData);
      
      if (songId) {
        setStatus('success');
        setSongText('');
      } else {
        throw new Error('Failed to save song');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to import song');
    }

    // Reset status after 3 seconds
    setTimeout(() => {
      setStatus('idle');
      setErrorMessage('');
    }, 3000);
  };

  return (
    <Container>
      <Title>Import from Web</Title>
      <div>
        <InstructionText>
          Paste your song text below. Include the title and artist in the format:
        </InstructionText>
        <ExampleCode>
{`Title: Your Song Title
Artist: Artist Name

   Am        C        G
The lyrics go here like this
   F         Em       Am
And continue with more lines`}
        </ExampleCode>
      </div>
      <TextArea
        value={songText}
        onChange={(e) => setSongText(e.target.value)}
        placeholder="Paste your song here..."
      />
      <ButtonContainer>
        <ImportButton onClick={handleImport}>
          Import Song
        </ImportButton>
        {status === 'success' && (
          <StatusMessage type="success">Song imported successfully!</StatusMessage>
        )}
        {status === 'error' && (
          <StatusMessage type="error">{errorMessage}</StatusMessage>
        )}
      </ButtonContainer>
    </Container>
  );
} 