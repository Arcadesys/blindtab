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
];

const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET || '';

export async function middleware(request: NextRequest) {
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
    // Get the auth session from NextAuth
    const token = await getToken({ 
      req: request, 
      secret: NEXTAUTH_SECRET 
    });
    
    // If no token, redirect to login
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
    '/api/tags/manage/:path*',
    '/tags/manage/:path*',
  ],
};                                                                                                                        