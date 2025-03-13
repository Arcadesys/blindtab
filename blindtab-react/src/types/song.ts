export interface Chord {
  text: string;
  position: number;
}

export interface SongLine {
  chords?: Chord[];
  lyric: string;
}

export interface SongInfo {
  title: string;
  artist: string;
  key?: string;
  tempo?: number;
  timeSignature?: string;
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  filename: string;
}

export interface SongData {
  songData: SongLine[];
  songInfo: SongInfo;
}

export interface SongsState {
  current: string | null;
  available: Song[];
  loaded: Record<string, SongData>;
} 