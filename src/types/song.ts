import { Tag } from '@prisma/client';

export interface Song {
  id: string;
  title: string;
  artist: string;
  content: string;
  key?: string | null;
  tempo?: number | null;
  timeSignature?: string | null;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
  userId?: string | null;
  tags: Tag[];
} 