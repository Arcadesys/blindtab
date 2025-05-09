import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

// Helper function to check if user is authenticated and get user ID
async function getAuthenticatedUser(): Promise<{ isAuthenticated: boolean; userId?: string }> {
  const cookieStore = cookies();
  const authToken = cookieStore.get('auth_token');
  
  if (!authToken) {
    return { isAuthenticated: false };
  }
  
  try {
    const token = jwt.verify(authToken.value, process.env.JWT_SECRET || '');
    const userId = (token as { userId: string }).userId;
    return { isAuthenticated: true, userId };
  } catch (error) {
    return { isAuthenticated: false };
  }
}

export async function GET() {
  try {
    // Check if user is authenticated
    const { isAuthenticated, userId } = await getAuthenticatedUser();
    
    let whereCondition = {};
    
    if (isAuthenticated && userId) {
      // If authenticated, return user's songs + public songs
      whereCondition = {
        OR: [
          { userId },
          { isPublic: true }
        ]
      };
    } else {
      // If not authenticated, only return public songs
      whereCondition = { isPublic: true };
    }
    
    const songs = await prisma.song.findMany({
      where: whereCondition,
      include: {
        tags: true,
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });
    
    return NextResponse.json(songs);
  } catch (error) {
    console.error('Error fetching songs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch songs' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check if user is authenticated
    const { isAuthenticated, userId } = await getAuthenticatedUser();
    
    if (!isAuthenticated || !userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const data = await request.json();
    
    // Validate required fields
    if (!data.title || !data.artist || !data.content) {
      return NextResponse.json(
        { error: 'Title, artist, and content are required' },
        { status: 400 }
      );
    }

    // Handle tags
    let tags = undefined;
    if (data.tags && Array.isArray(data.tags) && data.tags.length > 0) {
      tags = {
        connect: data.tags.map((tagId: string) => ({ id: tagId })),
      };
    }

    // Create the song with user ID
    const song = await prisma.song.create({
      data: {
        title: data.title,
        artist: data.artist,
        content: data.content,
        key: data.key || null,
        tempo: data.tempo ? parseInt(data.tempo) : null,
        timeSignature: data.timeSignature || null,
        isPublic: data.isPublic ?? false, // Default to private
        userId, // Associate song with the user
        tags: tags,
      },
      include: {
        tags: true,
      },
    });

    return NextResponse.json(song, { status: 201 });
  } catch (error) {
    console.error('Error creating song:', error);
    return NextResponse.json(
      { error: 'Failed to create song' },
      { status: 500 }
    );
  }
}     