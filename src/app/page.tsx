import Link from 'next/link';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function Home() {
  // Get a few recent songs to showcase
  const recentSongs = await prisma.song.findMany({
    take: 3,
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      tags: true,
    },
  });

  return (
    <div className="container mx-auto px-0 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Welcome to BlindTab</h1>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          A simple, accessible leadsheet viewer for musicians. Practice with auto-scrolling, 
          metronome support, and customizable display options.
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            href="/songs" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium"
          >
            Browse Songs
          </Link>
          <Link 
            href="/songs/create" 
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 px-6 py-3 rounded-lg text-lg font-medium"
          >
            Create New Song
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="text-blue-600 dark:text-blue-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Leadsheet Display</h3>
            <p>
              View chord charts and lyrics with customizable font sizes. 
              Easily navigate through the song with keyboard shortcuts.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="text-blue-600 dark:text-blue-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Auto-Scrolling</h3>
            <p>
              Enable auto-scrolling to keep your hands free while playing. 
              Adjust the tempo to match your playing speed.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="text-blue-600 dark:text-blue-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Metronome</h3>
            <p>
              Practice with a built-in metronome. Adjust the tempo to match 
              the song's BPM or your preferred practice speed.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Songs Section */}
      {recentSongs.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold text-center mb-10">Recent Songs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentSongs.map((song) => (
              <Link 
                key={song.id} 
                href={`/songs/${song.id}`}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{song.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{song.artist}</p>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {song.key && <span className="mr-2">Key: {song.key}</span>}
                    {song.tempo && <span>Tempo: {song.tempo} BPM</span>}
                  </div>
                  
                  {song.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {song.tags.slice(0, 2).map((tag) => (
                        <span 
                          key={tag.id} 
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                        >
                          {tag.name}
                        </span>
                      ))}
                      {song.tags.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full">
                          +{song.tags.length - 2}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/songs" 
              className="inline-block bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 px-6 py-3 rounded-lg text-lg font-medium"
            >
              View All Songs
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
