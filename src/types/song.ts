import { Timestamp } from 'firebase/firestore';

export interface LyricLine {
  chord: string;
  line: string;
  position: number;
}

export interface SongInfo {
  title: string;
  artist: string;
  key?: string;
  capo?: number;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

/**
 * Song type definitions
 */

// Chord position on the fretboard
export interface ChordPosition {
  string: number; // 1-6, where 1 is high E and 6 is low E
  fret: number;   // 0 for open string, 1+ for fretted positions
}

// Chord definition
export interface Chord {
  name: string;           // e.g., "G", "Cmaj7", "Dsus4"
  positions: ChordPosition[];
}

// Song section (verse, chorus, bridge, etc.)
export interface SongSection {
  type: 'intro' | 'verse' | 'chorus' | 'bridge' | 'outro' | 'solo' | string;
  content: string;
}

// Complete song definition
export interface Song {
  id: string;
  title: string;
  artist: string;
  key: string;
  tags: string[];
  chords: Chord[];
  structure: SongSection[];
  createdAt: string;
  updatedAt: string;
  isPublic: boolean;
  userId?: string;
}

export interface SongData {
  songInfo: SongInfo;
  lyrics: LyricLine[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
  tags?: string[];
}

export interface SongsState {
  current: string | null;
  available: Song[];
  loaded: Record<string, SongData>;
} 