'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Song } from '@/types/song';
import LeadsheetDisplay, { DisplayMode } from '@/app/components/LeadsheetDisplay';
import ControlsPanel from '@/app/components/ControlsPanel';

type DisplayMode = 'default' | 'high-contrast' | 'yellow-black' | 'black-white';

interface Song {
  id: string;
  title: string;
  artist: string;
  content: string;
  key: string | null;
  tempo: number | null;
  timeSignature: string | null;
}

interface SongDetailClientProps {
  song: Song;
}

export default function SongDetailClient({ song }: SongDetailClientProps) {
  const [fontSize, setFontSize] = useState(28);
  const [autoScroll, setAutoScroll] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [displayMode, setDisplayMode] = useState<DisplayMode>('default');
  const [showDisplayOptions, setShowDisplayOptions] = useState(false);
  const [showControlsPanel, setShowControlsPanel] = useState(false);
  const [stepSize, setStepSize] = useState(1);
  
  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts if user is typing in an input field
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      
      // Fullscreen toggle
      if (e.key === 'f' && e.ctrlKey) {
        e.preventDefault();
        setFullscreen(!fullscreen);
      } 
      // Info toggle
      else if (e.key === 'i' && !e.repeat) {
        e.preventDefault();
        setShowInfo(!showInfo);
      } 
      // Controls panel toggle
      else if (e.key === 'c' && !e.repeat) {
        e.preventDefault();
        setShowControlsPanel(!showControlsPanel);
      } 
      // Display options toggle
      else if (e.key === 'd' && !e.repeat) {
        e.preventDefault();
        setShowDisplayOptions(!showDisplayOptions);
      }
      // Auto-scroll toggle
      else if (e.key === 'a' && !e.repeat) {
        e.preventDefault();
        setAutoScroll(!autoScroll);
      }
      // Escape key to close panels
      else if (e.key === 'Escape') {
        e.preventDefault();
        if (showControlsPanel) setShowControlsPanel(false);
        else if (showDisplayOptions) setShowDisplayOptions(false);
        else if (showInfo) setShowInfo(false);
        else if (fullscreen) setFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullscreen, showInfo, showControlsPanel, showDisplayOptions, autoScroll]);

  return (
    <div className="relative min-h-screen pb-20 md:pb-0">
      {/* Header - removed sticky positioning */}
      <div className="bg-white dark:bg-gray-900 shadow-md">
        <div className="container mx-auto px-0 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold truncate">{song.title}</h1>
              <p className="text-gray-600 dark:text-gray-400">{song.artist}</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setShowControlsPanel(true)}
                className="px-3 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-lg flex items-center"
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
                    ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                    : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
                }`}
                aria-label="Display options"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                Display
              </button>
              
              <Link
                href={`/edit/${song.id}`}
                className="px-3 py-2 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-lg flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-0 py-6">
        <LeadsheetDisplay 
          content={song.content} 
          fontSize={fontSize}
          setFontSize={setFontSize}
          autoScroll={autoScroll}
          displayMode={displayMode}
          stepSize={stepSize}
          setStepSize={setStepSize}
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
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <button
                  onClick={() => setDisplayMode('default')}
                  className={`p-3 rounded-lg flex flex-col items-center justify-center ${
                    displayMode === 'default' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'bg-gray-100 dark:bg-gray-800'
                  }`}
                >
                  <div className="w-full h-8 border border-gray-300 dark:border-gray-600 rounded flex items-center justify-center mb-2 bg-white dark:bg-gray-900">
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
                  <div className="w-full h-8 border border-gray-300 dark:border-gray-600 rounded flex items-center justify-center mb-2 bg-white dark:bg-gray-900">
                    <span className="text-sm font-bold">Aa</span>
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
      
      {/* Controls panel */}
      {showControlsPanel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-md h-[80vh] overflow-hidden">
            <div className="p-4 h-full">
              <ControlsPanel
                fontSize={fontSize}
                setFontSize={setFontSize}
                autoScroll={autoScroll}
                setAutoScroll={setAutoScroll}
                onClose={() => setShowControlsPanel(false)}
                tempo={song.tempo || 100}
                stepSize={stepSize}
                setStepSize={setStepSize}
              />
            </div>
          </div>
        </div>
      )}
      
      {/* Keyboard shortcuts help */}
      <div className="fixed bottom-4 right-4 z-10">
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full shadow-md"
          aria-label="Keyboard shortcuts"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      {/* Keyboard shortcuts info panel */}
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
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Controls</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex justify-between">
                      <span>Toggle controls panel</span>
                      <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 rounded">c</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Toggle auto-scroll</span>
                      <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 rounded">a</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Close panels</span>
                      <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 rounded">Esc</span>
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