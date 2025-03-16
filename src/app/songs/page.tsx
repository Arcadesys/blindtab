'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Tag } from '@prisma/client';

interface Song {
  id: string;
  title: string;
  artist: string;
  key: string | null;
  tempo: number | null;
  timeSignature: string | null;
  tags: Tag[];
}

export default function SongsPage() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch('/api/songs');
        if (!response.ok) {
          throw new Error('Failed to fetch songs');
        }
        const data = await response.json();
        setSongs(data);
      } catch (err) {
        setError('Error loading songs. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const fetchTags = async () => {
      try {
        const response = await fetch('/api/tags');
        if (!response.ok) {
          throw new Error('Failed to fetch tags');
        }
        const data = await response.json();
        setTags(data);
      } catch (err) {
        console.error('Error loading tags:', err);
      }
    };

    fetchSongs();
    fetchTags();
  }, []);

  // Filter songs based on search term and selected tag
  const filteredSongs = songs.filter((song) => {
    const matchesSearch = 
      searchTerm === '' || 
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = 
      selectedTag === null || 
      song.tags.some(tag => tag.id === selectedTag);
    
    return matchesSearch && matchesTag;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 p-4 rounded-lg max-w-md">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6 md:py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">Songs</h1>
        <Link 
          href="/songs/create" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full sm:w-auto text-center"
        >
          Create Song
        </Link>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 md:mb-8 bg-white dark:bg-gray-800 p-3 md:p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search Input */}
          <div>
            <label htmlFor="search" className="block text-sm font-medium mb-1">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                id="search"
                type="text"
                placeholder="Search by title or artist..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </div>

          {/* Tag Filter */}
          {tags.length > 0 && (
            <div>
              <label htmlFor="tag-filter" className="block text-sm font-medium mb-1">Filter by Tag</label>
              <select
                id="tag-filter"
                value={selectedTag || ''}
                onChange={(e) => setSelectedTag(e.target.value || null)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="">All Tags</option>
                {tags.map((tag) => (
                  <option key={tag.id} value={tag.id}>
                    {tag.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Songs Grid */}
      {filteredSongs.length === 0 ? (
        <div className="text-center py-8 md:py-12">
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400">No songs found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedTag(null);
            }}
            className="mt-4 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredSongs.map((song) => (
            <Link
              key={song.id}
              href={`/songs/${song.id}`}
              className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 truncate">{song.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-3 md:mb-4 truncate">{song.artist}</p>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 flex flex-wrap gap-2">
                  {song.key && <span className="mr-2">Key: {song.key}</span>}
                  {song.tempo && <span>Tempo: {song.tempo} BPM</span>}
                </div>
                
                {song.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {song.tags.slice(0, 2).map((tag) => (
                      <span 
                        key={tag.id} 
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                      >
                        {tag.name}
                      </span>
                    ))}
                    {song.tags.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full">
                        +{song.tags.length - 2}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
} 