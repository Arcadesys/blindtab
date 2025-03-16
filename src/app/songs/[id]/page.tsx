import Link from 'next/link';
import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

interface SongPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: SongPageProps): Promise<Metadata> {
  const song = await getSong(params.id);
  
  if (!song) {
    return {
      title: 'Song Not Found',
    };
  }
  
  return {
    title: `${song.title} by ${song.artist} | BlindTab`,
    description: `View chord chart and lyrics for ${song.title} by ${song.artist}`,
  };
}

async function getSong(id: string) {
  try {
    const song = await prisma.song.findUnique({
      where: {
        id,
      },
      include: {
        tags: true,
      },
    });
    
    return song;
  } catch (error) {
    console.error('Error fetching song:', error);
    return null;
  }
}

function formatMarkdown(content: string) {
  // This is a simple markdown parser for the song content
  // In a real app, you'd use a proper markdown library
  
  // Format the title (# Title)
  content = content.replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mb-6">$1</h1>');
  
  // Add line breaks
  content = content.replace(/\n\n/g, '<br><br>');
  
  // Keep chord formatting
  content = content.replace(/^([A-G][#b]?[m]?[7]?[\s\t]+)+(.*)$/gm, 
    '<div class="chord-line"><span class="chord">$&</span></div>');
  
  // Format notes/comments
  content = content.replace(/\*(.+)\*/g, '<em class="text-gray-600">$1</em>');
  
  return content;
}

export default async function SongPage({ params }: SongPageProps) {
  const song = await getSong(params.id);
  
  if (!song) {
    notFound();
  }
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link 
        href="/songs" 
        className="inline-block mb-6 text-blue-600 hover:underline"
      >
        ← Back to Songs
      </Link>
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{song.title}</h1>
        <p className="text-xl text-gray-600">by {song.artist}</p>
      </div>
      
      <div className="flex flex-wrap gap-4 mb-8">
        {song.key && (
          <div className="bg-gray-100 px-4 py-2 rounded-lg">
            <span className="font-medium">Key:</span> {song.key}
          </div>
        )}
        
        {song.tempo && (
          <div className="bg-gray-100 px-4 py-2 rounded-lg">
            <span className="font-medium">Tempo:</span> {song.tempo} BPM
          </div>
        )}
        
        {song.timeSignature && (
          <div className="bg-gray-100 px-4 py-2 rounded-lg">
            <span className="font-medium">Time Signature:</span> {song.timeSignature}
          </div>
        )}
      </div>
      
      {song.tags.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Tags:</h2>
          <div className="flex flex-wrap gap-2">
            {song.tags.map((tag) => (
              <Link 
                key={tag.id} 
                href={`/tags/${tag.id}`}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors"
              >
                {tag.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      
      <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm">
        <div 
          className="song-content font-mono text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formatMarkdown(song.content) }}
        />
      </div>
    </div>
  );
} 