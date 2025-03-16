'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session, status } = useSession();
  const isLoading = status === 'loading';

  return (
    <nav className="max-w-7xl mx-auto flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">BlindTab</Link>
      
      <div className="flex gap-4 items-center">
        <Link href="/songs" className="text-xl hover:underline">Songs</Link>
        <Link href="/tags" className="text-xl hover:underline">Tags</Link>
        
        {isLoading ? (
          <span className="text-gray-300">Loading...</span>
        ) : session ? (
          <>
            <span className="text-gray-300">Hello, {session.user?.name || 'User'}</span>
            <button 
              onClick={() => signOut({ callbackUrl: '/' })}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link 
              href="/login" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
} 