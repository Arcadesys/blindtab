import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Allow all requests
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