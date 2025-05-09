
import { NextResponse } from 'next/server';
import { getServerSession } from '@auth/core/next';
import { authOptions } from '../[...nextauth]/route';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );
    }
    return NextResponse.json({
      authenticated: true,
      user: session.user,
    });
  } catch (err) {
    console.error('Auth check error:', err);
    return NextResponse.json(
      { error: 'Authentication check failed' },
      { status: 500 }
    );
  }
}                              