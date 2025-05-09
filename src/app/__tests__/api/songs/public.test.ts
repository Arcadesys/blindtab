import { GET } from '@/app/api/songs/public/route';
import { PrismaClient } from '@prisma/client';

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

describe('Public Songs API', () => {
  let mockPrisma: any;
  
  beforeEach(() => {
    jest.clearAllMocks();
    mockPrisma = new PrismaClient();
  });
  
  it('should return public songs', async () => {
    const mockPublicSongs = [
      {
        id: '1',
        title: 'Amazing Grace',
        artist: 'John Newton',
        isPublic: true,
        tags: [{ id: '1', name: 'Folk' }],
      },
      {
        id: '2',
        title: 'Greensleeves',
        artist: 'Traditional English',
        isPublic: true,
        tags: [{ id: '1', name: 'Folk' }, { id: '2', name: 'Traditional' }],
      },
    ];
    
    mockPrisma.song.findMany.mockResolvedValue(mockPublicSongs);
    
    const response = await GET();
    const data = await response.json();
    
    expect(response.status).toBe(200);
    expect(data).toEqual(mockPublicSongs);
    expect(mockPrisma.song.findMany).toHaveBeenCalledWith({
      where: { isPublic: true },
      include: { tags: true },
      orderBy: { title: 'asc' },
    });
  });
  
  it('should handle errors when fetching public songs', async () => {
    mockPrisma.song.findMany.mockRejectedValue(new Error('Database error'));
    
    const response = await GET();
    const data = await response.json();
    
    expect(response.status).toBe(500);
    expect(data.error).toBe('Failed to fetch public songs');
  });
});
