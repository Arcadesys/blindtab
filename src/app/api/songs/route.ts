import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';

const prisma = new PrismaClient();

// Helper function to check if user is authenticated
async function isAuthenticated(): Promise<boolean> {
  const cookieStore = cookies();
  const authToken = cookieStore.get('auth_token');
  return !!authToken;
}

export async function GET() {
  try {
    // Check if user is authenticated
    const isAdmin = await isAuthenticated();
    
    // If not authenticated, only return public songs
    const songs = await prisma.song.findMany({
      where: isAdmin ? undefined : { isPublic: true },
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
    if (!await isAuthenticated()) {
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

    // Create the song
    const song = await prisma.song.create({
      data: {
        title: data.title,
        artist: data.artist,
        content: data.content,
        key: data.key || null,
        tempo: data.tempo ? parseInt(data.tempo) : null,
        timeSignature: data.timeSignature || null,
        isPublic: data.isPublic ?? false, // Default to private
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