import { Song, SongData } from '../types/song';
import { env } from './env';

class BrowserDatabase {
  private initialized: boolean = false;
  private storagePrefix: string;

  constructor() {
    this.storagePrefix = env.storagePrefix;
    this.init();
  }

  private init() {
    try {
      // Test localStorage availability
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      this.initialized = true;
    } catch (error) {
      console.error('Browser storage not available:', error);
      this.initialized = false;
    }
  }

  isInitialized(): boolean {
    return this.initialized;
  }

  async getAllSongs(): Promise<Song[]> {
    if (!this.initialized) return [];
    
    try {
      const songsJson = localStorage.getItem(`${this.storagePrefix}songs`);
      return songsJson ? JSON.parse(songsJson) : [];
    } catch (error) {
      console.error('Error getting songs:', error);
      return [];
    }
  }

  async getSongById(id: string): Promise<SongData | null> {
    if (!this.initialized) return null;
    
    try {
      const songJson = localStorage.getItem(`${this.storagePrefix}song_${id}`);
      return songJson ? JSON.parse(songJson) : null;
    } catch (error) {
      console.error(`Error getting song ${id}:`, error);
      return null;
    }
  }

  async createSong(songData: SongData): Promise<string | null> {
    if (!this.initialized) return null;
    
    try {
      const id = `song_${Date.now()}`;
      localStorage.setItem(`${this.storagePrefix}song_${id}`, JSON.stringify(songData));
      
      // Update song list
      const songs = await this.getAllSongs();
      songs.push({
        id,
        title: songData.songInfo.title,
        artist: songData.songInfo.artist,
        filename: `${id}.json`
      });
      localStorage.setItem(`${this.storagePrefix}songs`, JSON.stringify(songs));
      
      return id;
    } catch (error) {
      console.error('Error creating song:', error);
      return null;
    }
  }

  async updateSong(id: string, songData: SongData): Promise<boolean> {
    if (!this.initialized) return false;
    
    try {
      localStorage.setItem(`${this.storagePrefix}song_${id}`, JSON.stringify(songData));
      
      // Update song list
      const songs = await this.getAllSongs();
      const songIndex = songs.findIndex(s => s.id === id);
      if (songIndex >= 0) {
        songs[songIndex] = {
          ...songs[songIndex],
          title: songData.songInfo.title,
          artist: songData.songInfo.artist
        };
        localStorage.setItem(`${this.storagePrefix}songs`, JSON.stringify(songs));
      }
      
      return true;
    } catch (error) {
      console.error(`Error updating song ${id}:`, error);
      return false;
    }
  }

  async deleteSong(id: string): Promise<boolean> {
    if (!this.initialized) return false;
    
    try {
      localStorage.removeItem(`${this.storagePrefix}song_${id}`);
      
      // Update song list
      const songs = await this.getAllSongs();
      const filteredSongs = songs.filter(s => s.id !== id);
      localStorage.setItem(`${this.storagePrefix}songs`, JSON.stringify(filteredSongs));
      
      return true;
    } catch (error) {
      console.error(`Error deleting song ${id}:`, error);
      return false;
    }
  }
}

export const browserDB = new BrowserDatabase(); 