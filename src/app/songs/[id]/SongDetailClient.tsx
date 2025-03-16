'use client';

import { useState, useEffect } from 'react';
import { LeadsheetDisplay } from '@/app/components/LeadsheetDisplay';
import ControlsPanel from '@/app/components/ControlsPanel';
import { Tag } from '@prisma/client';
import Link from 'next/link';

type DisplayMode = 'default' | 'high-contrast' | 'yellow-black' | 'black-white';

interface Song {
  id: string;
  title: string;
  artist: string;
  content: string;
  key: string | null;
  tempo: number | null;
  timeSignature: string | null;
  tags: Tag[];
}

interface SongDetailClientProps {
  song: Song;
}

export default function SongDetailClient({ song }: SongDetailClientProps) {
  const [autoScroll, setAutoScroll] = useState(false);
  const [fontSize, setFontSize] = useState(28);
  const [showControls, setShowControls] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [displayMode, setDisplayMode] = useState<DisplayMode>('default');
  const [showDisplayOptions, setShowDisplayOptions] = useState(false);
  const [showControlsPanel, setShowControlsPanel] = useState(false);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'f' && !e.repeat) {
        e.preventDefault();
        setFullscreen(!fullscreen);
      } else if (e.key === 'i' && !e.repeat) {
        e.preventDefault();
        setShowInfo(!showInfo);
      } else if (e.key === 'c' && !e.repeat) {
        e.preventDefault();
        setShowControlsPanel(!showControlsPanel);
      } else if (e.key === 'd' && !e.repeat) {
        e.preventDefault();
        setShowDisplayOptions(!showDisplayOptions);
      } else if (e.key === 'Escape' && fullscreen) {
        e.preventDefault();
        setFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullscreen, showInfo, showControlsPanel, showDisplayOptions]);

  return (
    <div className={`flex flex-col ${fullscreen ? 'h-screen' : 'h-screen'}`}>
      {/* Header with minimal info and toggle buttons - hide in fullscreen mode */}
      {!fullscreen && (
        <div className="bg-white dark:bg-gray-800 p-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/songs" className="mr-2 md:mr-4 text-blue-600 dark:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            <div>
              <h1 className="text-lg md:text-xl font-bold truncate max-w-[150px] sm:max-w-xs">{song.title}</h1>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 truncate max-w-[150px] sm:max-w-xs">{song.artist}</p>
            </div>
          </div>
          
          {/* Desktop controls */}
          <div className="hidden sm:flex gap-2">
            <button 
              onClick={() => setShowInfo(!showInfo)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              aria-label="Toggle song information"
              title="Toggle song information (I)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button 
              onClick={() => setShowControlsPanel(!showControlsPanel)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              aria-label="Toggle controls"
              title="Toggle controls (C)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            <button 
              onClick={() => setShowDisplayOptions(!showDisplayOptions)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              aria-label="Display options"
              title="Display options (D)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            <button 
              onClick={() => setFullscreen(!fullscreen)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              aria-label={fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              title={fullscreen ? "Exit fullscreen (F or Esc)" : "Enter fullscreen (F)"}
            >
              {fullscreen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              aria-label="Toggle mobile menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      )}
      
      {/* Mobile menu */}
      {!fullscreen && mobileMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-gray-800 p-2 border-b border-gray-200 dark:border-gray-700 flex justify-around">
          <button 
            onClick={() => {
              setShowInfo(!showInfo);
              setMobileMenuOpen(false);
            }}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex flex-col items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs mt-1">Info</span>
          </button>
          <button 
            onClick={() => {
              setShowControlsPanel(!showControlsPanel);
              setMobileMenuOpen(false);
            }}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex flex-col items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs mt-1">Controls</span>
          </button>
          <button 
            onClick={() => {
              setShowDisplayOptions(!showDisplayOptions);
              setMobileMenuOpen(false);
            }}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex flex-col items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs mt-1">Display</span>
          </button>
          <button 
            onClick={() => {
              setFullscreen(!fullscreen);
              setMobileMenuOpen(false);
            }}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex flex-col items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
            </svg>
            <span className="text-xs mt-1">Fullscreen</span>
          </button>
        </div>
      )}

      {/* Display options panel */}
      {!fullscreen && showDisplayOptions && (
        <div className="bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Display Options</h2>
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
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <button
              onClick={() => setDisplayMode('default')}
              className={`p-3 rounded-lg border-2 flex flex-col items-center ${
                displayMode === 'default' 
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900 dark:border-blue-400' 
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="w-full h-12 bg-white dark:bg-gray-800 rounded mb-2 flex flex-col">
                <div className="text-blue-600 dark:text-blue-400 text-xs font-bold px-1">Am F C G</div>
                <div className="px-1 text-xs">Lyrics here</div>
                <div className="bg-blue-100 dark:bg-blue-900 px-1 text-xs mt-1">Selected line</div>
              </div>
              <span className="text-xs">Default</span>
            </button>
            
            <button
              onClick={() => setDisplayMode('high-contrast')}
              className={`p-3 rounded-lg border-2 flex flex-col items-center ${
                displayMode === 'high-contrast' 
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900 dark:border-blue-400' 
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="w-full h-12 bg-gray-900 rounded mb-2 flex flex-col">
                <div className="text-yellow-500 text-xs font-bold px-1">Am F C G</div>
                <div className="text-white px-1 text-xs">Lyrics here</div>
                <div className="bg-blue-600 text-white px-1 text-xs mt-1">Selected line</div>
              </div>
              <span className="text-xs">High Contrast</span>
            </button>
            
            <button
              onClick={() => setDisplayMode('yellow-black')}
              className={`p-3 rounded-lg border-2 flex flex-col items-center ${
                displayMode === 'yellow-black' 
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900 dark:border-blue-400' 
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="w-full h-12 bg-black rounded mb-2 flex flex-col">
                <div className="text-yellow-500 text-xs font-bold px-1">Am F C G</div>
                <div className="text-white px-1 text-xs">Lyrics here</div>
                <div className="bg-yellow-400 text-black px-1 text-xs mt-1">Selected line</div>
              </div>
              <span className="text-xs">Yellow on Black</span>
            </button>
            
            <button
              onClick={() => setDisplayMode('black-white')}
              className={`p-3 rounded-lg border-2 flex flex-col items-center ${
                displayMode === 'black-white' 
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900 dark:border-blue-400' 
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="w-full h-12 bg-black rounded mb-2 flex flex-col">
                <div className="text-white text-xs font-bold px-1">Am F C G</div>
                <div className="text-gray-300 px-1 text-xs">Lyrics here</div>
                <div className="bg-white text-black px-1 text-xs mt-1">Selected line</div>
              </div>
              <span className="text-xs">Black & White</span>
            </button>
          </div>
        </div>
      )}

      {/* Main content area */}
      <div className="flex flex-col md:flex-row flex-grow overflow-hidden">
        {/* Song info panel - conditionally shown */}
        {showInfo && (
          <div className="bg-white dark:bg-gray-800 p-4 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 md:w-64 md:overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Song Information</h2>
            
            <div className="mb-4">
              <h3 className="font-semibold mb-1">Title</h3>
              <p>{song.title}</p>
            </div>
            
            <div className="mb-4">
              <h3 className="font-semibold mb-1">Artist</h3>
              <p>{song.artist}</p>
            </div>
            
            {song.key && (
              <div className="mb-4">
                <h3 className="font-semibold mb-1">Key</h3>
                <p>{song.key}</p>
              </div>
            )}
            
            {song.tempo && (
              <div className="mb-4">
                <h3 className="font-semibold mb-1">Tempo</h3>
                <p>{song.tempo} BPM</p>
              </div>
            )}
            
            {song.timeSignature && (
              <div className="mb-4">
                <h3 className="font-semibold mb-1">Time Signature</h3>
                <p>{song.timeSignature}</p>
              </div>
            )}
            
            {song.tags.length > 0 && (
              <div className="mb-4">
                <h3 className="font-semibold mb-1">Tags</h3>
                <div className="flex flex-wrap gap-1">
                  {song.tags.map(tag => (
                    <span 
                      key={tag.id} 
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-1 rounded text-xs"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mt-6 flex flex-col gap-2">
              <Link 
                href={`/songs/${song.id}/edit`} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-center"
              >
                Edit Song
              </Link>
              <button 
                onClick={() => setShowInfo(false)}
                className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 px-4 py-2 rounded text-center"
              >
                Close Info
              </button>
            </div>
          </div>
        )}
        
        {/* Main leadsheet display */}
        <div className="flex-grow overflow-auto relative">
          <LeadsheetDisplay 
            content={song.content} 
            fontSize={fontSize}
            setFontSize={setFontSize}
            autoScroll={autoScroll}
            displayMode={displayMode}
          />
        </div>
        
        {/* Controls panel - conditionally shown */}
        {showControlsPanel && (
          <div className="bg-white dark:bg-gray-800 p-4 border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700 md:w-64">
            <ControlsPanel 
              fontSize={fontSize}
              setFontSize={setFontSize}
              autoScroll={autoScroll}
              setAutoScroll={setAutoScroll}
              onClose={() => setShowControlsPanel(false)}
              tempo={song.tempo || 120}
            />
          </div>
        )}
      </div>
    </div>
  );
} 