import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const token = await getToken({ 
    req: request,
    secret: process.env.NEXTAUTH_SECRET
  });
  const isAuthenticated = !!token;
  
  // Define paths that require authentication
  const authRequiredPaths = [
    '/songs/create',
    '/songs/edit',
  ];
  
  // Check if the current path requires authentication
  const isAuthRequired = authRequiredPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  );
  
  // If the path requires authentication and the user is not authenticated, redirect to login
  if (isAuthRequired && !isAuthenticated) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }
  
  return NextResponse.next();
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: [
    '/songs/:path*',
    '/tags/:path*',
  ],
}; 