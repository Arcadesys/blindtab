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

export interface Song {
  id: string;
  title: string;
  artist: string;
  filename: string;
  tags?: string[];
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