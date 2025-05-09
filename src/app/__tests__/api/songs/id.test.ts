import { NextRequest } from 'next/server';
import { GET } from '@/app/api/songs/[id]/route';
import { PrismaClient } from '@prisma/client';

jest.mock('@prisma/client', () => {
  const mockPrisma = {
    song: {
      findUnique: jest.fn(),
    },
    $disconnect: jest.fn(),
  };
  return {
    PrismaClient: jest.fn(() => mockPrisma),
  };
});

describe('Song Detail API', () => {
  let mockPrisma: any;
  
  beforeEach(() => {
    jest.clearAllMocks();
    mockPrisma = new PrismaClient();
  });
  
  it('should return 400 if song ID is missing', async () => {
    const request = new NextRequest('http://localhost:3000/api/songs/undefined', {
      method: 'GET',
    });
    
    const response = await GET(request, { params: { id: undefined as any } });
    const data = await response.json();
    
    expect(response.status).toBe(400);
    expect(data.error).toBe('Song ID is required');
  });
  
  it('should return 404 if song is not found', async () => {
    mockPrisma.song.findUnique.mockResolvedValue(null);
    
    const request = new NextRequest('http://localhost:3000/api/songs/nonexistent-id', {
      method: 'GET',
    });
    
    const response = await GET(request, { params: { id: 'nonexistent-id' } });
    const data = await response.json();
    
    expect(response.status).toBe(404);
    expect(data.error).toBe('Song not found');
    expect(mockPrisma.song.findUnique).toHaveBeenCalledWith({
      where: { id: 'nonexistent-id' },
      include: { tags: true },
    });
  });
  
  it('should return song details successfully', async () => {
    const mockSong = {
      id: 'song-1',
      title: 'Amazing Grace',
      artist: 'John Newton',
      content: '# Amazing Grace',
      tags: [{ id: '1', name: 'Folk' }],
    };
    
    mockPrisma.song.findUnique.mockResolvedValue(mockSong);
    
    const request = new NextRequest('http://localhost:3000/api/songs/song-1', {
      method: 'GET',
    });
    
    const response = await GET(request, { params: { id: 'song-1' } });
    const data = await response.json();
    
    expect(response.status).toBe(200);
    expect(data).toEqual(mockSong);
    expect(mockPrisma.song.findUnique).toHaveBeenCalledWith({
      where: { id: 'song-1' },
      include: { tags: true },
    });
  });
});
