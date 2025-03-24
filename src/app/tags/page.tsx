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
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Tags</h1>
        <Link 
          href="/tags/manage" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Manage Tags
        </Link>
      </div>
      
      {tags.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500 dark:text-gray-400">No tags found.</p>
          <Link 
            href="/tags/manage" 
            className="mt-4 inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Create your first tag
          </Link>
        </div>
      ) : (
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
      )}
    </div>
  );
} 