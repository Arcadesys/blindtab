import React, { useEffect, useState, useRef, useCallback } from 'react';
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
  position: relative;
`;

// Container for both current and next/previous lines
const AnimationContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

// Container that will be animated
const LyricsContainer = styled.div<{ $animationOffset: string }>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5%;
  transition: transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);
  transform: translateY(${props => props.$animationOffset});
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
  const { fontSize, linesToDisplay, autoResize, enableAnimations } = useDisplay();
  const [visibleLines, setVisibleLines] = useState<SongLine[]>([]);
  const [animationOffset, setAnimationOffset] = useState('0');
  const [prevLineIndex, setPrevLineIndex] = useState(currentLineIndex);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lineHeightRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Get the lyrics array, handling both old and new data structures
  const lyrics = songData?.lyrics || songData?.songData || [];
  
  // Convert song lines to string array for auto-resize calculation
  const songLinesText = lyrics.map(line => line.line || line.lyric || '');
  
  const { calculatedFontSize } = useAutoResize(
    songLinesText,
    {
      minFontSize: 16,
      maxFontSize: 72
    }
  );
  
  // Clean up any pending animations on unmount
  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);
  
  // Calculate approximate line height based on font size
  useEffect(() => {
    const currentFontSize = autoResize ? calculatedFontSize : fontSize;
    // Line height is typically 1.5 times the font size
    lineHeightRef.current = currentFontSize * 1.5;
  }, [fontSize, calculatedFontSize, autoResize]);
  
  // Handle line navigation with animation
  useEffect(() => {
    if (!songData || !lyrics.length) {
      setVisibleLines([]);
      return;
    }
    
    // Load more lines than we need to display for smooth scrolling
    const extraLines = 2; // Extra lines for animation buffer
    const totalLinesToLoad = linesToDisplay + extraLines;
    
    // If animations are disabled or it's the initial load, just update the visible lines
    if (!enableAnimations || currentLineIndex === prevLineIndex) {
      // Load lines without animation
      const startIndex = Math.max(0, currentLineIndex);
      const endIndex = Math.min(
        lyrics.length,
        startIndex + linesToDisplay
      );
      
      setVisibleLines(lyrics.slice(startIndex, endIndex));
      setAnimationOffset('0');
      setPrevLineIndex(currentLineIndex);
      return;
    }
    
    // Determine if we're moving forward or backward
    const isMovingForward = currentLineIndex > prevLineIndex;
    
    if (isMovingForward) {
      // Moving forward: load current line + next lines
      const startIndex = Math.max(0, currentLineIndex - 1); // Include previous line for smooth transition
      const endIndex = Math.min(
        lyrics.length,
        currentLineIndex + linesToDisplay + 1 // Add extra line at the end
      );
      
      // Set lines first
      setVisibleLines(lyrics.slice(startIndex, endIndex));
      
      // Start with offset showing the previous position
      setAnimationOffset(`${lineHeightRef.current}px`);
      
      // After a tiny delay to ensure the DOM has updated, animate to the new position
      const frameId = requestAnimationFrame(() => {
        const timeoutId = setTimeout(() => {
          setAnimationOffset('0');
        }, 30);
        return () => clearTimeout(timeoutId);
      });
      return () => cancelAnimationFrame(frameId);
    } else {
      // Moving backward: load previous lines + current line
      const startIndex = Math.max(0, currentLineIndex - 1);
      const endIndex = Math.min(
        lyrics.length,
        currentLineIndex + linesToDisplay
      );
      
      // Set lines first
      setVisibleLines(lyrics.slice(startIndex, endIndex));
      
      // Start with offset showing the next position
      setAnimationOffset(`-${lineHeightRef.current}px`);
      
      // After a tiny delay to ensure the DOM has updated, animate to the new position
      const frameId = requestAnimationFrame(() => {
        const timeoutId = setTimeout(() => {
          setAnimationOffset('0');
        }, 30);
        return () => clearTimeout(timeoutId);
      });
      return () => cancelAnimationFrame(frameId);
    }
    
    // Update the previous line index after animation completes
    const timeoutId = setTimeout(() => {
      setPrevLineIndex(currentLineIndex);
    }, 850);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [songData, currentLineIndex, linesToDisplay, enableAnimations, lyrics.length]);
  
  // Render a line with chords
  const renderLineWithChords = (line: SongLine, index: number) => {
    // Handle both old and new data structures
    const chords = line.chords || (line.chord ? [{ text: line.chord, position: 0 }] : []);
    const lyricText = line.lyric || line.line || '';

    if (!chords.length) {
      return (
        <LyricLine key={index} $hasChords={false}>
          <LyricText>{lyricText}</LyricText>
        </LyricLine>
      );
    }
    
    return (
      <LyricLine key={index} $hasChords={true}>
        <ChordContainer>
          {chords.map((chord, chordIndex) => (
            <ChordSpan 
              key={chordIndex}
              style={{ left: `${chord.position}ch` }}
            >
              {chord.text}
            </ChordSpan>
          ))}
        </ChordContainer>
        <LyricText>{lyricText}</LyricText>
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
        <AnimationContainer>
          <LyricsContainer $animationOffset={animationOffset}>
            {visibleLines.map((line, index) => (
              <LyricLine key={index} $hasChords={!!line.chord || (line.chords && line.chords.length > 0)}>
                {renderLineWithChords(line, index)}
              </LyricLine>
            ))}
          </LyricsContainer>
        </AnimationContainer>
        
        <LineCounter>
          {currentLineIndex + 1}/{lyrics.length}
        </LineCounter>
      </LeadsheetContent>
    </LeadsheetContainer>
  );
};

export default LeadsheetDisplay; 