import React, { useEffect, useState, useRef } from 'react';
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
  overflow: hidden;
`;

const LyricsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 5%;
`;

// Using a monospace font for consistent character widths
const LyricLine = styled.div<{ $hasChords: boolean }>`
  position: relative;
  padding-top: ${props => props.$hasChords ? '1.5em' : '0'};
  margin-bottom: 0.5em;
  text-align: left;
  font-family: 'Courier New', monospace;
  width: 100%;
`;

const LyricText = styled.div`
  position: relative;
  white-space: pre;
  display: inline-block;
  text-align: left;
`;

const ChordContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1.5em;
  pointer-events: none;
  text-align: left;
`;

const ChordSpan = styled.span`
  position: absolute;
  top: 0;
  color: var(--primary-color);
  font-weight: bold;
  font-family: 'Courier New', monospace;
  white-space: pre;
`;

// Small, unobtrusive line counter at the bottom
const LineCounter = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  font-size: 0.7em;
  color: var(--text-secondary);
  opacity: 0.7;
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
      return (
        <LyricLine key={index} $hasChords={false}>
          <LyricText>{line.lyric}</LyricText>
        </LyricLine>
      );
    }
    
    return (
      <LyricLine key={index} $hasChords={true}>
        <ChordContainer>
          {line.chords.map((chord, chordIndex) => {
            // For monospace fonts, we can use ch units which are more accurate
            return (
              <ChordSpan 
                key={chordIndex}
                style={{ left: `${chord.position}ch` }}
              >
                {chord.text}
              </ChordSpan>
            );
          })}
        </ChordContainer>
        <LyricText>{line.lyric}</LyricText>
      </LyricLine>
    );
  };
  
  if (!songData) {
    return (
      <LeadsheetContainer ref={containerRef}>
        <LeadsheetContent $fontSize={autoResize ? calculatedFontSize : fontSize}>
          <div style={{ textAlign: 'center' }}>
            <p>No song loaded. Please select a song to display.</p>
            <p>Click the song library button in the header or press 'O' to open the song library.</p>
          </div>
        </LeadsheetContent>
      </LeadsheetContainer>
    );
  }
  
  return (
    <LeadsheetContainer ref={containerRef}>
      <LeadsheetContent $fontSize={autoResize ? calculatedFontSize : fontSize}>
        <LyricsContainer>
          {visibleLines.map(renderLineWithChords)}
        </LyricsContainer>
        
        <LineCounter>
          {currentLineIndex + 1}/{songData.songData.length}
        </LineCounter>
      </LeadsheetContent>
    </LeadsheetContainer>
  );
};

export default LeadsheetDisplay; 