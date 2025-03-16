'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CreateSongPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [content, setContent] = useState('');
  const [key, setKey] = useState('');
  const [tempo, setTempo] = useState('');
  const [timeSignature, setTimeSignature] = useState('');
  const [tags, setTags] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/songs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          artist,
          content,
          key: key || null,
          tempo: tempo ? parseInt(tempo) : null,
          timeSignature: timeSignature || null,
          isPublic: true, // All songs are public now
          tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to create song');
      }
      
      router.push(`/songs/${data.id}`);
    } catch (error: any) {
      setError(error.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <Link href="/songs" className="text-blue-600 hover:underline">
          ← Back to Songs
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Create New Song</h1>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-lg font-medium mb-2">
            Title *
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded text-lg"
            required
          />
        </div>
        
        <div>
          <label htmlFor="artist" className="block text-lg font-medium mb-2">
            Artist *
          </label>
          <input
            id="artist"
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded text-lg"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="key" className="block text-lg font-medium mb-2">
              Key
            </label>
            <input
              id="key"
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded text-lg"
              placeholder="e.g. C Major"
            />
          </div>
          
          <div>
            <label htmlFor="tempo" className="block text-lg font-medium mb-2">
              Tempo (BPM)
            </label>
            <input
              id="tempo"
              type="number"
              value={tempo}
              onChange={(e) => setTempo(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded text-lg"
              placeholder="e.g. 120"
              min="1"
            />
          </div>
          
          <div>
            <label htmlFor="timeSignature" className="block text-lg font-medium mb-2">
              Time Signature
            </label>
            <input
              id="timeSignature"
              type="text"
              value={timeSignature}
              onChange={(e) => setTimeSignature(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded text-lg"
              placeholder="e.g. 4/4"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="tags" className="block text-lg font-medium mb-2">
            Tags (comma separated)
          </label>
          <input
            id="tags"
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded text-lg"
            placeholder="e.g. jazz, swing, standards"
          />
        </div>
        
        <div>
          <label htmlFor="content" className="block text-lg font-medium mb-2">
            Leadsheet Content *
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded text-lg font-mono"
            rows={15}
            required
            placeholder="Enter your leadsheet content here..."
          />
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-blue-600 text-white rounded text-lg font-medium hover:bg-blue-700 disabled:bg-blue-400"
          >
            {isLoading ? 'Creating...' : 'Create Song'}
          </button>
        </div>
      </form>
    </div>
  );
} 