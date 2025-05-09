import { config } from 'dotenv';
config({ path: '.env.test' });

import { prisma } from './mocks/prisma';
import { PrismaClient } from '@prisma/client';

jest.mock('@prisma/client', () => {
  return {
    PrismaClient: jest.fn(() => prisma),
  };
});

jest.mock('next/headers', () => {
  return {
    cookies: jest.fn(() => ({
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

export { prisma };
