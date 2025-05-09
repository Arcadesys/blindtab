

import { NextResponse } from 'next/server';
import { Auth } from '@auth/core';
import { authOptions } from '../[...nextauth]/route';

export async function GET(request: Request) {
  try {
    const response = await Auth(request, authOptions);
    const { status } = response;
    const data = await response.json();

    if (!data?.user) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );
    }

    return NextResponse.json({
      authenticated: true,
      user: data.user,
    }, { status });
  } catch (err) {
    console.error('Auth check error:', err);
    return NextResponse.json(
      { error: 'Authentication check failed' },
      { status: 500 }
    );
  }
// (No trailing brace here; removed extra closing brace)
}                              