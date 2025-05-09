import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('auth_token');
    
    if (!token) {
      return NextResponse.redirect(new URL('/api/songs/public', request.url));
    }
    
    try {
      const decoded = jwt.verify(token.value, process.env.JWT_SECRET || '') as { userId: string };
      
      const songs = await prisma.song.findMany({
        where: {
          OR: [
            { userId: decoded.userId },
            { isPublic: true }
          ]
        },
        include: {
          tags: true,
        },
        orderBy: {
          title: 'asc',
        },
      });
      
      return NextResponse.json(songs);
    } catch (err) {
      return NextResponse.redirect(new URL('/api/songs/public', request.url));
    }
  } catch (error) {
    console.error('Error in songs API:', error);
    return NextResponse.redirect(new URL('/api/songs/public', request.url));
  }
}
