'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Tag } from '@prisma/client';

export default function ManageTagsPage() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [newTagName, setNewTagName] = useState('');
  const [editingTagId, setEditingTagId] = useState<string | null>(null);
  const [editingTagName, setEditingTagName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    fetchTags();
  }, []);

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
      setError('Failed to load tags. Please try again.');
    }
  };

  const handleCreateTag = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTagName.trim()) {
      setError('Tag name cannot be empty');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/tags', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newTagName.trim() }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create tag');
      }

      // Play a success sound for blind/low vision users
      const audio = new Audio('/sounds/success.mp3');
      audio.play();

      setSuccessMessage('Tag created successfully!');
      setNewTagName('');
      fetchTags();
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    } catch (err) {
      console.error('Error creating tag:', err);
      setError(err instanceof Error ? err.message : 'Failed to create tag. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const startEditing = (tag: Tag) => {
    setEditingTagId(tag.id);
    setEditingTagName(tag.name);
    setError(null);
  };

  const cancelEditing = () => {
    setEditingTagId(null);
    setEditingTagName('');
  };

  const handleUpdateTag = async (e: React.FormEvent, tagId: string) => {
    e.preventDefault();
    
    if (!editingTagName.trim()) {
      setError('Tag name cannot be empty');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`/api/tags/${tagId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: editingTagName.trim() }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update tag');
      }

      // Play a success sound for blind/low vision users
      const audio = new Audio('/sounds/success.mp3');
      audio.play();

      setSuccessMessage('Tag updated successfully!');
      setEditingTagId(null);
      fetchTags();
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    } catch (err) {
      console.error('Error updating tag:', err);
      setError(err instanceof Error ? err.message : 'Failed to update tag. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteTag = async (tagId: string) => {
    if (!confirm('Are you sure you want to delete this tag? This will remove the tag from all songs.')) {
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`/api/tags/${tagId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to delete tag');
      }

      // Play a deletion sound for blind/low vision users
      const audio = new Audio('/sounds/delete.mp3');
      audio.play();

      setSuccessMessage('Tag deleted successfully!');
      fetchTags();
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    } catch (err) {
      console.error('Error deleting tag:', err);
      setError(err instanceof Error ? err.message : 'Failed to delete tag. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Tags</h1>
        <Link 
          href="/tags" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Back to Tags
        </Link>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-200 rounded-md">
          <p>{error}</p>
        </div>
      )}

      {successMessage && (
        <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-200 rounded-md">
          <p>{successMessage}</p>
        </div>
      )}

      {/* Create Tag Form */}
      <div className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold mb-4">Create New Tag</h2>
        <form onSubmit={handleCreateTag} className="flex gap-4">
          <div className="flex-grow">
            <label htmlFor="newTagName" className="sr-only">Tag Name</label>
            <input
              id="newTagName"
              type="text"
              placeholder="Enter tag name"
              value={newTagName}
              onChange={(e) => setNewTagName(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
              disabled={isSubmitting}
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating...' : 'Create Tag'}
          </button>
        </form>
      </div>

      {/* Tags List */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold mb-4">Current Tags</h2>
        
        {tags.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No tags found. Create your first tag above.</p>
        ) : (
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {tags.map((tag) => (
              <li key={tag.id} className="py-4">
                {editingTagId === tag.id ? (
                  <form onSubmit={(e) => handleUpdateTag(e, tag.id)} className="flex gap-2">
                    <input
                      type="text"
                      value={editingTagName}
                      onChange={(e) => setEditingTagName(e.target.value)}
                      className="flex-grow p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
                      disabled={isSubmitting}
                    />
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm disabled:opacity-50"
                      disabled={isSubmitting}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={cancelEditing}
                      className="bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded text-sm"
                    >
                      Cancel
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{tag.name}</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => startEditing(tag)}
                        className="bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-800 dark:text-blue-200 px-3 py-1 rounded text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteTag(tag.id)}
                        className="bg-red-100 dark:bg-red-900 hover:bg-red-200 dark:hover:bg-red-800 text-red-800 dark:text-red-200 px-3 py-1 rounded text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}        