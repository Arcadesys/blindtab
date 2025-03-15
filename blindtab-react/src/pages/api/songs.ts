import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { SongData } from '../../types/song';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  try {
    switch (method) {
      case 'GET':
        if (req.query.id) {
          // Get single song
          const song = await prisma.song.findUnique({
            where: { id: String(req.query.id) },
            include: { tags: true }
          });
          if (!song) {
            return res.status(404).json({ error: 'Song not found' });
          }
          return res.status(200).json(song);
        } else {
          // Get all songs
          const songs = await prisma.song.findMany({
            select: {
              id: true,
              title: true,
              artist: true,
              content: true
            }
          });
          return res.status(200).json(songs);
        }

      case 'POST':
        // Create song
        const songData: SongData = req.body;
        const newSong = await prisma.song.create({
          data: {
            title: songData.songInfo.title,
            artist: songData.songInfo.artist,
            key: songData.songInfo.key,
            tempo: songData.songInfo.tempo,
            timeSignature: songData.songInfo.timeSignature,
            content: songData.songData
          }
        });
        return res.status(201).json(newSong);

      case 'PUT':
        // Update song
        const { id } = req.query;
        const updatedSong = await prisma.song.update({
          where: { id: String(id) },
          data: {
            title: req.body.songInfo.title,
            artist: req.body.songInfo.artist,
            key: req.body.songInfo.key,
            tempo: req.body.songInfo.tempo,
            timeSignature: req.body.songInfo.timeSignature,
            content: req.body.songData
          }
        });
        return res.status(200).json(updatedSong);

      case 'DELETE':
        // Delete song
        await prisma.song.delete({
          where: { id: String(req.query.id) }
        });
        return res.status(204).end();

      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        return res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
} 