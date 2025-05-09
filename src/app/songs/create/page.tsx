'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Tag } from '@prisma/client';

export default function CreateSongPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    content: '',
    key: '',
    tempo: '',
    timeSignature: '',
    tags: [] as string[],
    isPublic: false,
  });
  const [availableTags, setAvailableTags] = useState<Tag[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch available tags
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    // Handle checkbox separately
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
    setFormData(prev => ({
      ...prev,
      tags: selectedOptions,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Convert inline chords to traditional format
      const convertedContent = convertInlineChordsToTraditional(formData.content);

      const response = await fetch('/api/songs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          content: convertedContent,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create song');
      }

      const data = await response.json();
      router.push(`/songs/${data.id}`);
    } catch (err) {
      console.error('Error creating song:', err);
      setError('Failed to create song. Please try again.');
    } finally {
      setIsSubmitting(false);
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

  return (
    <div className="container mx-auto px-0 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Create New Song</h1>
          <Link 
            href="/songs" 
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Back to Songs
          </Link>
        </div>

        {error && (
          <div className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 p-4 rounded-lg mb-6">
            <p>{error}</p>
          </div>
        )}



        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-1">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            {/* Artist */}
            <div>
              <label htmlFor="artist" className="block text-sm font-medium mb-1">
                Artist <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="artist"
                name="artist"
                value={formData.artist}
                onChange={handleChange}
                required
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            {/* Key */}
            <div>
              <label htmlFor="key" className="block text-sm font-medium mb-1">
                Key
              </label>
              <input
                type="text"
                id="key"
                name="key"
                value={formData.key}
                onChange={handleChange}
                placeholder="e.g., C, G, Dm"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            {/* Tempo */}
            <div>
              <label htmlFor="tempo" className="block text-sm font-medium mb-1">
                Tempo (BPM)
              </label>
              <input
                type="number"
                id="tempo"
                name="tempo"
                value={formData.tempo}
                onChange={handleChange}
                placeholder="e.g., 120"
                min="1"
                max="300"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            {/* Time Signature */}
            <div>
              <label htmlFor="timeSignature" className="block text-sm font-medium mb-1">
                Time Signature
              </label>
              <input
                type="text"
                id="timeSignature"
                name="timeSignature"
                value={formData.timeSignature}
                onChange={handleChange}
                placeholder="e.g., 4/4, 3/4"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            {/* Tags */}
            <div>
              <label htmlFor="tags" className="block text-sm font-medium mb-1">
                Tags
              </label>
              <select
                id="tags"
                name="tags"
                multiple
                value={formData.tags}
                onChange={handleTagChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 text-black dark:text-white h-24"
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
                name="isPublic"
                checked={formData.isPublic}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="isPublic" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Make this song public
              </label>
            </div>
          </div>

          {/* Content */}
          <div className="mb-6">
            <label htmlFor="content" className="block text-sm font-medium mb-1">
              Content <span className="text-red-500">*</span>
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows={15}
              placeholder={`# Song Title

# Format 1: Traditional (chords on their own line)
G       C       D
It's not easy being green

# Format 2: Square brackets
It's not [G] easy being [C] green

# Format 3: Inline chords
It's not [G] easy being green [C]`}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 edit-screen"
            ></textarea>
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
              disabled={isSubmitting}
              className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Creating...' : 'Create Song'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}      