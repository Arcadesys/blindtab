import { NextResponse } from 'next/server';
import { removeAuthCookie } from '@/utils/authUtils';

export async function POST() {
  try {
    // Clear the auth cookie
    removeAuthCookie();
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Logout failed' },
      { status: 500 }
    );
  }
}   