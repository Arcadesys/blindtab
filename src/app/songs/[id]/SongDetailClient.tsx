'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';
import { Song } from '@/types/song';
import LeadsheetDisplay from '@/app/components/LeadsheetDisplay';
import ControlsPanel from '@/app/components/ControlsPanel';
import TagBadge from '@/app/components/TagBadge';
import TranspositionControls, { DisplayMode as ChordDisplayMode } from '@/app/components/TranspositionControls';
import { ChordNote } from '@/utils/chordUtils';

type DisplayMode = 'default' | 'high-contrast' | 'yellow-black' | 'black-white';

interface SongDetailClientProps {
  song: Song;
}

export default function SongDetailClient({ song }: SongDetailClientProps) {
  const { isAuthenticated, loading } = useAuth();
  const [fontSize, setFontSize] = useState(36);
  const [displayMode, setDisplayMode] = useState<DisplayMode>('default');
  const [showDisplayOptions, setShowDisplayOptions] = useState(false);
  const [showControlsPanel, setShowControlsPanel] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [autoScroll, setAutoScroll] = useState(false);
  const [stepSize, setStepSize] = useState(1);
  const [fullscreen, setFullscreen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  
  // Transposition state
  const [showTransposition, setShowTransposition] = useState(false);
  const [transpositionParams, setTranspositionParams] = useState<{
    targetKey: ChordNote;
    semitones: number;
    displayMode: ChordDisplayMode;
    preferFlats: boolean;
  } | null>(null);
  
  // Sound effects
  const transposeSoundRef = useRef<HTMLAudioElement | null>(null);
  
  // Initialize audio elements
  useEffect(() => {
    // We won't try to load any audio files since they don't exist
    // Instead, we'll just set up console logging for actions
    if (typeof window !== 'undefined') {
      console.debug('Setting up audio placeholders');
      transposeSoundRef.current = null;
    }
    
    return () => {
      // Clean up audio elements
      if (transposeSoundRef.current) {
        transposeSoundRef.current = null;
      }
    };
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't handle keyboard shortcuts if user is in an input field
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.key === 'f') {
        // Toggle fullscreen
        setFullscreen(!fullscreen);
        setShowHeader(false);
      } else if (e.key === 'i') {
        // Toggle info panel
        setShowInfo(!showInfo);
      } else if (e.key === 'c') {
        // Toggle controls panel
        setShowControlsPanel(!showControlsPanel);
      } else if (e.key === 'd') {
        // Toggle display options
        setShowDisplayOptions(!showDisplayOptions);
      } else if (e.key === 'a') {
        // Toggle auto-scroll
        setAutoScroll(!autoScroll);
      } else if (e.key === 't') {
        // Toggle transposition panel
        setShowTransposition(!showTransposition);
      } else if (e.key === 'h') {
        // Toggle header
        setShowHeader(!showHeader);
      } else if (e.key === 'Escape') {
        // Esc returns to normal view from any mode
        setFullscreen(false);
        setShowHeader(true);
        setShowDisplayOptions(false);
        setShowTransposition(false);
        setShowControlsPanel(false);
        setShowInfo(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullscreen, showInfo, showControlsPanel, showDisplayOptions, autoScroll, showTransposition, showHeader]);

  // Handle transposition changes
  const handleTranspositionChange = (params: {
    targetKey: ChordNote;
    semitones: number;
    displayMode: ChordDisplayMode;
    preferFlats: boolean;
  }) => {
    // Only update if params have changed to prevent infinite loops
    if (
      !transpositionParams ||
      transpositionParams.targetKey !== params.targetKey ||
      transpositionParams.semitones !== params.semitones ||
      transpositionParams.displayMode !== params.displayMode ||
      transpositionParams.preferFlats !== params.preferFlats
    ) {
      setTranspositionParams(params);
      
      // For now, don't try to play sounds since we don't have the files
      console.debug('Transpose sound would play here');
    }
  };

  return (
    <div className={`relative min-h-screen pb-20 md:pb-0 ${fullscreen ? 'bg-[#121a29]' : 'bg-[#121a29]'}`}>
      {/* Collapsible Header */}
      {showHeader && (
        <div className="bg-[#0c1422] shadow-md">
          <div className="container mx-auto px-0 py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold truncate text-white">{song.title}</h1>
                <p className="text-gray-400">{song.artist}</p>
                
                {/* Song Metadata */}
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  {song.key && (
                    <span className="text-sm bg-[#1d293d] text-gray-300 px-2 py-1 rounded">
                      Key: {song.key}
                    </span>
                  )}
                  
                  {song.tempo && (
                    <span className="text-sm bg-[#1d293d] text-gray-300 px-2 py-1 rounded">
                      {song.tempo} BPM
                    </span>
                  )}
                  
                  {song.timeSignature && (
                    <span className="text-sm bg-[#1d293d] text-gray-300 px-2 py-1 rounded">
                      {song.timeSignature}
                    </span>
                  )}
                </div>
                
                {/* Tags */}
                {song.tags && song.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {song.tags.map(tag => (
                      <TagBadge key={tag.id} tag={tag} size="small" />
                    ))}
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setShowControlsPanel(true)}
                  className="px-3 py-2 bg-blue-900 text-blue-300 rounded-lg flex items-center"
                  aria-label="Show controls"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  Controls
                </button>
                
                <button
                  onClick={() => setShowDisplayOptions(!showDisplayOptions)}
                  className={`px-3 py-2 rounded-lg flex items-center ${
                    displayMode !== 'default'
                      ? 'bg-yellow-900 text-yellow-300'
                      : 'bg-[#1d293d] text-gray-300'
                  }`}
                  aria-label="Display options"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  Display
                </button>
                
                {song.key && (
                  <button
                    onClick={() => setShowTransposition(!showTransposition)}
                    className={`px-3 py-2 rounded-lg flex items-center ${
                      transpositionParams 
                        ? 'bg-green-900 text-green-300'
                        : 'bg-[#1d293d] text-gray-300'
                    }`}
                    aria-label="Transpose chords"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
                    </svg>
                    Transpose
                  </button>
                )}
                
                <button
                  onClick={() => {
                    setFullscreen(!fullscreen);
                    setShowHeader(false);
                  }}
                  className={`px-3 py-2 rounded-lg flex items-center
                    ${fullscreen 
                      ? 'bg-red-900 text-red-300'
                      : 'bg-[#1d293d] text-gray-300'
                    }`}
                  aria-label="Toggle fullscreen"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  {fullscreen ? 'Exit' : 'Fullscreen'}
                </button>
                
                {/* Only show Edit button if authenticated and not loading */}
                {loading ? (
                  <div className="px-3 py-2 rounded-lg bg-[#1d293d] text-gray-500 flex items-center animate-pulse" style={{ minWidth: 80 }}>
                    <svg className="h-5 w-5 mr-1" /> Loading...
                  </div>
                ) : isAuthenticated ? (
                  <Link
                    href={`/edit/${song.id}`}
                    className="px-3 py-2 bg-[#1d293d] text-gray-300 rounded-lg flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    Edit
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Mini header for fullscreen mode */}
      {!showHeader && (
        <div className="fixed top-2 right-2 z-30 flex gap-2">
          <button
            onClick={() => setShowHeader(true)}
            className="p-2 bg-black bg-opacity-70 text-white rounded-full shadow-lg"
            aria-label="Show header"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>
      )}
      
      {/* Main content */}
      <div className={`container mx-auto px-0 ${fullscreen ? 'py-0' : 'py-6'}`}>
        <LeadsheetDisplay 
          content={song.content} 
          fontSize={fontSize}
          setFontSize={setFontSize}
          autoScroll={autoScroll}
          displayMode={displayMode}
          stepSize={stepSize}
          setStepSize={setStepSize}
          originalKey={song.key as ChordNote | null}
          transpositionParams={transpositionParams}
        />
      </div>
      
      {/* Display options panel */}
      {showDisplayOptions && (
        <div className="fixed inset-x-0 bottom-0 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700 p-4 z-20">
          <div className="container mx-auto px-0">
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Display Options</h3>
                <button 
                  onClick={() => setShowDisplayOptions(false)}
                  className="p-1 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                  aria-label="Close display options"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex flex-wrap gap-4 md:justify-center">
                <button
                  onClick={() => setDisplayMode('default')}
                  className={`p-3 rounded-lg flex flex-col items-center justify-center ${
                    displayMode === 'default' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'bg-gray-100 dark:bg-gray-800'
                  }`}
                >
                  <div className="w-full h-8 border border-gray-300 dark:border-gray-600 rounded flex items-center justify-center mb-2 bg-white dark:bg-gray-800">
                    <span className="text-sm">Aa</span>
                  </div>
                  <span className="text-sm">Default</span>
                </button>
                
                <button
                  onClick={() => setDisplayMode('high-contrast')}
                  className={`p-3 rounded-lg flex flex-col items-center justify-center ${
                    displayMode === 'high-contrast' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'bg-gray-100 dark:bg-gray-800'
                  }`}
                >
                  <div className="w-full h-8 border border-gray-300 dark:border-gray-600 rounded flex items-center justify-center mb-2 bg-white">
                    <span className="text-sm text-black font-bold">Aa</span>
                  </div>
                  <span className="text-sm">High Contrast</span>
                </button>
                
                <button
                  onClick={() => setDisplayMode('yellow-black')}
                  className={`p-3 rounded-lg flex flex-col items-center justify-center ${
                    displayMode === 'yellow-black' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'bg-gray-100 dark:bg-gray-800'
                  }`}
                >
                  <div className="w-full h-8 border border-gray-300 dark:border-gray-600 rounded flex items-center justify-center mb-2 bg-black">
                    <span className="text-sm text-yellow-300">Aa</span>
                  </div>
                  <span className="text-sm">Yellow on Black</span>
                </button>
                
                <button
                  onClick={() => setDisplayMode('black-white')}
                  className={`p-3 rounded-lg flex flex-col items-center justify-center ${
                    displayMode === 'black-white' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'bg-gray-100 dark:bg-gray-800'
                  }`}
                >
                  <div className="w-full h-8 border border-gray-300 dark:border-gray-600 rounded flex items-center justify-center mb-2 bg-white">
                    <span className="text-sm text-black font-bold">Aa</span>
                  </div>
                  <span className="text-sm">Black & White</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Transposition panel */}
      {showTransposition && song.key && (
        <div className="fixed inset-x-0 bottom-0 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700 p-4 z-20">
          <div className="container mx-auto px-0">
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Chord Transposition</h3>
                <button 
                  onClick={() => setShowTransposition(false)}
                  className="p-1 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                  aria-label="Close transposition panel"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="md:max-w-lg mx-auto">
                <TranspositionControls
                  originalKey={song.key as ChordNote}
                  onChange={handleTranspositionChange}
                  className="bg-gray-50 dark:bg-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Controls panel */}
      {showControlsPanel && (
        <ControlsPanel
          onClose={() => setShowControlsPanel(false)}
          onShowInfo={() => setShowInfo(true)}
        />
      )}
      
      {/* Info panel (keyboard shortcuts) */}
      {showInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-md">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Keyboard Shortcuts</h3>
                <button 
                  onClick={() => setShowInfo(false)}
                  className="p-1 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Navigation</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex justify-between">
                      <span>Next line/chord</span>
                      <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 rounded">↓, PageDown, Space, j</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Previous line/chord</span>
                      <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 rounded">↑, PageUp, k</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Go to start</span>
                      <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 rounded">Home</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Go to end</span>
                      <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 rounded">End</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Display</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex justify-between">
                      <span>Font size controls</span>
                      <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 rounded">f</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Increase font size</span>
                      <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 rounded">+, =</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Decrease font size</span>
                      <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 rounded">-, _</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Auto-scale font</span>
                      <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 rounded">0</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Display options</span>
                      <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 rounded">d</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Transpose chords</span>
                      <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 rounded">t</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Application</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex justify-between">
                      <span>Show controls</span>
                      <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 rounded">c</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Toggle info panel</span>
                      <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 rounded">i</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Toggle fullscreen</span>
                      <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 rounded">f</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 