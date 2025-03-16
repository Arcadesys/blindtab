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
    lyrics: [
      { line: 'Twinkle twinkle little star', chords: 'C        G        C', position: 0 },
      { line: 'How I wonder what you are', chords: 'F        C        G', position: 0 },
      { line: 'Up above the world so high', chords: 'C        G        C', position: 0 },
      { line: 'Like a diamond in the sky', chords: 'F        C        G', position: 0 },
      { line: 'Twinkle twinkle little star', chords: 'C        G        C', position: 0 },
      { line: 'How I wonder what you are', chords: 'F        C        G', position: 0 }
    ],
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
    lyrics: [
      { line: 'Happy birthday to you', chords: 'C C D C F E', position: 0 },
      { line: 'Happy birthday to you', chords: 'C C D C G F', position: 0 },
      { line: 'Happy birthday dear friend', chords: 'C C C A F E D', position: 0 },
      { line: 'Happy birthday to you', chords: 'B B A F G F', position: 0 }
    ],
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
    lyrics: [
      { line: 'Dashing through the snow', chords: 'E        A        E', position: 0 },
      { line: 'In a one-horse open sleigh', chords: 'B7       E        B7', position: 0 },
      { line: "O'er the fields we go", chords: 'E        A        E', position: 0 },
      { line: 'Laughing all the way', chords: 'B7       E        B7', position: 0 },
      { line: 'Bells on bobtails ring', chords: 'E        A        E', position: 0 },
      { line: 'Making spirits bright', chords: 'B7       E        B7', position: 0 },
      { line: 'What fun it is to ride and sing', chords: 'E        A        E', position: 0 },
      { line: 'A sleighing song tonight', chords: 'B7       E        B7', position: 0 },
      { line: 'Jingle bells, jingle bells', chords: 'E        E        E E', position: 0 },
      { line: 'Jingle all the way', chords: 'E        A        B7', position: 0 },
      { line: 'Oh what fun it is to ride', chords: 'E        A        E', position: 0 },
      { line: 'In a one-horse open sleigh, hey!', chords: 'B7       E        B7 E', position: 0 }
    ],
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
    lyrics: [
      { line: 'Joyful, joyful, we adore Thee', chords: 'E E F G G F E D', position: 0 },
      { line: 'God of glory, Lord of love', chords: 'C C D E E D D', position: 0 },
      { line: 'Hearts unfold like flowers before Thee', chords: 'E E F G G F E D', position: 0 },
      { line: 'Opening to the sun above', chords: 'C C D E D C C', position: 0 }
    ],
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
    lyrics: [
      { line: 'First phrase', chords: 'E D# E D# E B D C A', position: 0 },
      { line: 'Second phrase', chords: 'C E A B E G# B C', position: 0 },
      { line: 'Third phrase', chords: 'E D# E D# E B D C A', position: 0 },
      { line: 'Fourth phrase', chords: 'C E A B E C B A', position: 0 }
    ],
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