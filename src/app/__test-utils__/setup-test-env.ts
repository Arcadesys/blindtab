import { config } from 'dotenv';
config({ path: '.env.test' });

import { mockPrisma } from './mocks/prisma';

jest.mock('@prisma/client', () => {
  return {
    PrismaClient: jest.fn().mockImplementation(() => {
      return {
        user: {
          findUnique: jest.fn(),
          findMany: jest.fn(),
          create: jest.fn(),
          update: jest.fn(),
          delete: jest.fn(),
        },
        song: {
          findUnique: jest.fn(),
          findMany: jest.fn(),
          create: jest.fn(),
          update: jest.fn(),
          delete: jest.fn(),
        },
        tag: {
          findUnique: jest.fn(),
          findMany: jest.fn(),
          create: jest.fn(),
        },
        $disconnect: jest.fn(),
      };
    }),
  };
});

jest.mock('next/headers', () => {
  return {
    cookies: jest.fn(() => Promise.resolve({
      get: jest.fn((name) => {
        if (name === 'auth_token') {
          return { value: 'mock-token' };
        }
        return null;
      }),
    })),
  };
});

jest.mock('jsonwebtoken', () => {
  return {
    verify: jest.fn((token, secret) => {
      if (token === 'mock-token') {
        return { userId: 'mock-user-id' };
      }
      throw new Error('Invalid token');
    }),
    sign: jest.fn(() => 'mock-token'),
  };
});

jest.mock('bcrypt', () => {
  return {
    hash: jest.fn(() => Promise.resolve('hashed-password')),
    compare: jest.fn((password, hash) => {
      return Promise.resolve(password === 'correct-password');
    }),
  };
});
