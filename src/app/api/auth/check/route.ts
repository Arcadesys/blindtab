import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Check if the auth token cookie exists
    const cookieStore = await cookies();
    const authToken = cookieStore.get('auth_token');
    
    if (!authToken) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );
    }
    
    try {
      const token = jwt.verify(authToken.value, process.env.JWT_SECRET || '');
      const userId = (token as { userId: string }).userId;
      
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          name: true,
          email: true,
        },
      });
      
      if (!user) {
        throw new Error('User not found');
      }
      
      return NextResponse.json({ 
        authenticated: true,
        user
      });
    } catch (error) {
      cookieStore.delete('auth_token');
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Auth check error:', error);
    return NextResponse.json(
      { error: 'Authentication check failed' },
      { status: 500 }
    );
  }
}     