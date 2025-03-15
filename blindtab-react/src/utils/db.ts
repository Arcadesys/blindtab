import { Song, SongData } from '../types/song';

// Temporary placeholder until Firestore implementation
export const songOperations = {
  init: async (): Promise<boolean> => {
    console.warn('Firestore implementation pending');
    return true;
  },

  checkConnection: async (): Promise<boolean> => {
    console.warn('Firestore implementation pending');
    return true;
  },

  getAllSongs: async (): Promise<Song[]> => {
    console.warn('Firestore implementation pending');
    return [];
  },

  getSongById: async (id: string): Promise<SongData | null> => {
    console.warn('Firestore implementation pending');
    return null;
  },

  createSong: async (songData: SongData): Promise<string | null> => {
    console.warn('Firestore implementation pending');
    return null;
  },

  updateSong: async (id: string, markdown: string): Promise<boolean> => {
    console.warn('Firestore implementation pending');
    return false;
  },

  deleteSong: async (id: string): Promise<boolean> => {
    console.warn('Firestore implementation pending');
    return false;
  },

  addTagToSong: async (songId: string, tagName: string): Promise<boolean> => {
    console.warn('Firestore implementation pending');
    return false;
  },

  removeTagFromSong: async (songId: string, tagName: string): Promise<boolean> => {
    console.warn('Firestore implementation pending');
    return false;
  },

  getAllTags: async () => {
    console.warn('Firestore implementation pending');
    return [];
  }
}; 