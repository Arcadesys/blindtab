import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '../[...nextauth]/route';

export async function POST(request: NextRequest) {
  try {
    return NextResponse.redirect(new URL('/api/auth/signin', request.url));
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    );
  }
}         