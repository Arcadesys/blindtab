import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const publicSongs = await prisma.song.findMany({
      where: { isPublic: true },
      include: {
        tags: true,
      },
      orderBy: {
        title: 'asc',
      },
    });

    return NextResponse.json(publicSongs);
  } catch (error) {
    console.error('Error fetching public songs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch public songs' },
      { status: 500 }
    );
  }
}
