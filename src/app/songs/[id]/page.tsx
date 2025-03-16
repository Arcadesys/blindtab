'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { LeadsheetDisplay } from '@/app/components/LeadsheetDisplay';
import ControlsPanel from '@/app/components/ControlsPanel';
import { Tag } from '@prisma/client';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const song = await getSong(params.id);
  
  if (!song) {
    return {
      title: 'Song Not Found',
    };
  }
  
  return {
    title: `${song.title} by ${song.artist} | BlindTab`,
    description: `View chord chart and lyrics for ${song.title} by ${song.artist}`,
  };
}

async function getSong(id: string) {
  try {
    const song = await prisma.song.findUnique({
      where: {
        id,
      },
      include: {
        tags: true,
      },
    });
    
    return song;
  } catch (error) {
    console.error('Error fetching song:', error);
    return null;
  }
}

function formatMarkdown(content: string) {
  // This is a simple markdown parser for the song content
  // In a real app, you'd use a proper markdown library
  
  // Format the title (# Title)
  content = content.replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mb-6">$1</h1>');
  
  // Add line breaks
  content = content.replace(/\n\n/g, '<br><br>');
  
  // Keep chord formatting
  content = content.replace(/^([A-G][#b]?[m]?[7]?[\s\t]+)+(.*)$/gm, 
    '<div class="chord-line"><span class="chord">$&</span></div>');
  
  // Format notes/comments
  content = content.replace(/\*(.+)\*/g, '<em class="text-gray-600">$1</em>');
  
  return content;
}

export default function SongDetailPage() {
  const params = useParams();
  const [song, setSong] = useState<Song | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [autoScroll, setAutoScroll] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const response = await fetch(`/api/songs/${params.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch song');
        }
        const data = await response.json();
        setSong(data);
      } catch (err) {
        setError('Error loading song. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchSong();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !song) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 p-4 rounded-lg max-w-md">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error || 'Song not found'}</p>
        </div>
      </div>
    );
  }

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
            defaultTempo={song.tempo}
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