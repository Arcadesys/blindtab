'use client';

import { useState } from 'react';
import { LeadsheetDisplay } from '@/app/components/LeadsheetDisplay';
import ControlsPanel from '@/app/components/ControlsPanel';
import { Tag } from '@prisma/client';
import Link from 'next/link';

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
  const [fontSize, setFontSize] = useState(24);
  const [showControls, setShowControls] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      {/* Header with minimal info and toggle buttons */}
      <div className="bg-white dark:bg-gray-800 p-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/songs" className="mr-4 text-blue-600 dark:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <div>
            <h1 className="text-xl font-bold truncate max-w-xs">{song.title}</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 truncate max-w-xs">{song.artist}</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={() => setShowInfo(!showInfo)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            aria-label="Toggle song information"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <button 
            onClick={() => setShowControls(!showControls)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            aria-label="Toggle controls"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Main content area with flexible layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Song Info Panel - Collapsible */}
        {showInfo && (
          <div className="w-64 bg-white dark:bg-gray-800 p-4 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Song Details</h2>
              <div className="space-y-2">
                <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                  <span className="block text-xs text-gray-500 dark:text-gray-400">Key</span>
                  <span className="font-medium">{song.key || 'Not specified'}</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                  <span className="block text-xs text-gray-500 dark:text-gray-400">Tempo</span>
                  <span className="font-medium">{song.tempo ? `${song.tempo} BPM` : 'Not specified'}</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                  <span className="block text-xs text-gray-500 dark:text-gray-400">Time Signature</span>
                  <span className="font-medium">{song.timeSignature || 'Not specified'}</span>
                </div>
              </div>
            </div>
            
            {song.tags && song.tags.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Tags</h3>
                <div className="flex flex-wrap gap-1">
                  {song.tags.map((tag) => (
                    <span 
                      key={tag.id} 
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Leadsheet Display - Takes all available space */}
        <div className="flex-1 overflow-hidden">
          <div className="h-full bg-white dark:bg-gray-800 p-2">
            <LeadsheetDisplay 
              content={song.content} 
              autoScroll={autoScroll} 
              fontSize={fontSize} 
            />
          </div>
        </div>
      </div>
      
      {/* Controls Panel - Collapsible */}
      {showControls && (
        <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <ControlsPanel 
            onAutoScrollToggle={setAutoScroll}
            onFontSizeChange={setFontSize}
            onTempoChange={(newTempo) => console.log(`Tempo changed to ${newTempo}`)}
            defaultTempo={song.tempo || 100}
            defaultAutoScroll={autoScroll}
            defaultFontSize={fontSize}
          />
        </div>
      )}
    </div>
  );
} 