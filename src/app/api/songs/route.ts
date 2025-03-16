import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const songs = await prisma.song.findMany({
      include: {
        tags: true,
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
    // Parse request body
    const { title, artist, content, key, tempo, timeSignature, isPublic, tags } = await request.json();
    
    // Validate required fields
    if (!title || !artist || !content) {
      return NextResponse.json(
        { message: 'Title, artist, and content are required' },
        { status: 400 }
      );
    }
    
    // Create song with tags
    const song = await prisma.song.create({
      data: {
        title,
        artist,
        content,
        key,
        tempo,
        timeSignature,
        isPublic: true, // All songs are public now
        tags: {
          connectOrCreate: tags.map((tag: string) => ({
            where: { name: tag },
            create: { name: tag },
          })),
        },
      },
    });
    
    return NextResponse.json(song, { status: 201 });
  } catch (error) {
    console.error('Error creating song:', error);
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    );
  }
} 