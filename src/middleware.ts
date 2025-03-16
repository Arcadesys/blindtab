import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './lib/jwt';

// Define which routes require authentication
const protectedRoutes = [
  '/songs/create',
  '/profile',
  // Add other protected routes here
];

// Define public routes that should never redirect to login
const publicRoutes = [
  '/auth',
  '/api/auth/login',
  '/api/auth/logout',
  '/api/register',
  // Add other public routes here
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the route is protected
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  );
  
  // If it's not a protected route, allow the request
  if (!isProtectedRoute) {
    return NextResponse.next();
  }
  
  // Get the token from the cookies
  const token = request.cookies.get('auth-token')?.value;
  
  // If there's no token, redirect to auth page
  if (!token) {
    const url = new URL('/auth', request.url);
    url.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(url);
  }
  
  // Verify the token
  const payload = verifyToken(token);
  
  // If the token is invalid, redirect to auth page
  if (!payload) {
    const url = new URL('/auth', request.url);
    url.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(url);
  }
  
  // Token is valid, allow the request
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api/auth/* (authentication routes)
     * 2. /_next/static (static files)
     * 3. /_next/image (image optimization files)
     * 4. /favicon.ico (favicon file)
     * 5. /public/* (public files)
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
}; 