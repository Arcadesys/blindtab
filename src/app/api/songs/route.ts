import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const songs = await prisma.song.findMany({
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
        isPublic: true,
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