import Link from 'next/link';
import { PrismaClient } from '@prisma/client';
import { notFound, redirect } from 'next/navigation';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/route';

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

export default async function SongDetailPage({ params }: SongPageProps) {
  const session = await getServerSession(authOptions);
  const { id } = params;
  
  // Get the song
  const song = await prisma.song.findUnique({
    where: { id },
    include: {
      tags: true,
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });
  
  // If song doesn't exist, return 404
  if (!song) {
    notFound();
  }
  
  // Check if user is authorized to view this song
  const isPublic = song.isPublic;
  const isOwner = session?.user?.email === song.user?.email;
  
  // If song is not public and user is not the owner, redirect to songs page
  if (!isPublic && !isOwner) {
    redirect('/songs');
  }
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <Link href="/songs" className="text-blue-600 hover:underline">
          ← Back to Songs
        </Link>
      </div>
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{song.title}</h1>
        <p className="text-xl text-gray-600">By {song.artist}</p>
        
        {isOwner && (
          <div className="mt-4 flex gap-2">
            <Link 
              href={`/songs/edit/${song.id}`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Edit
            </Link>
          </div>
        )}
      </div>
      
      <div className="flex flex-wrap gap-4 mb-6">
        {song.key && (
          <div className="bg-gray-100 px-4 py-2 rounded">
            <span className="font-medium">Key:</span> {song.key}
          </div>
        )}
        
        {song.tempo && (
          <div className="bg-gray-100 px-4 py-2 rounded">
            <span className="font-medium">Tempo:</span> {song.tempo} BPM
          </div>
        )}
        
        {song.timeSignature && (
          <div className="bg-gray-100 px-4 py-2 rounded">
            <span className="font-medium">Time Signature:</span> {song.timeSignature}
          </div>
        )}
        
        <div className="bg-gray-100 px-4 py-2 rounded">
          <span className="font-medium">Visibility:</span> {isPublic ? 'Public' : 'Private'}
        </div>
      </div>
      
      {song.tags.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {song.tags.map((tag) => (
              <Link 
                key={tag.id} 
                href={`/tags/${tag.id}`}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {tag.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Leadsheet</h2>
        <div className="bg-white p-6 border rounded-lg whitespace-pre-wrap font-mono">
          {song.content}
        </div>
      </div>
    </div>
  );
} 