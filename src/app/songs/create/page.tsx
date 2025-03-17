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
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

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
    setSuccessMessage(null);

    try {
      const response = await fetch('/api/songs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create song');
      }

      const data = await response.json();
      setSuccessMessage('Song created successfully!');
      
      // Reset form
      setFormData({
        title: '',
        artist: '',
        content: '',
        key: '',
        tempo: '',
        timeSignature: '',
        tags: [],
        isPublic: false,
      });

      // Redirect to the new song page after a short delay
      setTimeout(() => {
        router.push(`/songs/${data.id}`);
      }, 1500);
    } catch (err) {
      console.error('Error creating song:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
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

        {successMessage && (
          <div className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 p-4 rounded-lg mb-6">
            <p>{successMessage}</p>
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
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 h-24"
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
              placeholder="Enter your leadsheet content here..."
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 font-mono"
            ></textarea>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Format: Put chords in square brackets, e.g., [G] [C] [D]
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