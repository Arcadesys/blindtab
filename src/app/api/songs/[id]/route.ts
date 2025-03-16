import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
        connect: data.tags.map((tagId: string) => ({ id: tagId })),
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
        isPublic: true,
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