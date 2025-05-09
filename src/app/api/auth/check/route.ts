

import { NextResponse } from 'next/server';

import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

  try {
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
  } catch (err) {
    console.error('Auth check error:', err);
    return NextResponse.json(
      { error: 'Authentication check failed' },
      { status: 500 }
    );
  }
}                                                                                                                                                      