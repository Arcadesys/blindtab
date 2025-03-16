/**
 * Mock Data Provider
 * 
 * This file provides mock data for development when Firestore isn't available
 */

import type { Song } from '../types/firebase';

// Mock songs data
export const mockSongs: Song[] = [
  {
    id: 'mock-song-1',
    title: 'Twinkle Twinkle Little Star',
    artist: 'Traditional',
    notes: 'C C G G A A G F F E E D D C',
    difficulty: 'beginner',
    tags: ['children', 'classic', 'beginner'],
    createdAt: new Date(),
    updatedAt: new Date(),
    playCount: 42,
    lastPlayed: new Date(),
  },
  {
    id: 'mock-song-2',
    title: 'Happy Birthday',
    artist: 'Traditional',
    notes: 'C C D C F E C C D C G F',
    difficulty: 'beginner',
    tags: ['celebration', 'classic', 'beginner'],
    createdAt: new Date(),
    updatedAt: new Date(),
    playCount: 28,
    lastPlayed: new Date(),
  },
  {
    id: 'mock-song-3',
    title: 'Jingle Bells',
    artist: 'James Lord Pierpont',
    notes: 'E E E E E E E G C D E F F F F F E E E E D D E D G',
    difficulty: 'intermediate',
    tags: ['holiday', 'christmas', 'intermediate'],
    createdAt: new Date(),
    updatedAt: new Date(),
    playCount: 15,
    lastPlayed: new Date(),
  },
  {
    id: 'mock-song-4',
    title: 'Ode to Joy',
    artist: 'Ludwig van Beethoven',
    notes: 'E E F G G F E D C C D E E D D',
    difficulty: 'intermediate',
    tags: ['classical', 'beethoven', 'intermediate'],
    createdAt: new Date(),
    updatedAt: new Date(),
    playCount: 33,
    lastPlayed: new Date(),
  },
  {
    id: 'mock-song-5',
    title: 'Für Elise',
    artist: 'Ludwig van Beethoven',
    notes: 'E D# E D# E B D C A C E A B E G# B C',
    difficulty: 'advanced',
    tags: ['classical', 'beethoven', 'advanced'],
    createdAt: new Date(),
    updatedAt: new Date(),
    playCount: 19,
    lastPlayed: new Date(),
  }
];

// Mock user songs collection
export const mockUserSongs = {
  songs: {
    'mock-song-1': { addedAt: new Date() },
    'mock-song-3': { addedAt: new Date() },
    'mock-song-5': { addedAt: new Date() }
  }
};

// Helper function to get mock songs
export const getMockSongs = (): Song[] => {
  return mockSongs;
};

// Helper function to get mock user songs
export const getMockUserSongs = (): Song[] => {
  const userSongIds = Object.keys(mockUserSongs.songs);
  return mockSongs.filter(song => userSongIds.includes(song.id));
}; 