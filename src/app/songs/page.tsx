import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

const prisma = new PrismaClient();

export default async function SongsPage() {
  // Get all songs (no auth filtering)
  const songs = await prisma.song.findMany({
    include: {
      tags: true,
    },
    orderBy: {
      updatedAt: 'desc',
    },
  });
  
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Songs</h1>
        <Link 
          href="/songs/create" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Create New Song
        </Link>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">All Songs</h2>
        {songs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {songs.map((song) => (
              <div key={song.id} className="border rounded-lg p-4 hover:shadow-md transition">
                <h3 className="text-xl font-medium mb-2">
                  <Link href={`/songs/${song.id}`} className="hover:text-blue-600">
                    {song.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-2">By {song.artist}</p>
                {song.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {song.tags.map((tag) => (
                      <span 
                        key={tag.id} 
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No songs available yet.</p>
        )}
      </div>
    </div>
  );
} 