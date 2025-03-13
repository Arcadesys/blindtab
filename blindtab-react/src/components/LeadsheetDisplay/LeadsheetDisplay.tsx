import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SongData, SongLine } from '../../types/song';
import { useDisplay } from '../../contexts/DisplayContext';
import { useAutoResize } from '../../hooks/useAutoResize';

const LeadsheetContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  overflow: hidden;
  position: relative;
`;

const LeadsheetContent = styled.div<{ $fontSize: number }>`
  width: 100%;
  max-width: 1200px;
  font-size: ${props => props.$fontSize}px;
  line-height: 1.5;
  white-space: pre-wrap;
  text-align: center;
  overflow: hidden;
`;

const SongTitle = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 1.2em;
`;

const SongArtist = styled.div`
  font-style: italic;
  margin-bottom: 1rem;
  font-size: 0.9em;
  color: var(--text-secondary);
`;

const SongMetadata = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.8em;
  color: var(--text-secondary);
`;

const LyricsContainer = styled.div`
  position: relative;
`;

const LyricLine = styled.div<{ $hasChords: boolean }>`
  position: relative;
  padding-top: ${props => props.$hasChords ? '1.5em' : '0'};
  margin-bottom: 0.5em;
`;

const ChordSpan = styled.span`
  position: absolute;
  top: 0;
  color: var(--primary-color);
  font-weight: bold;
`;

interface LeadsheetDisplayProps {
  songData: SongData | null;
  currentLineIndex?: number;
}

const LeadsheetDisplay: React.FC<LeadsheetDisplayProps> = ({ 
  songData,
  currentLineIndex = 0
}) => {
  const { fontSize, linesToDisplay, autoResize } = useDisplay();
  const [visibleLines, setVisibleLines] = useState<SongLine[]>([]);
  
  // Convert song lines to string array for auto-resize calculation
  const songLinesText = songData?.songData.map(line => line.lyric) || [];
  
  const { containerRef, calculatedFontSize } = useAutoResize(
    songLinesText,
    {
      minFontSize: 16,
      maxFontSize: 72
    }
  );
  
  // Update visible lines when current line or lines to display changes
  useEffect(() => {
    if (!songData) {
      setVisibleLines([]);
      return;
    }
    
    const startIndex = Math.max(0, currentLineIndex);
    const endIndex = Math.min(
      songData.songData.length,
      startIndex + (linesToDisplay || 2)
    );
    
    setVisibleLines(songData.songData.slice(startIndex, endIndex));
  }, [songData, currentLineIndex, linesToDisplay]);
  
  // Render a line with chords
  const renderLineWithChords = (line: SongLine, index: number) => {
    if (!line.chords || line.chords.length === 0) {
      return <LyricLine key={index} $hasChords={false}>{line.lyric}</LyricLine>;
    }
    
    return (
      <LyricLine key={index} $hasChords={true}>
        {line.chords.map((chord, chordIndex) => (
          <ChordSpan 
            key={chordIndex}
            style={{ left: `${chord.position}ch` }}
          >
            {chord.text}
          </ChordSpan>
        ))}
        {line.lyric}
      </LyricLine>
    );
  };
  
  if (!songData) {
    return (
      <LeadsheetContainer ref={containerRef}>
        <LeadsheetContent $fontSize={autoResize ? calculatedFontSize : fontSize}>
          <p>No song loaded. Please select a song to display.</p>
          <p>Click the song library button in the header or press 'O' to open the song library.</p>
        </LeadsheetContent>
      </LeadsheetContainer>
    );
  }
  
  return (
    <LeadsheetContainer ref={containerRef}>
      <LeadsheetContent $fontSize={autoResize ? calculatedFontSize : fontSize}>
        <SongTitle>{songData.songInfo.title}</SongTitle>
        <SongArtist>{songData.songInfo.artist}</SongArtist>
        
        {(songData.songInfo.key || songData.songInfo.tempo || songData.songInfo.timeSignature) && (
          <SongMetadata>
            {songData.songInfo.key && <span>Key: {songData.songInfo.key}</span>}
            {songData.songInfo.tempo && <span>Tempo: {songData.songInfo.tempo}</span>}
            {songData.songInfo.timeSignature && <span>Time: {songData.songInfo.timeSignature}</span>}
          </SongMetadata>
        )}
        
        <LyricsContainer>
          {visibleLines.map(renderLineWithChords)}
        </LyricsContainer>
        
        <div style={{ marginTop: '1rem', fontSize: '0.8em', color: 'var(--text-secondary)' }}>
          Line {currentLineIndex + 1} of {songData.songData.length}
        </div>
      </LeadsheetContent>
    </LeadsheetContainer>
  );
};

export default LeadsheetDisplay; 