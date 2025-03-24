import Link from 'next/link';
import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import TagBadge from '@/app/components/TagBadge';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

interface TagPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const tag = await getTag(params.id);
  
  if (!tag) {
    return {
      title: 'Tag Not Found',
    };
  }
  
  return {
    title: `${tag.name} Songs | BlindTab`,
    description: `Browse songs tagged with ${tag.name}`,
  };
}

async function getTag(id: string) {
  try {
    const tag = await prisma.tag.findUnique({
      where: {
        id,
      },
      include: {
        songs: {
          include: {
            tags: true,
          },
          orderBy: {
            title: 'asc',
          },
        },
      },
    });
    
    return tag;
  } catch (error) {
    console.error('Error fetching tag:', error);
    return null;
  }
}

export default async function TagPage({ params }: TagPageProps) {
  const tag = await getTag(params.id);
  
  if (!tag) {
    notFound();
  }
  
  return (
    <div className="max-w-7xl mx-auto p-6">
      <Link 
        href="/tags" 
        className="inline-block mb-6 text-blue-600 hover:underline"
      >
        ← Back to Tags
      </Link>
      
      <h1 className="text-4xl font-bold mb-8">
        {tag.name} Songs
        <span className="text-gray-500 text-2xl ml-3">
          ({tag.songs.length})
        </span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tag.songs.map((song) => (
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
                {song.tags.map((songTag) => (
                  <TagBadge 
                    key={songTag.id} 
                    tag={songTag} 
                    size="small" 
                    isActive={songTag.id === tag.id}
                    asLink={false}
                  />
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
} 