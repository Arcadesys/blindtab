import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query: { id, tagName } } = req;

  if (!id || !tagName) {
    return res.status(400).json({ error: 'Missing song ID or tag name' });
  }

  try {
    switch (method) {
      case 'POST':
        // Add tag to song
        const tag = await prisma.tag.upsert({
          where: { name: String(tagName) },
          update: {},
          create: { name: String(tagName) }
        });

        await prisma.song.update({
          where: { id: String(id) },
          data: {
            tags: {
              connect: { id: tag.id }
            }
          }
        });

        return res.status(200).json({ success: true });

      case 'DELETE':
        // Remove tag from song
        const existingTag = await prisma.tag.findUnique({
          where: { name: String(tagName) }
        });

        if (!existingTag) {
          return res.status(404).json({ error: 'Tag not found' });
        }

        await prisma.song.update({
          where: { id: String(id) },
          data: {
            tags: {
              disconnect: { id: existingTag.id }
            }
          }
        });

        return res.status(200).json({ success: true });

      default:
        res.setHeader('Allow', ['POST', 'DELETE']);
        return res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
} 