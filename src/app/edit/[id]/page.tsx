import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { PrismaClient } from '@prisma/client';
import SongEditClient from './SongEditClient';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

// This function needs to be in a server component
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = (await params).id;
  const song = await getSong(id);
  
  if (!song) {
    return {
      title: 'Song Not Found',
      description: 'The requested song could not be found',
    };
  }
  
  return {
    title: `Edit ${song.title} | BlindTab`,
    description: `Edit ${song.title} by ${song.artist}`,
  };
}

async function getSong(id: string) {
  return prisma.song.findUnique({
    where: { id },
    include: {
      tags: true,
    },
  });
}

export default async function SongEditPage({ params }: { params: { id: string } }) {
  const id = (await params).id;
  const song = await getSong(id);
  
  if (!song) {
    notFound();
  }
  
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    }>
      <SongEditClient song={song} />
    </Suspense>
  );
} 