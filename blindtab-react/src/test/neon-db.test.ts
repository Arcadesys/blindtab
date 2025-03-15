import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

describe('Neon Database Connection', () => {
  beforeAll(async () => {
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('should connect to the Neon database', async () => {
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).toHaveProperty('test', 1);
  });

  it('should be able to create and read a song', async () => {
    // Create a test song
    const song = await prisma.song.create({
      data: {
        title: 'Test Song',
        artist: 'Test Artist',
        content: '# Test Song\n## Test Artist\nTest lyrics',
        key: 'C',
        tempo: 120,
        timeSignature: '4/4'
      }
    });

    expect(song).toBeTruthy();
    expect(song.title).toBe('Test Song');

    // Clean up
    await prisma.song.delete({
      where: { id: song.id }
    });
  });
}); 