'use client';

import { useState } from 'react';
import { LeadsheetDisplay } from '@/app/components/LeadsheetDisplay';
import ControlsPanel from '@/app/components/ControlsPanel';
import { Tag } from '@prisma/client';

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
  const [fontSize, setFontSize] = useState(16);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Song Info and Controls - Left Column */}
        <div className="lg:col-span-1 space-y-6">
          {/* Song Info Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h1 className="text-3xl font-bold mb-2">{song.title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">{song.artist}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                <span className="block text-sm text-gray-500 dark:text-gray-400">Key</span>
                <span className="text-lg font-medium">{song.key}</span>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                <span className="block text-sm text-gray-500 dark:text-gray-400">Tempo</span>
                <span className="text-lg font-medium">{song.tempo} BPM</span>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                <span className="block text-sm text-gray-500 dark:text-gray-400">Time Signature</span>
                <span className="text-lg font-medium">{song.timeSignature}</span>
              </div>
            </div>
            
            {song.tags && song.tags.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
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
          
          {/* Controls Panel */}
          <ControlsPanel 
            onAutoScrollToggle={setAutoScroll}
            onFontSizeChange={setFontSize}
            onTempoChange={(newTempo) => console.log(`Tempo changed to ${newTempo}`)}
            defaultTempo={song.tempo || 100}
            defaultAutoScroll={false}
            defaultFontSize={16}
          />
        </div>
        
        {/* Leadsheet Display - Right Column */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 min-h-[70vh]">
            <LeadsheetDisplay 
              content={song.content} 
              autoScroll={autoScroll} 
              fontSize={fontSize} 
            />
          </div>
        </div>
      </div>
    </div>
  );
} 