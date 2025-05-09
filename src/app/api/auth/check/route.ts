


import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get('auth_token');
  if (!token) {
    return NextResponse.json(
      { authenticated: false },
      { status: 401 }
    );
  }
  try {
    const decoded = jwt.verify(token.value, process.env.JWT_SECRET || '');
    return NextResponse.json({
      authenticated: true,
      user: decoded,
    });
  } catch (err) {
    return NextResponse.json(
      { authenticated: false, error: 'Invalid token' },
      { status: 401 }
    );
  }
}