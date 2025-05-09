import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Define paths that require authentication
const PROTECTED_PATHS = [
  '/api/songs/create',
  '/api/songs/edit',
  '/songs/create',
  '/songs/edit',
  '/api/tags/manage',
  '/tags/manage',
];

// Define paths that are explicitly public
const PUBLIC_PATHS = [
  '/login',
  '/register',
  '/api/auth/login',
  '/api/auth/register',
  '/api/auth/callback',
  '/api/auth/signin',
  '/api/auth/signout',
  '/api/auth/session',
  '/api/auth/csrf',
  '/api/auth/providers',
  '/api/auth/verify-request',
  '/api/auth/error',
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the path is protected
  const isProtectedPath = PROTECTED_PATHS.some(path => 
    pathname.startsWith(path)
  );
  
  // Check if the path is explicitly public
  const isPublicPath = PUBLIC_PATHS.some(path => 
    pathname.startsWith(path)
  ) || pathname.startsWith('/api/auth/');
  
  // If it's a public path, allow access
  if (isPublicPath) {
    return NextResponse.next();
  }
  
  // If it's a protected path, check for auth using NextAuth
  if (isProtectedPath) {
    const token = await getToken({ 
      req: request, 
      secret: process.env.NEXTAUTH_SECRET 
    });
    
    if (!token) {
      const url = new URL('/login', request.url);
      url.searchParams.set('from', pathname);
      return NextResponse.redirect(url);
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/api/songs/:path*',
    '/songs/create/:path*',
    '/songs/edit/:path*',
    '/login',
    '/register',
    '/api/auth/:path*',
    '/api/tags/manage/:path*',
    '/tags/manage/:path*',
  ],
};                                                                                                                                                                                                                                                                                                                                                                        