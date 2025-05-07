
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';

const prisma = new PrismaClient();

// Helper function to check if user is authenticated
async function isAuthenticated(): Promise<boolean> {
  // cookies() now returns a Promise<ReadonlyRequestCookies>
  const cookieStore = await cookies();
  const authToken = cookieStore.get('auth_token');
  return !!authToken;
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    if (!id) {
      return NextResponse.json(
        { error: 'Song ID is required' },
        { status: 400 }
      );
    }

    const song = await prisma.song.findUnique({
      where: { id },
      include: {
        tags: true,
      },
    });

    if (!song) {
      return NextResponse.json(
        { error: 'Song not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(song);
  } catch (error) {
    console.error('Error fetching song:', error);
    return NextResponse.json(
      { error: 'Failed to fetch song' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check if user is authenticated
    if (!await isAuthenticated()) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const id = params.id;
    const data = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: 'Song ID is required' },
        { status: 400 }
      );
    }

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
        set: [], // First disconnect all existing tags
        connect: data.tags.map((tagId: string) => ({ id: tagId })), // Then connect the selected ones
      };
    } else {
      // If no tags are selected, remove all tags
      tags = {
        set: [],
      };
    }

    // Update the song
    const updatedSong = await prisma.song.update({
      where: { id },
      data: {
        title: data.title,
        artist: data.artist,
        content: data.content,
        key: data.key || null,
        tempo: data.tempo ? parseInt(data.tempo) : null,
        timeSignature: data.timeSignature || null,
        isPublic: data.isPublic ?? true, // Default to public if not specified
        tags: tags,
      },
      include: {
        tags: true,
      },
    });

    return NextResponse.json(updatedSong);
  } catch (error) {
    console.error('Error updating song:', error);
    return NextResponse.json(
      { error: 'Failed to update song' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check if user is authenticated
    if (!await isAuthenticated()) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const id = params.id;

    if (!id) {
      return NextResponse.json(
        { error: 'Song ID is required' },
        { status: 400 }
      );
    }

    // Check if song exists
    const song = await prisma.song.findUnique({
      where: { id },
    });

    if (!song) {
      return NextResponse.json(
        { error: 'Song not found' },
        { status: 404 }
      );
    }

    // Delete the song
    await prisma.song.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Song deleted successfully' });
  } catch (error) {
    console.error('Error deleting song:', error);
    return NextResponse.json(
      { error: 'Failed to delete song' },
      { status: 500 }
    );
  }
}