'use client';

import { useState, useEffect, useRef } from 'react';

interface LeadsheetDisplayProps {
  content: string;
  autoScroll: boolean;
  fontSize: number;
}

export function LeadsheetDisplay({ content, autoScroll, fontSize }: LeadsheetDisplayProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  // Parse content into lines
  useEffect(() => {
    if (content) {
      const parsedLines = content.split('\n');
      setLines(parsedLines);
      lineRefs.current = lineRefs.current.slice(0, parsedLines.length);
    }
  }, [content]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'j' || e.key === ' ') {
        e.preventDefault();
        setCurrentLineIndex(prev => Math.min(prev + 1, lines.length - 1));
      } else if (e.key === 'ArrowUp' || e.key === 'k') {
        e.preventDefault();
        setCurrentLineIndex(prev => Math.max(prev - 1, 0));
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
  }, [lines.length, showControls]);

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

  // Handle touch events for mobile swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY === null) return;
    
    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchEndY - touchStartY;
    
    // If the swipe is significant enough (more than 50px)
    if (Math.abs(deltaY) > 50) {
      if (deltaY > 0) {
        // Swipe down - go to previous line
        setCurrentLineIndex(prev => Math.max(prev - 1, 0));
      } else {
        // Swipe up - go to next line
        setCurrentLineIndex(prev => Math.min(prev + 1, lines.length - 1));
      }
    }
    
    setTouchStartY(null);
  };

  return (
    <div 
      className="flex flex-col h-full relative" 
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
            const isChord = isChordLine(line);
            return (
              <div
                key={index}
                ref={el => lineRefs.current[index] = el}
                className={`py-1 cursor-pointer transition-colors ${
                  index === currentLineIndex 
                    ? 'bg-blue-100 dark:bg-blue-900 font-bold' 
                    : isChord
                      ? 'text-blue-600 dark:text-blue-400 font-bold'
                      : ''
                }`}
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
              setCurrentLineIndex(prev => Math.max(prev - 1, 0));
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
              setCurrentLineIndex(prev => Math.min(prev + 1, lines.length - 1));
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
      
      {/* Mobile navigation hint - only shown initially */}
      <div className="md:hidden absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 text-xs opacity-70 pointer-events-none">
        Swipe up/down to navigate
      </div>
    </div>
  );
} 