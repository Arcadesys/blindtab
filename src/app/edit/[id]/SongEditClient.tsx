'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Song } from '@/types/song';
import { Tag } from '@prisma/client';

interface SongEditClientProps {
  song: Song;
}

export default function SongEditClient({ song }: SongEditClientProps) {
  const router = useRouter();
  const [title, setTitle] = useState(song.title);
  const [artist, setArtist] = useState(song.artist);
  const [content, setContent] = useState(song.content);
  const [key, setKey] = useState(song.key || '');
  const [tempo, setTempo] = useState(song.tempo?.toString() || '');
  const [timeSignature, setTimeSignature] = useState(song.timeSignature || '');
  const [selectedTags, setSelectedTags] = useState<string[]>(song.tags.map(tag => tag.id));
  const [availableTags, setAvailableTags] = useState<Tag[]>([]);
  const [isPublic, setIsPublic] = useState(song.isPublic);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Fetch available tags
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch('/api/tags');
        if (!response.ok) {
          throw new Error('Failed to fetch tags');
        }
        const data = await response.json();
        setAvailableTags(data);
      } catch (err) {
        console.error('Error loading tags:', err);
      }
    };

    fetchTags();
  }, []);

  const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(e.target.selectedOptions).map(option => option.value);
    setSelectedTags(selected);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Convert inline chords to traditional format
      const convertedContent = convertInlineChordsToTraditional(content);

      const response = await fetch(`/api/songs/${song.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          artist,
          content: convertedContent,
          key,
          tempo: tempo ? parseInt(tempo) : null,
          timeSignature,
          tags: selectedTags,
          isPublic,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update song');
      }

      router.push(`/songs/${song.id}`);
    } catch (err) {
      console.error('Error updating song:', err);
      setError('Failed to update song. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Function to convert inline chords to traditional format
  const convertInlineChordsToTraditional = (content: string): string => {
    const lines = content.split('\n');
    const result: string[] = [];
    
    // Helper function to check if a line is a chord line
    const isChordLine = (line: string): boolean => {
      if (!line.trim() || line.startsWith('#')) return false;
      // Check if the line contains only chords and whitespace
      const chordPattern = /^[\s]*(\[[A-G][^\]]*\][\s]*)+$/;
      return chordPattern.test(line);
    };

    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      
      // Skip empty lines, headers, and existing chord lines
      if (!line.trim() || line.startsWith('#') || isChordLine(line)) {
        result.push(line);
        i++;
        continue;
      }

      if (line.includes('[') && line.includes(']')) {
        // Extract chords and their positions
        const chords: { chord: string; position: number }[] = [];
        let textOnly = line;
        let offset = 0;
        
        // Find all chords and their positions
        const matches = line.matchAll(/\[([^\]]+)\]/g);
        for (const match of matches) {
          if (match.index !== undefined) {
            chords.push({
              chord: match[1],
              position: match.index - offset
            });
            // Remove the chord from the text and update offset
            textOnly = textOnly.replace(match[0], '');
            offset += match[0].length;
          }
        }
        
        // Create the chord line with proper spacing
        let chordLine = '';
        let lastPosition = 0;
        
        chords.forEach(({ chord, position }) => {
          // Add spaces to reach the correct position
          const spacesNeeded = Math.max(0, position - lastPosition);
          chordLine += ' '.repeat(spacesNeeded) + chord;
          lastPosition = position + chord.length;
        });
        
        // Add the chord line and the text line
        result.push(chordLine);
        result.push(textOnly);
      } else {
        result.push(line);
      }
      i++;
    }
    
    return result.join('\n');
  };

  const handleDelete = async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`/api/songs/${song.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to delete song');
      }

      router.push('/songs');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Edit Song</h1>
        <div className="flex space-x-2">
          <Link
            href={`/songs/${song.id}`}
            className="px-4 py-2 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-lg"
          >
            Cancel
          </Link>
          <button
            type="button"
            onClick={() => setShowDeleteConfirm(true)}
            className="px-4 py-2 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 rounded-lg"
            disabled={isLoading}
          >
            Delete
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
              required
            />
          </div>

          <div>
            <label htmlFor="artist" className="block text-sm font-medium mb-1">
              Artist
            </label>
            <input
              type="text"
              id="artist"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
              required
            />
          </div>

          <div>
            <label htmlFor="key" className="block text-sm font-medium mb-1">
              Key
            </label>
            <input
              type="text"
              id="key"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
            />
          </div>

          <div>
            <label htmlFor="tempo" className="block text-sm font-medium mb-1">
              Tempo (BPM)
            </label>
            <input
              type="number"
              id="tempo"
              value={tempo}
              onChange={(e) => setTempo(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
            />
          </div>

          <div>
            <label htmlFor="timeSignature" className="block text-sm font-medium mb-1">
              Time Signature
            </label>
            <input
              type="text"
              id="timeSignature"
              value={timeSignature}
              onChange={(e) => setTimeSignature(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
              placeholder="e.g. 4/4"
            />
          </div>

          <div>
            <label htmlFor="tags" className="block text-sm font-medium mb-1">
              Tags
            </label>
            <select
              id="tags"
              name="tags"
              multiple
              value={selectedTags}
              onChange={handleTagChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white h-24"
            >
              {availableTags.map((tag) => (
                <option key={tag.id} value={tag.id}>
                  {tag.name}
                </option>
              ))}
            </select>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Hold Ctrl/Cmd to select multiple tags
            </p>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="isPublic"
              checked={isPublic}
              onChange={(e) => setIsPublic(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="isPublic" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
              Make this song public
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-1">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={20}
            placeholder={`# Song Title

# Format 1: Traditional (chords on their own line)
G       C       D
It's not easy being green

# Format 2: Square brackets
It's not [G] easy being [C] green

# Format 3: Inline chords
It's not [G] easy being green [C]`}
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 edit-screen"
            required
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Supported formats:
            <br />
            1. Traditional: Chords on their own line (e.g., G C D)
            <br />
            2. Square brackets: [G] [C] [D]
            <br />
            3. Inline: It&apos;s not [G] easy being green [C]
          </p>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-md p-6">
            <h3 className="text-xl font-semibold mb-4">Delete Song</h3>
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              <p>Are you sure you want to delete this song?</p>
              <p>This action cannot be undone.</p>
              <p>All data associated with &quot;{song.title}&quot; by &quot;{song.artist}&quot; will be permanently removed.</p>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-lg"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}  