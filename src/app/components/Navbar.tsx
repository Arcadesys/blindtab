'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">BlindTab</Link>
      
      <div className="flex gap-4 items-center">
        <Link href="/songs" className="text-xl hover:underline">Songs</Link>
        <Link href="/tags" className="text-xl hover:underline">Tags</Link>
        <Link href="/songs/create" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Create Song
        </Link>
      </div>
    </nav>
  );
} 