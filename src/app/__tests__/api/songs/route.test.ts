import { NextRequest } from 'next/server';
import { GET } from '@/app/api/songs/route';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

jest.mock('@prisma/client', () => {
  const mockPrisma = {
    song: {
      findMany: jest.fn(),
    },
    $disconnect: jest.fn(),
  };
  return {
    PrismaClient: jest.fn(() => mockPrisma),
  };
});

jest.mock('jsonwebtoken', () => ({
  verify: jest.fn(),
}));

jest.mock('next/headers', () => ({
  cookies: jest.fn(),
}));

describe('Songs API', () => {
  let mockPrisma: any;
  let mockCookieStore: any;
  
  beforeEach(() => {
    jest.clearAllMocks();
    mockPrisma = new PrismaClient();
    
    mockCookieStore = {
      get: jest.fn(),
    };
    (cookies as jest.Mock).mockReturnValue(mockCookieStore);
  });
  
  it('should redirect to public songs if no auth token is present', async () => {
    mockCookieStore.get.mockReturnValue(null);
    
    const request = new NextRequest('http://localhost:3000/api/songs');
    const response = await GET(request);
    
    expect(response.status).toBe(302); // Redirect status
    expect(response.headers.get('Location')).toContain('/api/songs/public');
  });
  
  it('should redirect to public songs if token is invalid', async () => {
    mockCookieStore.get.mockReturnValue({ value: 'invalid-token' });
    
    (jwt.verify as jest.Mock).mockImplementation(() => {
      throw new Error('Invalid token');
    });
    
    const request = new NextRequest('http://localhost:3000/api/songs');
    const response = await GET(request);
    
    expect(response.status).toBe(302); // Redirect status
    expect(response.headers.get('Location')).toContain('/api/songs/public');
  });
  
  it('should return songs for authenticated user', async () => {
    mockCookieStore.get.mockReturnValue({ value: 'valid-token' });
    
    (jwt.verify as jest.Mock).mockReturnValue({ userId: 'user-1' });
    
    const mockSongs = [
      {
        id: '1',
        title: 'Amazing Grace',
        artist: 'John Newton',
        isPublic: true,
        tags: [{ id: '1', name: 'Folk' }],
      },
      {
        id: '2',
        title: 'Private Song',
        artist: 'Test Artist',
        isPublic: false,
        userId: 'user-1',
        tags: [{ id: '1', name: 'Folk' }],
      },
    ];
    
    mockPrisma.song.findMany.mockResolvedValue(mockSongs);
    
    const request = new NextRequest('http://localhost:3000/api/songs');
    const response = await GET(request);
    const data = await response.json();
    
    expect(response.status).toBe(200);
    expect(data).toEqual(mockSongs);
    expect(mockPrisma.song.findMany).toHaveBeenCalledWith({
      where: {
        OR: [
          { userId: 'user-1' },
          { isPublic: true }
        ]
      },
      include: { tags: true },
      orderBy: { title: 'asc' },
    });
  });
});
