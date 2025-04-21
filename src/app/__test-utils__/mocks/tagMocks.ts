import { Tag } from '@prisma/client';

export const mockTag: Tag = {
  id: '1',
  name: 'Test Tag',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const mockTags: Tag[] = [
  mockTag,
  {
    id: '2',
    name: 'Another Tag',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    name: 'Third Tag',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]; 