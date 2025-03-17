import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define paths that require authentication
const PROTECTED_PATHS = [
  '/api/songs/create',
  '/api/songs/edit',
  '/songs/create',
  '/songs/edit',
];

// Define paths that are explicitly public
const PUBLIC_PATHS = [
  '/login',
  '/api/auth/login',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the path is protected
  const isProtectedPath = PROTECTED_PATHS.some(path => 
    pathname.startsWith(path)
  );
  
  // Check if the path is explicitly public
  const isPublicPath = PUBLIC_PATHS.some(path => 
    pathname.startsWith(path)
  );
  
  // If it's a public path, allow access
  if (isPublicPath) {
    return NextResponse.next();
  }
  
  // If it's a protected path, check for auth
  if (isProtectedPath) {
    // Get the auth token from cookies
    const authToken = request.cookies.get('auth_token')?.value;
    
    // If no token or invalid token, redirect to login
    if (!authToken) {
      const url = new URL('/login', request.url);
      url.searchParams.set('from', pathname);
      return NextResponse.redirect(url);
    }
    
    // In a real app, you'd verify the token here
    // For this simple example, we'll just check if it exists
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/api/songs/:path*',
    '/songs/create/:path*',
    '/songs/edit/:path*',
    '/login',
  ],
}; 