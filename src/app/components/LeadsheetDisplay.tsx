'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

export type DisplayMode = 'default' | 'high-contrast' | 'yellow-black' | 'black-white';

interface LeadsheetDisplayProps {
  content: string;
  fontSize: number;
  setFontSize?: (size: number) => void;
  autoScroll?: boolean;
  displayMode?: DisplayMode;
  onMenuVisibilityChange?: (visible: boolean) => void;
  stepSize?: number;
  setStepSize?: (size: number) => void;
}

interface LineGroup {
  chordLine: number;
  lyricLine: number;
}

export default function LeadsheetDisplay({ 
  content, 
  fontSize,
  setFontSize,
  displayMode = 'default',
  onMenuVisibilityChange,
  stepSize = 1,
  setStepSize
}: LeadsheetDisplayProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [lineTypes, setLineTypes] = useState<('chord' | 'lyric' | 'other')[]>([]);
  const [lineGroups, setLineGroups] = useState<LineGroup[]>([]);
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [showTopMenu, setShowTopMenu] = useState(true);
  const [localFontSize, setLocalFontSize] = useState(fontSize);
  const [touchStartY, setTouchStartY] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [showTapHint, setShowTapHint] = useState(true);
  const [isNavigating] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLPreElement>(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Update local font size when prop changes
  useEffect(() => {
    setLocalFontSize(fontSize);
  }, [fontSize]);
  
  // Hide tap hint after 5 seconds
  useEffect(() => {
    if (showTapHint) {
      const timer = setTimeout(() => {
        setShowTapHint(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [showTapHint]);

  // Auto-hide controls after a delay
  useEffect(() => {
    if (showControls) {
      const timer = setTimeout(() => {
        setShowControls(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [showControls]);
  
  // Auto-hide top menu after a delay and notify parent
  useEffect(() => {
    if (showTopMenu) {
      const timer = setTimeout(() => {
        setShowTopMenu(false);
        if (onMenuVisibilityChange) {
          onMenuVisibilityChange(false);
        }
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [showTopMenu, onMenuVisibilityChange]);
  
  // Notify parent when menu visibility changes
  useEffect(() => {
    if (onMenuVisibilityChange) {
      onMenuVisibilityChange(showTopMenu);
    }
  }, [showTopMenu, onMenuVisibilityChange]);

  // Clean up navigation timeout on unmount
  useEffect(() => {
    // Store the ref in a variable to avoid the warning
    const currentTimeoutRef = navigationTimeoutRef.current;
    
    return () => {
      if (currentTimeoutRef) {
        clearTimeout(currentTimeoutRef);
      }
    };
  }, []);

  // Parse content into lines and identify chord lines
  useEffect(() => {
    if (!content) return;
    
    const contentLines = content.split('\n');
    setLines(contentLines);
    
    // Identify line types (chord, lyric, or other)
    const types = contentLines.map(line => {
      if (isChordLine(line)) return 'chord';
      if (line.trim() && !line.startsWith('#') && !line.startsWith('[')) return 'lyric';
      return 'other';
    });
    setLineTypes(types);
    
    // Group chord lines with their corresponding lyric lines
    const groups: LineGroup[] = [];
    for (let i = 0; i < types.length; i++) {
      if (types[i] === 'chord') {
        // Find the next lyric line
        let lyricLineIndex = -1;
        for (let j = i + 1; j < types.length; j++) {
          if (types[j] === 'lyric') {
            lyricLineIndex = j;
            break;
          }
        }
        
        if (lyricLineIndex !== -1) {
          groups.push({
            chordLine: i,
            lyricLine: lyricLineIndex
          });
        }
      }
    }
    setLineGroups(groups);
    
  }, [content]);
  
  // Auto-scroll to the current group
  useEffect(() => {
    if (lineGroups.length > 0 && currentGroupIndex < lineGroups.length) {
      const currentGroup = lineGroups[currentGroupIndex];
      const chordLineEl = lineRefs.current[currentGroup.chordLine];
      
      if (chordLineEl) {
        chordLineEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [currentGroupIndex, lineGroups]);

  // Navigation functions
  const goToNextGroup = useCallback((steps: number = 1) => {
    if (lineGroups.length > 0 && currentGroupIndex < lineGroups.length - 1) {
      const newIndex = Math.min(currentGroupIndex + steps, lineGroups.length - 1);
      setCurrentGroupIndex(newIndex);
    }
  }, [currentGroupIndex, lineGroups]);
  
  const goToPreviousGroup = useCallback((steps: number = 1) => {
    if (lineGroups.length > 0 && currentGroupIndex > 0) {
      const newIndex = Math.max(currentGroupIndex - steps, 0);
      setCurrentGroupIndex(newIndex);
    }
  }, [currentGroupIndex, lineGroups]);
  
  const goToFirstGroup = useCallback(() => {
    if (lineGroups.length > 0) {
      setCurrentGroupIndex(0);
    }
  }, [lineGroups]);
  
  const goToLastGroup = useCallback(() => {
    if (lineGroups.length > 0) {
      setCurrentGroupIndex(lineGroups.length - 1);
    }
  }, [lineGroups]);
  
  // Font size adjustment
  const adjustFontSize = useCallback((delta: number) => {
    const newSize = Math.max(12, Math.min(36, localFontSize + delta));
    setLocalFontSize(newSize);
    if (setFontSize) {
      setFontSize(newSize);
    }
  }, [localFontSize, setFontSize]);
  
  const autoScaleFontSize = useCallback(() => {
    // Auto-scale implementation
    // ...
  }, []);

  // Now add the keyboard shortcuts useEffect
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        goToPreviousGroup(stepSize);
      } else if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        goToNextGroup(stepSize);
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToFirstGroup();
      } else if (e.key === 'End') {
        e.preventDefault();
        goToLastGroup();
      } else if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        adjustFontSize(1);
      } else if (e.key === '-' || e.key === '_') {
        e.preventDefault();
        adjustFontSize(-1);
      } else if (e.key === '0') {
        e.preventDefault();
        autoScaleFontSize();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPreviousGroup, goToNextGroup, goToFirstGroup, goToLastGroup, adjustFontSize, autoScaleFontSize, stepSize]);
  
  // Helper function to check if a line is a chord line
  const isChordLine = (line: string) => {
    // A chord line typically contains chord patterns like A, Am, C#m7, etc.
    // and has spaces between chords
    if (!line.trim()) return false;
    
    // Ignore lines that are likely headers or comments
    if (line.startsWith('#')) return false;
    
    // Check for chord patterns
    const chordPattern = /\b([A-G][b#]?)(m|maj|min|aug|dim|sus|add)?[0-9]?(\/?[A-G][b#]?)?\b/;
    const words = line.split(/\s+/);
    
    // A chord line usually has multiple chord-like words with spaces between them
    // and is relatively short
    return words.length > 0 && 
           words.some(word => chordPattern.test(word)) &&
           words.length <= 16 && // Arbitrary limit to avoid matching lyric lines
           words.join('').length < 40; // Another heuristic to avoid long lyric lines
  };
  
  // Helper function to parse inline chords
  const parseInlineChords = (line: string) => {
    // Split the line into parts, preserving the original text
    const parts = line.split(/(\[[^\]]+\])/g);
    
    return parts.map((part, index) => {
      // Check if this part is a chord (starts with [ and ends with ])
      if (part.startsWith('[') && part.endsWith(']')) {
        // Remove the brackets and return the chord
        return {
          type: 'chord',
          content: part.slice(1, -1),
          key: index,
          position: index // Keep track of position for alignment
        };
      } else {
        // This is regular text
        return {
          type: 'text',
          content: part,
          key: index,
          position: index
        };
      }
    });
  };
  
  // Helper function to calculate chord positions
  const calculateChordPositions = (parts: Array<{ type: string; content: string; key: number; position: number }>) => {
    let currentPosition = 0;
    const chordPositions: { [key: number]: number } = {};
    
    parts.forEach(part => {
      if (part.type === 'chord') {
        // Position the chord above the text, accounting for the text width
        chordPositions[part.key] = currentPosition;
      }
      // Add the length of the content to the current position
      currentPosition += part.content.length;
    });
    
    return chordPositions;
  };
  
  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
    setTouchStartX(e.touches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    // If we detect significant movement, we're likely scrolling, not tapping
    const touchY = e.touches[0].clientY;
    const touchX = e.touches[0].clientX;
    const deltaY = Math.abs(touchY - touchStartY);
    const deltaX = Math.abs(touchX - touchStartX);
    
    // If there's significant movement, we're not tapping
    if (deltaY > 20 || deltaX > 20) {
      // This is a scroll, not a tap
    }
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isNavigating) return;
    
    const touchEndY = e.changedTouches[0].clientY;
    const touchEndX = e.changedTouches[0].clientX;
    
    const deltaY = touchEndY - touchStartY;
    const deltaX = touchEndX - touchStartX;
    
    // Determine if it's a tap or a swipe - more strict criteria for iPad
    const isTap = Math.abs(deltaY) < 10 && Math.abs(deltaX) < 10;
    
    if (isTap) {
      // Handle tap navigation based on screen position
      const screenWidth = window.innerWidth;
      const tapX = touchEndX;
      
      if (tapX < screenWidth * 0.3) {
        // Tap on left side - go to previous and hide top menu
        goToPreviousGroup(stepSize);
        setShowTopMenu(false);
      } else if (tapX > screenWidth * 0.7) {
        // Tap on right side - go to next and hide top menu
        goToNextGroup(stepSize);
        setShowTopMenu(false);
      } else {
        // Tap in middle - toggle controls
        setShowControls(!showControls);
      }
    } else if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 50) {
      // Vertical swipe - must be more than 50px to count
      if (deltaY > 50) {
        // Swipe down - go to previous
        goToPreviousGroup(stepSize);
      } else if (deltaY < -50) {
        // Swipe up - go to next
        goToNextGroup(stepSize);
      }
    }
  };
  
  // Get background color based on display mode
  const getBackgroundColor = () => {
    switch (displayMode) {
      case 'high-contrast':
        return 'bg-white text-black';
      case 'yellow-black':
        return 'bg-black text-yellow-300';
      case 'black-white':
        return 'bg-white text-black';
      default:
        return 'bg-white dark:bg-gray-900 text-black dark:text-white';
    }
  };
  
  // Get text style based on display mode
  const getTextStyle = (lineType: 'chord' | 'lyric' | 'other') => {
    const baseStyle = 'block py-0.5';
    
    if (lineType === 'chord') {
      switch (displayMode) {
        case 'high-contrast':
          return `${baseStyle} text-blue-700 font-bold`;
        case 'yellow-black':
          return `${baseStyle} text-yellow-300 font-bold`;
        case 'black-white':
          return `${baseStyle} text-black font-bold`;
        default:
          return `${baseStyle} text-blue-600 dark:text-blue-400`;
      }
    }
    
    return baseStyle;
  };
  
  // Get highlight style for current group
  const getHighlightStyle = (lineIndex: number) => {
    if (lineGroups.length === 0 || currentGroupIndex >= lineGroups.length) return '';
    
    const currentGroup = lineGroups[currentGroupIndex];
    if (lineIndex === currentGroup.chordLine || lineIndex === currentGroup.lyricLine) {
      switch (displayMode) {
        case 'high-contrast':
          return 'bg-yellow-200 font-bold';
        case 'yellow-black':
          return 'bg-yellow-900 font-bold';
        case 'black-white':
          return 'bg-gray-200 font-bold';
        default:
          return 'bg-blue-100 dark:bg-blue-900';
      }
    }
    
    return '';
  };
  
  return (
    <div 
      className={`flex flex-col h-full relative ${getBackgroundColor()}`}
      onClick={() => setShowControls(!showControls)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        ref={containerRef}
        className="relative w-full h-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <pre
          ref={contentRef}
          className="w-full h-full overflow-y-auto px-[2%]"
          style={{
            fontSize: `${localFontSize}px`,
            backgroundColor: getBackgroundColor(),
            color: displayMode === 'yellow-black' ? '#FFD700' : displayMode === 'black-white' ? '#000000' : undefined,
          }}
        >
          {lines.map((line, index) => (
            <span
              key={index}
              ref={(el) => { lineRefs.current[index] = el; }}
              className={`${getTextStyle(lineTypes[index])} ${getHighlightStyle(index)} block py-1`}
            >
              {line}
              {index < lines.length - 1 ? '\n' : ''}
            </span>
          ))}
        </pre>
      </div>
      
      {/* Font size controls */}
      {showControls && (
        <div 
          className="absolute bottom-4 left-0 right-0 flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-lg mx-4 p-4 z-10"
          onClick={(e) => e.stopPropagation()} // Prevent clicks from closing the menu
          aria-label="Font size controls"
          role="dialog"
        >
          <div className="flex items-center justify-between w-full mb-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                adjustFontSize(-2);
              }}
              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full"
              aria-label="Decrease font size"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            
            <span className="text-sm font-medium" id="font-size-value" aria-live="polite">{localFontSize}px</span>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                adjustFontSize(2);
              }}
              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full"
              aria-label="Increase font size"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
          
          <input
            type="range"
            min="12"
            max="48"
            value={localFontSize}
            onChange={(e) => {
              const newSize = parseInt(e.target.value);
              setLocalFontSize(newSize);
              if (setFontSize) {
                setFontSize(newSize);
              }
            }}
            onClick={(e) => e.stopPropagation()}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mb-2"
            aria-labelledby="font-size-value"
          />
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              autoScaleFontSize();
            }}
            className="w-full p-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100 rounded-lg text-sm font-medium"
            aria-label="Auto-scale text to fit screen"
          >
            Auto-scale Text
          </button>
          
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400" aria-label="Keyboard shortcuts">
            <p>Keyboard shortcuts:</p>
            <p>+/- to adjust size, 0 to auto-scale</p>
            <p>↑/↓ or PageUp/PageDown to navigate</p>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <label htmlFor="step-size" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Lines per step
            </label>
            <select
              id="step-size"
              value={stepSize}
              onChange={(e) => setStepSize?.(Number(e.target.value))}
              className="w-full p-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <option value="1">1 line</option>
              <option value="2">2 lines</option>
              <option value="3">3 lines</option>
            </select>
          </div>
        </div>
      )}
      
      {/* Tap navigation hints */}
      {showTapHint && (
        <>
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-lg text-sm">
            Tap for<br />previous
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-lg text-sm">
            Tap for<br />next
          </div>
        </>
      )}
      
      {/* Invisible tap areas for navigation */}
      <div 
        className="absolute top-0 left-0 w-1/3 h-full z-0"
        onClick={(e) => {
          e.stopPropagation();
          if (!isNavigating) {
            goToPreviousGroup(stepSize);
          }
        }}
      />
      <div 
        className="absolute top-0 right-0 w-1/3 h-full z-0"
        onClick={(e) => {
          e.stopPropagation();
          if (!isNavigating) {
            goToNextGroup(stepSize);
          }
        }}
      />
    </div>
  );
} 