import { NextResponse } from 'next/server';
import NextAuth from 'next-auth';
import { authOptions } from '../[...nextauth]/route';

export async function POST(request: Request) {
  try {
    return NextResponse.redirect(new URL('/api/auth/signout', request.url));
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Logout failed' },
      { status: 500 }
    );
  }
}         