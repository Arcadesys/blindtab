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
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parse content into lines
  useEffect(() => {
    if (content) {
      const parsedLines = content.split('\n').filter(line => line.trim() !== '');
      setLines(parsedLines);
      lineRefs.current = lineRefs.current.slice(0, parsedLines.length);
    }
  }, [content]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'j') {
        setCurrentLineIndex(prev => Math.min(prev + 1, lines.length - 1));
      } else if (e.key === 'ArrowUp' || e.key === 'k') {
        setCurrentLineIndex(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Home') {
        setCurrentLineIndex(0);
      } else if (e.key === 'End') {
        setCurrentLineIndex(lines.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lines.length]);

  // Auto-scroll to current line
  useEffect(() => {
    if (autoScroll && lineRefs.current[currentLineIndex]) {
      lineRefs.current[currentLineIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [currentLineIndex, autoScroll]);

  // Check if a line contains chords
  const isChordLine = (line: string) => {
    // Simple regex to detect chord patterns like [Am] [C] [G7]
    const chordPattern = /\[([A-G][#b]?m?7?)\]/;
    return chordPattern.test(line);
  };

  const handleLineClick = (index: number) => {
    setCurrentLineIndex(index);
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentLineIndex(parseInt(e.target.value));
  };

  return (
    <div className="flex flex-col h-full">
      <div 
        ref={containerRef}
        className="flex-1 overflow-y-auto font-mono"
        style={{ fontSize: `${fontSize}px` }}
      >
        {lines.map((line, index) => (
          <div
            key={index}
            ref={el => lineRefs.current[index] = el}
            className={`py-1 px-2 cursor-pointer rounded ${
              index === currentLineIndex 
                ? 'bg-blue-100 dark:bg-blue-900 font-bold' 
                : isChordLine(line)
                  ? 'text-blue-600 dark:text-blue-400'
                  : ''
            }`}
            onClick={() => handleLineClick(index)}
          >
            {line}
          </div>
        ))}
      </div>
      
      <div className="mt-4 flex items-center gap-2">
        <button
          onClick={() => setCurrentLineIndex(prev => Math.max(prev - 1, 0))}
          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full"
          aria-label="Previous line"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        
        <input
          type="range"
          min="0"
          max={lines.length - 1}
          value={currentLineIndex}
          onChange={handleRangeChange}
          className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        
        <button
          onClick={() => setCurrentLineIndex(prev => Math.min(prev + 1, lines.length - 1))}
          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full"
          aria-label="Next line"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        <p>Line {currentLineIndex + 1} of {lines.length} • Use arrow keys or click to navigate</p>
      </div>
    </div>
  );
} 