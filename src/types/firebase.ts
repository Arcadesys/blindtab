export interface Song {
  id: string;
  title: string;
  artist: string;
  key?: string;
  tempo?: number;
  timeSignature?: string;
  lyrics: {
    line: string;
    chords: string;
    position: number;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

export interface UserSong {
  songId: string;
  addedAt: Date;
  lastPlayedAt?: Date;
  playCount?: number;
}

export interface UserSongCollection {
  userId: string;
  songs: { [songId: string]: UserSong };
  createdAt: Date;
  updatedAt: Date;
}

export type FirestoreCollections = {
  songs: { [id: string]: Song };
  user_songs: { [userId: string]: UserSongCollection };
  tags: { [id: string]: string };
  config: { [id: string]: any };
} 