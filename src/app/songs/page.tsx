import Link from 'next/link';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

async function getSongs() {
  try {
    const songs = await prisma.song.findMany({
      include: {
        tags: true,
      },
      orderBy: {
        title: 'asc',
      },
    });
    return songs;
  } catch (error) {
    console.error('Error fetching songs:', error);
    return [];
  }
}

export default async function SongsPage() {
  const songs = await getSongs();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Songs</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {songs.map((song) => (
          <Link 
            href={`/songs/${song.id}`} 
            key={song.id}
            className="block p-6 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">{song.title}</h2>
            <p className="text-gray-600 mb-4">by {song.artist}</p>
            
            {song.key && (
              <p className="text-sm mb-1">
                <span className="font-medium">Key:</span> {song.key}
              </p>
            )}
            
            {song.timeSignature && (
              <p className="text-sm mb-1">
                <span className="font-medium">Time:</span> {song.timeSignature}
              </p>
            )}
            
            {song.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {song.tags.map((tag) => (
                  <span 
                    key={tag.id} 
                    className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
} 