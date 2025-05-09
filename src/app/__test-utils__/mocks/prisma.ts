import { PrismaClient } from '@prisma/client';
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended';

export const mockPrisma = mockDeep<PrismaClient>();
export const prisma = mockPrisma;

beforeEach(() => {
  mockReset(mockPrisma);
});

export type MockPrismaClient = DeepMockProxy<PrismaClient>;
