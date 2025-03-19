'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Song } from '@/types/song';
import LeadsheetDisplay, { DisplayMode } from '@/app/components/LeadsheetDisplay';

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
  const [fullscreen, setFullscreen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [displayMode, setDisplayMode] = useState<DisplayMode>('default');
  
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
      // Display mode cycling
      else if (e.key === 'd' && !e.repeat) {
        e.preventDefault();
        setDisplayMode(mode => {
          const modes: DisplayMode[] = ['default', 'high-contrast', 'yellow-black', 'black-white'];
          const currentIndex = modes.indexOf(mode);
          return modes[(currentIndex + 1) % modes.length];
        });
      }
      // Escape key to close panels
      else if (e.key === 'Escape') {
        e.preventDefault();
        if (showInfo) setShowInfo(false);
        else if (fullscreen) setFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullscreen, showInfo]);

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
                onClick={() => setDisplayMode(mode => {
                  const modes: DisplayMode[] = ['default', 'high-contrast', 'yellow-black', 'black-white'];
                  const currentIndex = modes.indexOf(mode);
                  return modes[(currentIndex + 1) % modes.length];
                })}
                className={`px-3 py-2 rounded-lg flex items-center ${
                  displayMode !== 'default'
                    ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                    : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
                }`}
                aria-label="Change display mode"
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
          displayMode={displayMode}
        />
      </div>
      
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
                      <span>Cycle display modes</span>
                      <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 rounded">d</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Controls</h4>
                  <ul className="space-y-1 text-sm">
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