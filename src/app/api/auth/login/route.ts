import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// In a real app, you'd store this securely in environment variables
// and use a proper hashing mechanism
const ADMIN_PASSWORD = 'bennyvaleriecartoonhorse';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    
    // Check if password matches
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }
    
    // Set a cookie with the auth token
    // In a real app, you'd generate a proper JWT or session token
    const cookieStore = cookies();
    cookieStore.set({
      name: 'auth_token',
      value: 'authenticated',
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    );
  }
} 