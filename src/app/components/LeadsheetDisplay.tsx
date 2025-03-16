'use client';

import { useState, useEffect, useRef } from 'react';

interface LeadsheetDisplayProps {
  content: string;
  autoScroll: boolean;
  fontSize: number;
  displayMode?: 'default' | 'high-contrast' | 'yellow-black' | 'black-white';
}

export function LeadsheetDisplay({ 
  content, 
  autoScroll, 
  fontSize,
  displayMode = 'default'
}: LeadsheetDisplayProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [lineTypes, setLineTypes] = useState<('chord' | 'lyric' | 'other')[]>([]);
  const [lineGroups, setLineGroups] = useState<number[]>([]);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [showTapHint, setShowTapHint] = useState(true);

  // Hide tap hint after 5 seconds
  useEffect(() => {
    if (showTapHint) {
      const timer = setTimeout(() => {
        setShowTapHint(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showTapHint]);

  // Parse content into lines and identify chord/lyric pairs
  useEffect(() => {
    if (content) {
      const parsedLines = content.split('\n');
      setLines(parsedLines);
      lineRefs.current = lineRefs.current.slice(0, parsedLines.length);
      
      // Identify line types (chord, lyric, other)
      const types: ('chord' | 'lyric' | 'other')[] = [];
      parsedLines.forEach(line => {
        if (isChordLine(line)) {
          types.push('chord');
        } else if (line.trim() === '') {
          types.push('other');
        } else {
          types.push('lyric');
        }
      });
      setLineTypes(types);
      
      // Group lines together (chord + lyric pairs)
      const groups: number[] = [];
      let currentGroup = 0;
      
      for (let i = 0; i < types.length; i++) {
        if (i > 0 && types[i-1] === 'chord' && types[i] === 'lyric') {
          // This lyric line belongs to the previous chord line's group
          groups.push(currentGroup);
        } else if (types[i] === 'chord') {
          // Start a new group for each chord line
          currentGroup++;
          groups.push(currentGroup);
        } else {
          // Other lines get their own group
          currentGroup++;
          groups.push(currentGroup);
        }
      }
      
      setLineGroups(groups);
    }
  }, [content]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'j' || e.key === ' ') {
        e.preventDefault();
        navigateToNextGroup();
      } else if (e.key === 'ArrowUp' || e.key === 'k') {
        e.preventDefault();
        navigateToPreviousGroup();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentLineIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentLineIndex(lines.length - 1);
      } else if (e.key === 'c') {
        e.preventDefault();
        setShowControls(!showControls);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lines.length, showControls, lineGroups]);

  // Auto-scroll to current line
  useEffect(() => {
    if (lineRefs.current[currentLineIndex]) {
      lineRefs.current[currentLineIndex]?.scrollIntoView({
        behavior: autoScroll ? 'smooth' : 'auto',
        block: 'center',
      });
    }
  }, [currentLineIndex, autoScroll]);

  // Check if a line contains chords
  const isChordLine = (line: string) => {
    // Regex to detect chord patterns
    // This matches common chord patterns like D, A, Bm, G/B, etc.
    const chordPattern = /^[A-G][#b]?(m|maj|min|aug|dim|sus|add|maj7|m7|7|9|11|13|6|5)?(\d)?(\/)?([\w#]+)?(\s+|$)/;
    
    // Check if the line has multiple chord-like patterns with spaces between them
    const words = line.trim().split(/\s+/);
    let chordCount = 0;
    
    for (const word of words) {
      if (chordPattern.test(word)) {
        chordCount++;
      }
    }
    
    // If most words in the line match chord patterns, it's likely a chord line
    return chordCount > 0 && chordCount / words.length > 0.5;
  };

  const handleLineClick = (index: number) => {
    setCurrentLineIndex(index);
  };

  // Navigate to the next group of lines
  const navigateToNextGroup = () => {
    if (currentLineIndex >= lines.length - 1) return;
    
    const currentGroup = lineGroups[currentLineIndex];
    let nextIndex = currentLineIndex + 1;
    
    // Find the first line of the next group
    while (nextIndex < lines.length && lineGroups[nextIndex] === currentGroup) {
      nextIndex++;
    }
    
    if (nextIndex < lines.length) {
      setCurrentLineIndex(nextIndex);
    }
  };

  // Navigate to the previous group of lines
  const navigateToPreviousGroup = () => {
    if (currentLineIndex <= 0) return;
    
    const currentGroup = lineGroups[currentLineIndex];
    let prevIndex = currentLineIndex - 1;
    
    // Find the first line of the previous group
    while (prevIndex > 0 && lineGroups[prevIndex] === currentGroup) {
      prevIndex--;
    }
    
    // If we're now in the middle of a group, find its first line
    if (prevIndex > 0) {
      const prevGroup = lineGroups[prevIndex];
      while (prevIndex > 0 && lineGroups[prevIndex - 1] === prevGroup) {
        prevIndex--;
      }
    }
    
    setCurrentLineIndex(prevIndex);
  };

  // Handle touch events for mobile swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY === null || touchStartX === null) return;
    
    const touchEndY = e.changedTouches[0].clientY;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaY = touchEndY - touchStartY;
    const deltaX = touchEndX - touchStartX;
    
    // If it's a tap (minimal movement), handle tap navigation
    if (Math.abs(deltaY) < 10 && Math.abs(deltaX) < 10) {
      // Get the tap position
      const tapX = e.changedTouches[0].clientX;
      const containerWidth = containerRef.current?.clientWidth || window.innerWidth;
      
      // If tap is on the right side of the screen, go to next group
      if (tapX > containerWidth / 2) {
        navigateToNextGroup();
      } 
      // If tap is on the left side of the screen, go to previous group
      else {
        navigateToPreviousGroup();
      }
    }
    // If it's a significant vertical swipe, handle swipe navigation
    else if (Math.abs(deltaY) > 50 && Math.abs(deltaY) > Math.abs(deltaX)) {
      if (deltaY > 0) {
        // Swipe down - go to previous group
        navigateToPreviousGroup();
      } else {
        // Swipe up - go to next group
        navigateToNextGroup();
      }
    }
    
    setTouchStartY(null);
    setTouchStartX(null);
  };

  // Get display mode styles
  const getDisplayModeStyles = (isCurrentLine: boolean, isChord: boolean) => {
    switch (displayMode) {
      case 'high-contrast':
        return isCurrentLine 
          ? 'bg-blue-600 text-white font-bold' 
          : isChord 
            ? 'text-yellow-500 dark:text-yellow-400 font-bold'
            : 'text-white dark:text-white';
      case 'yellow-black':
        return isCurrentLine 
          ? 'bg-yellow-400 text-black font-bold' 
          : isChord 
            ? 'text-yellow-500 font-bold'
            : 'text-white';
      case 'black-white':
        return isCurrentLine 
          ? 'bg-white text-black font-bold' 
          : isChord 
            ? 'text-white font-bold'
            : 'text-gray-300';
      default:
        return isCurrentLine 
          ? 'bg-blue-100 dark:bg-blue-900 font-bold' 
          : isChord
            ? 'text-blue-600 dark:text-blue-400 font-bold'
            : '';
    }
  };

  // Get background color based on display mode
  const getBackgroundColor = () => {
    switch (displayMode) {
      case 'high-contrast':
        return 'bg-gray-900';
      case 'yellow-black':
        return 'bg-black';
      case 'black-white':
        return 'bg-black';
      default:
        return '';
    }
  };

  return (
    <div 
      className={`flex flex-col h-full relative ${getBackgroundColor()}`}
      onClick={() => setShowControls(!showControls)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        ref={containerRef}
        className="flex-1 overflow-y-auto px-2 md:px-4"
        style={{ fontSize: `${fontSize}px`, lineHeight: '1.5' }}
      >
        <pre className="font-mono whitespace-pre-wrap break-words w-full">
          {lines.map((line, index) => {
            const isChord = lineTypes[index] === 'chord';
            const currentGroup = lineGroups[currentLineIndex];
            const isCurrentLine = lineGroups[index] === currentGroup;
            
            return (
              <div
                key={index}
                ref={el => lineRefs.current[index] = el}
                className={`py-1 cursor-pointer transition-colors ${getDisplayModeStyles(isCurrentLine, isChord)}`}
                onClick={() => handleLineClick(index)}
              >
                {line}
              </div>
            );
          })}
        </pre>
      </div>
      
      {/* Floating mini controls that appear on interaction */}
      {showControls && (
        <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 rounded-full shadow-lg p-2 flex items-center space-x-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateToPreviousGroup();
            }}
            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
            aria-label="Previous line"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          
          <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
            {currentLineIndex + 1}/{lines.length}
          </span>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateToNextGroup();
            }}
            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
            aria-label="Next line"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}
      
      {/* Tap navigation hints - only shown initially */}
      {showTapHint && (
        <>
          <div className="md:hidden absolute top-1/2 left-4 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 text-xs opacity-70 pointer-events-none flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Tap for previous
          </div>
          <div className="md:hidden absolute top-1/2 right-4 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 text-xs opacity-70 pointer-events-none flex items-center">
            Tap for next
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </>
      )}
      
      {/* Mobile navigation hint - only shown initially */}
      {showTapHint && (
        <div className="md:hidden absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 text-xs opacity-70 pointer-events-none">
          Swipe up/down to navigate
        </div>
      )}
      
      {/* Left side tap area */}
      <div 
        className="absolute left-0 top-0 w-1/2 h-full opacity-0"
        onClick={(e) => {
          e.stopPropagation();
          navigateToPreviousGroup();
        }}
      />
      
      {/* Right side tap area */}
      <div 
        className="absolute right-0 top-0 w-1/2 h-full opacity-0"
        onClick={(e) => {
          e.stopPropagation();
          navigateToNextGroup();
        }}
      />
    </div>
  );
} 