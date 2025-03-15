import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest';
import { PrismaClient } from '@prisma/client';
import { songOperations } from '../utils/db';

const prisma = new PrismaClient();

describe('Database Operations', () => {
  beforeAll(async () => {
    // Initialize the database connection
    await songOperations.init();
  });

  beforeEach(async () => {
    // Clean up the database before each test
    await prisma.song.deleteMany();
    await prisma.tag.deleteMany();
  });

  afterAll(async () => {
    // Clean up and disconnect after all tests
    await prisma.song.deleteMany();
    await prisma.tag.deleteMany();
    await prisma.$disconnect();
  });

  it('should check database connection', async () => {
    const isConnected = await songOperations.checkConnection();
    expect(isConnected).toBe(true);
  });

  it('should create and retrieve a song', async () => {
    const songData = {
      songInfo: {
        title: 'Test Song',
        artist: 'Test Artist',
        key: 'C',
        tempo: 120,
        timeSignature: '4/4'
      },
      songData: '# Test Song\n## Test Artist\nTest lyrics'
    };

    // Create song
    const songId = await songOperations.createSong(songData);
    expect(songId).toBeTruthy();

    if (songId) {
      // Retrieve song
      const retrievedSong = await songOperations.getSongById(songId);
      expect(retrievedSong).toBeTruthy();
      expect(retrievedSong?.songInfo.title).toBe('Test Song');
      expect(retrievedSong?.songInfo.artist).toBe('Test Artist');
    }
  });

  it('should update a song', async () => {
    // Create initial song
    const songData = {
      songInfo: {
        title: 'Original Song',
        artist: 'Original Artist',
        key: 'C',
        tempo: 120,
        timeSignature: '4/4'
      },
      songData: '# Original Song\n## Original Artist\nOriginal lyrics'
    };

    const songId = await songOperations.createSong(songData);
    expect(songId).toBeTruthy();

    if (songId) {
      // Update the song
      const updatedMarkdown = '# Updated Song\n## Updated Artist\nUpdated lyrics';
      const updateResult = await songOperations.updateSong(songId, updatedMarkdown);
      expect(updateResult).toBe(true);

      // Verify update
      const updatedSong = await songOperations.getSongById(songId);
      expect(updatedSong?.songData).toBe(updatedMarkdown);
    }
  });

  it('should get all songs', async () => {
    // Create multiple songs
    const songs = [
      {
        songInfo: {
          title: 'Song 1',
          artist: 'Artist 1',
          key: 'C',
          tempo: 120,
          timeSignature: '4/4'
        },
        songData: '# Song 1\n## Artist 1\nLyrics 1'
      },
      {
        songInfo: {
          title: 'Song 2',
          artist: 'Artist 2',
          key: 'D',
          tempo: 130,
          timeSignature: '3/4'
        },
        songData: '# Song 2\n## Artist 2\nLyrics 2'
      }
    ];

    for (const song of songs) {
      await songOperations.createSong(song);
    }

    // Get all songs
    const allSongs = await songOperations.getAllSongs();
    expect(allSongs).toHaveLength(2);
  });
});

describe('Database Connection', () => {
  it('should connect to the Neon database', async () => {
    // Simple test to verify we can connect and query
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).toHaveProperty('test', 1);
  });

  it('should be able to read songs from the database', async () => {
    // Query the songs table
    const songs = await prisma.song.findMany({
      take: 5, // Limit to 5 songs for the test
    });

    expect(Array.isArray(songs)).toBe(true);
    // Each song should have these properties
    if (songs.length > 0) {
      expect(songs[0]).toHaveProperty('id');
      expect(songs[0]).toHaveProperty('title');
      expect(songs[0]).toHaveProperty('artist');
    }
  });
}); 