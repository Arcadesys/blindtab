'use client';

import { useState, useEffect, useRef } from 'react';

interface LeadsheetDisplayProps {
  content: string;
  autoScroll?: boolean;
  fontSize?: number;
}

export default function LeadsheetDisplay({ 
  content, 
  autoScroll = false,
  fontSize = 16
}: LeadsheetDisplayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  // Parse content into lines
  useEffect(() => {
    if (content) {
      const contentLines = content.split('\n').filter(line => line.trim() !== '');
      setLines(contentLines);
    }
  }, [content]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === ' ' || e.key === 'ArrowRight') {
        e.preventDefault();
        if (currentLineIndex < lines.length - 1) {
          setCurrentLineIndex(prev => prev + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentLineIndex > 0) {
          setCurrentLineIndex(prev => prev - 1);
        }
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentLineIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentLineIndex(lines.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentLineIndex, lines.length]);

  // Auto-scroll to current line
  useEffect(() => {
    if (autoScroll && containerRef.current) {
      const container = containerRef.current;
      const currentLineElement = container.querySelector(`[data-line-index="${currentLineIndex}"]`);
      
      if (currentLineElement) {
        currentLineElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }
  }, [currentLineIndex, autoScroll]);

  // Detect if a line contains chords
  const isChordLine = (line: string) => {
    // Simple regex to detect chord patterns (can be improved)
    const chordPattern = /^[A-G][#b]?(?:m|maj|min|aug|dim|sus|add)?(?:[0-9])?(?:\/[A-G][#b]?)?(?:\s+|$)/;
    return chordPattern.test(line);
  };

  // Render the leadsheet with highlighted current line
  return (
    <div className="relative w-full h-full overflow-auto" ref={containerRef}>
      <div className="p-6 font-mono whitespace-pre-wrap" style={{ fontSize: `${fontSize}px` }}>
        {lines.map((line, index) => (
          <div
            key={index}
            data-line-index={index}
            className={`py-1 transition-colors ${
              index === currentLineIndex 
                ? 'bg-blue-100 dark:bg-blue-900 rounded' 
                : ''
            } ${
              isChordLine(line) 
                ? 'text-blue-600 dark:text-blue-400 font-bold' 
                : ''
            }`}
          >
            {line}
          </div>
        ))}
      </div>
      
      {/* Navigation controls */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 p-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <button
          onClick={() => setCurrentLineIndex(prev => Math.max(0, prev - 1))}
          disabled={currentLineIndex === 0}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
          aria-label="Previous line"
        >
          Previous
        </button>
        
        <div className="text-center">
          <span className="text-gray-700 dark:text-gray-300">
            Line {currentLineIndex + 1} of {lines.length}
          </span>
          <input
            type="range"
            min={0}
            max={lines.length - 1}
            value={currentLineIndex}
            onChange={(e) => setCurrentLineIndex(parseInt(e.target.value))}
            className="w-64 mx-4"
          />
        </div>
        
        <button
          onClick={() => setCurrentLineIndex(prev => Math.min(lines.length - 1, prev + 1))}
          disabled={currentLineIndex === lines.length - 1}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
          aria-label="Next line"
        >
          Next
        </button>
      </div>
    </div>
  );
} 