import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function GET() {
  try {
    console.log('Starting authentication check...');

    // Check if the auth token cookie exists
    const cookieStore = await cookies();
    const authToken = cookieStore.get('auth_token');
    
    if (!authToken) {
      console.warn('No auth token found in cookies.');
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );
    }
    
    try {
      console.log('Verifying auth token...');
      const token = jwt.verify(authToken.value, process.env.JWT_SECRET || '');
      const userId = (token as { userId: string }).userId;
      
      console.log(`Token verified. Fetching user with ID: ${userId}`);
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          name: true,
          email: true,
        },
      });
      
      if (!user) {
        console.error('User not found for the given ID.');
        throw new Error('User not found');
      }
      
      console.log('User authenticated successfully:', user);
      return NextResponse.json({ 
        authenticated: true,
        user
      });
    } catch (error) {
      console.error('Error verifying token or fetching user:', error);
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