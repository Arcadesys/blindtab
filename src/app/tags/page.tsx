import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

async function getTags() {
  try {
    const tags = await prisma.tag.findMany({
      include: {
        _count: {
          select: {
            songs: true,
          },
        },
      },
      orderBy: {
        name: 'asc',
      },
    });
    return tags;
  } catch (error) {
    console.error('Error fetching tags:', error);
    return [];
  }
}

export default async function TagsPage() {
  const tags = await getTags();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Tags</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tags.map((tag) => (
          <Link 
            href={`/tags/${tag.id}`} 
            key={tag.id}
            className="block p-6 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">{tag.name}</h2>
            <p className="text-gray-600">
              {tag._count.songs} {tag._count.songs === 1 ? 'song' : 'songs'}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
} 