'use client';

import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { user, loading, logout, isAuthenticated } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/');
    router.refresh();
  };

  return (
    <nav className="max-w-7xl mx-auto flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">BlindTab</Link>
      
      <div className="flex gap-4 items-center">
        <Link href="/songs" className="text-xl hover:underline">Songs</Link>
        <Link href="/tags" className="text-xl hover:underline">Tags</Link>
        
        {loading ? (
          <span className="text-gray-300">Loading...</span>
        ) : isAuthenticated ? (
          <>
            <span className="text-gray-300">Hello, {user?.name || 'User'}</span>
            <button 
              onClick={handleLogout}
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