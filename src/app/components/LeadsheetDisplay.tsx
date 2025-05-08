'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { 
  isChordLine, 
  findChordsInText, 
  transposeChord, 
  lineToNashville,
  ChordNote,
  parseChord,
  ChordPosition
} from '@/utils/chordUtils';

// Display mode for the leadsheet
// DisplayMode is now handled globally, not per leadsheet

// Display mode for chords
export type ChordDisplayMode = 'original' | 'transposed' | 'both' | 'numerals';

export interface LeadsheetDisplayProps {
  content: string;
  fontSize: number;
  setFontSize?: (size: number) => void;
  autoScroll?: boolean;
  // displayMode?: DisplayMode;
  stepSize?: number;
  setStepSize?: (size: number) => void;
  originalKey: ChordNote | null;
  transpositionParams: {
    targetKey: ChordNote;
    semitones: number;
    displayMode: ChordDisplayMode;
    preferFlats: boolean;
  } | null;
}

export default function LeadsheetDisplay({
  content,
  fontSize = 28,
  setFontSize,
  autoScroll = false,
  // displayMode,
  stepSize = 1,
  setStepSize,
  originalKey,
  transpositionParams,
}: LeadsheetDisplayProps) {
  // State for content processing
  const [lines, setLines] = useState<string[]>([]);
  const [lineTypes, setLineTypes] = useState<('chord' | 'lyric' | 'empty')[]>([]);
  
  // Instead of groups, we're going to track active line for better navigation
  const [activeLineIndex, setActiveLineIndex] = useState<number>(-1);
  const [scrollToLine, setScrollToLine] = useState<number>(-1);
  const [showTapHint, setShowTapHint] = useState(false);
  const [lastTapTime, setLastTapTime] = useState(0);

  // Refs for scroll handling
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null);
  const autoScrollIntervalRef = useRef<number>(2000); // Default to 2 seconds per line
  
  // Sound effect ref
  const navigateSoundRef = useRef<HTMLAudioElement | null>(null);
  
  // Initialize audio elements
  useEffect(() => {
    // We won't try to load any audio files since they don't exist
    // Instead, we'll just set up console logging for actions
    if (typeof window !== 'undefined') {
      console.debug('Setting up audio placeholders');
      navigateSoundRef.current = null;
    }
    
    return () => {
      // Clean up audio elements
      if (navigateSoundRef.current) {
        navigateSoundRef.current = null;
      }
    };
  }, []);

  // Process content when it changes or when transposition parameters change
  useEffect(() => {
    if (!content) {
      setLines([]);
      setLineTypes([]);
      return;
    }

    const contentLines = content.split('\n');
    const processedLines: string[] = [];
    const types: ('chord' | 'lyric' | 'empty')[] = [];

    // Function to process a line based on transposition settings
    const processLine = (line: string, index: number) => {
      if (line.trim() === '') {
        processedLines.push('');
        types.push('empty');
      } else if (isChordLine(line)) {
        let processedLine = line;
        
        // Apply transposition if parameters are provided
        if (transpositionParams && originalKey) {
          const { targetKey, semitones, displayMode: chordDisplayMode, preferFlats } = transpositionParams;
          
          if (chordDisplayMode === 'original') {
            // Keep the original chord line
            processedLine = line;
          } else if (chordDisplayMode === 'transposed') {
            // Replace with transposed chords
            processedLine = transposeChordLine(line, semitones, preferFlats);
          } else if (chordDisplayMode === 'both') {
            // Show both original and transposed
            const transposed = transposeChordLine(line, semitones, preferFlats);
            processedLine = `${line}\n${transposed}`;
          } else if (chordDisplayMode === 'numerals') {
            // Replace with Nashville numbers
            processedLine = nashvilleNumberLine(line, originalKey);
          }
        }
        
        processedLines.push(processedLine);
        types.push('chord');
      } else {
        processedLines.push(line);
        types.push('lyric');
      }
    };

    // Helper function to transpose an entire line of chords
    const transposeChordLine = (line: string, semitones: number, preferFlats: boolean): string => {
      const chordPositions = findChordsInText(line);
      let result = line;
      
      // Process chords in reverse order to avoid messing up indices
      for (let i = chordPositions.length - 1; i >= 0; i--) {
        const { chord: chordStr, startIndex, endIndex } = chordPositions[i];
        const parsedChord = parseChord(chordStr);
        
        if (parsedChord) {
          const transposed = transposeChord(parsedChord, semitones, preferFlats);
          result = result.substring(0, startIndex) + 
                  transposed.display + 
                  result.substring(endIndex);
        }
      }
      
      return result;
    };
    
    // Helper function to convert a chord line to Nashville Numbers
    const nashvilleNumberLine = (line: string, key: ChordNote): string => {
      const chordPositions = findChordsInText(line);
      let result = line;
      
      // Process chords in reverse order to avoid messing up indices
      for (let i = chordPositions.length - 1; i >= 0; i--) {
        const { chord: chordStr, startIndex, endIndex } = chordPositions[i];
        try {
          const nashville = lineToNashville(chordStr, key);
          result = result.substring(0, startIndex) + 
                   nashville + 
                   result.substring(endIndex);
        } catch (e) {
          console.error('Error converting to Nashville:', e);
        }
      }
      
      return result;
    };

    // Process each line
    contentLines.forEach(processLine);

    setLines(processedLines);
    setLineTypes(types);

    // Reset active line when content changes
    setActiveLineIndex(-1);
  }, [content, transpositionParams, originalKey]);

  // Effect for font size changes
  useEffect(() => {
    lineRefs.current = lineRefs.current.slice(0, lines.length);
  }, [lines]);

  // Effect for tap hint timeout
  useEffect(() => {
    if (showTapHint) {
      const timer = setTimeout(() => setShowTapHint(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showTapHint]);

  // Effect for auto-scrolling
  useEffect(() => {
    const startAutoScroll = () => {
      if (autoScrollTimerRef.current) {
        clearTimeout(autoScrollTimerRef.current);
      }
      
      autoScrollTimerRef.current = setTimeout(() => {
        if (activeLineIndex < lines.length - 1) {
          setActiveLineIndex(prev => prev + stepSize);
        } else {
          // Stop auto-scroll at the end
          if (autoScrollTimerRef.current) {
            clearTimeout(autoScrollTimerRef.current);
            autoScrollTimerRef.current = null;
          }
        }
      }, autoScrollIntervalRef.current);
    };

    if (autoScroll && lines.length > 0) {
      if (activeLineIndex === -1) {
        // Start from the beginning if no line is active
        setActiveLineIndex(0);
      } else {
        startAutoScroll();
      }
    } else if (!autoScroll && autoScrollTimerRef.current) {
      clearTimeout(autoScrollTimerRef.current);
      autoScrollTimerRef.current = null;
    }

    return () => {
      if (autoScrollTimerRef.current) {
        clearTimeout(autoScrollTimerRef.current);
      }
    };
  }, [autoScroll, activeLineIndex, lines.length, stepSize]);

  // Effect for scrolling to active line
  useEffect(() => {
    if (scrollToLine >= 0 && lineRefs.current[scrollToLine]) {
      lineRefs.current[scrollToLine]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
      setScrollToLine(-1);
    }
  }, [scrollToLine]);

  // Effect for highlighting active line
  useEffect(() => {
    if (activeLineIndex >= 0 && activeLineIndex < lines.length) {
      setScrollToLine(activeLineIndex);
    }
  }, [activeLineIndex, lines.length]);

  // Navigation functions
  const navigateToNextLine = useCallback(() => {
    if (activeLineIndex < lines.length - 1) {
      // If current line is a chord line and next line is a lyric, jump to the line after that
      if (
        lineTypes[activeLineIndex] === 'chord' &&
        activeLineIndex + 1 < lines.length &&
        lineTypes[activeLineIndex + 1] === 'lyric'
      ) {
        setActiveLineIndex(prevIndex => prevIndex + 2);
      } 
      // If current line is a lyric and previous line was a chord, jump to the next chord line 
      else if (
        lineTypes[activeLineIndex] === 'lyric' &&
        activeLineIndex > 0 &&
        lineTypes[activeLineIndex - 1] === 'chord'
      ) {
        // Find the next chord line
        let nextIndex = activeLineIndex + 1;
        while (nextIndex < lines.length && lineTypes[nextIndex] !== 'chord') {
          nextIndex++;
        }
        if (nextIndex < lines.length) {
          setActiveLineIndex(nextIndex);
        } else {
          // If no more chord lines, just go to the next line
          setActiveLineIndex(prevIndex => prevIndex + stepSize);
        }
      } 
      // Otherwise, move stepSize lines
      else {
        setActiveLineIndex(prevIndex => prevIndex + stepSize);
      }
      
      // Just log instead of trying to play sound
      console.debug('Navigation sound would play here');
    }
  }, [activeLineIndex, lines.length, lineTypes, stepSize]);

  const navigateToPreviousLine = useCallback(() => {
    if (activeLineIndex > 0) {
      // If current line is a lyric line and previous line is a chord, jump to chord line
      if (
        lineTypes[activeLineIndex] === 'lyric' &&
        activeLineIndex > 0 &&
        lineTypes[activeLineIndex - 1] === 'chord'
      ) {
        setActiveLineIndex(activeLineIndex - 1);
      } 
      // If current line is a chord line, go to previous chord line
      else if (lineTypes[activeLineIndex] === 'chord') {
        // Find the previous chord line
        let prevIndex = activeLineIndex - 1;
        while (prevIndex >= 0 && lineTypes[prevIndex] !== 'chord') {
          prevIndex--;
        }
        if (prevIndex >= 0) {
          setActiveLineIndex(prevIndex);
        } else {
          // If no previous chord lines, just go back stepSize
          setActiveLineIndex(prevIndex => Math.max(prevIndex - stepSize, 0));
        }
      }
      // Otherwise, move back stepSize lines
      else {
        setActiveLineIndex(prevIndex => Math.max(prevIndex - stepSize, 0));
      }
      
      // Just log instead of trying to play sound
      console.debug('Navigation sound would play here');
    }
  }, [activeLineIndex, lineTypes, stepSize]);

  const navigateToFirstLine = useCallback(() => {
    if (lines.length > 0) {
      setActiveLineIndex(0);
    }
  }, [lines.length]);

  const navigateToLastLine = useCallback(() => {
    if (lines.length > 0) {
      setActiveLineIndex(lines.length - 1);
    }
  }, [lines.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip if in an input field
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if ((e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ' || e.key === 'j') && !e.repeat) {
        e.preventDefault();
        navigateToNextLine();
      } else if ((e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'k') && !e.repeat) {
        e.preventDefault();
        navigateToPreviousLine();
      } else if (e.key === 'Home') {
        e.preventDefault();
        navigateToFirstLine();
      } else if (e.key === 'End') {
        e.preventDefault();
        navigateToLastLine();
      } else if ((e.key === '=' || e.key === '+') && setFontSize) {
        e.preventDefault();
        setFontSize(Math.min(fontSize + 2, 72)); // Max font size
      } else if ((e.key === '-' || e.key === '_') && setFontSize) {
        e.preventDefault();
        setFontSize(Math.max(fontSize - 2, 12)); // Min font size
      } else if (e.key === '0' && setFontSize) {
        e.preventDefault();
        // Auto size (reset to default)
        setFontSize(28);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fontSize, setFontSize, navigateToNextLine, navigateToPreviousLine, navigateToFirstLine, navigateToLastLine]);

  // Handle tap/click for tap tempo and navigation
  const handleTap = () => {
    const now = Date.now();
    const tapInterval = now - lastTapTime;
    
    if (lastTapTime && tapInterval < 3000) {
      // Calculate BPM and set the auto-scroll interval
      const bpm = Math.round(60000 / tapInterval);
      autoScrollIntervalRef.current = tapInterval * stepSize;
      
      // If setStepSize is provided, update the step size
      if (setStepSize && bpm > 40 && bpm < 240) {
        setShowTapHint(true);
      }
    }
    
    setLastTapTime(now);
    navigateToNextLine();
  };

  // Display mode is now handled globally; use theme-aware styles
  const styles = {
    container: 'bg-white text-gray-900 dark:bg-[#121a29] dark:text-white',
    chord: 'font-mono text-blue-600 dark:text-blue-400 py-1 leadsheet-font',
    lyric: 'font-mono text-gray-900 dark:text-white leadsheet-font',
    highlight: 'bg-blue-100 dark:bg-blue-900 bg-opacity-30',
  };

  return (
    <div 
      ref={containerRef}
      className={`relative ${styles.container} p-4 rounded-lg min-h-[85vh] overflow-hidden font-mono leadsheet-font`}
      onClick={handleTap}
      style={{
        fontFamily: "'Source Code Pro', monospace",
        fontWeight: 400
      }}
    >
      {showTapHint && (
        <div className="fixed top-4 right-4 bg-black bg-opacity-80 text-white px-3 py-2 rounded-lg z-10">
          <p>Tap tempo detected</p>
          <p>{Math.round(60000 / (autoScrollIntervalRef.current / stepSize))} BPM</p>
        </div>
      )}

      {/* Navigation instructions - keeping them subtle */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center text-center opacity-40 text-sm">
        <div className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg">
          <p>Tap or press Space to advance</p>
        </div>
      </div>
      
      <div className="mx-auto max-w-full leadsheet-font">
        {lines.map((line, index) => {
          const lineType = lineTypes[index];
          
          // Determine if this line should be highlighted
          // Highlight both the chord line and its following lyric line as one logical unit
          let isHighlighted = index === activeLineIndex;
          
          // If this is a lyric line and the previous line was a chord line
          // that's active, then also highlight this lyric line
          if (
            lineType === 'lyric' && 
            index > 0 && 
            lineTypes[index - 1] === 'chord' && 
            activeLineIndex === index - 1
          ) {
            isHighlighted = true;
          }
          
          return (
            <div
              key={index}
              ref={el => { lineRefs.current[index] = el; }}
              className={`
                transition-all duration-150 ease-in-out leadsheet-font
                ${isHighlighted ? `${styles.highlight}` : ''}
                ${lineType === 'chord' ? styles.chord : lineType === 'lyric' ? styles.lyric : ''}
              `}
              style={{
                fontFamily: "'Source Code Pro', monospace",
                fontWeight: lineType === 'chord' ? 600 : 400,
                fontSize: `${lineType === 'chord' ? fontSize : Math.max(fontSize - 4, 12)}px`,
                marginBottom: lineType === 'empty' ? '1em' : '0.2em',
                marginTop: lineType === 'empty' ? '1em' : '0',
                padding: isHighlighted ? '0.2em 0.5em' : '0',
                borderRadius: isHighlighted ? '0.25rem' : '0',
                whiteSpace: 'pre-wrap',
                lineHeight: '1.3',
              }}
            >
              {line === '' ? '\u00A0' : line}
            </div>
          );
        })}
      </div>
    </div>
  );
} 