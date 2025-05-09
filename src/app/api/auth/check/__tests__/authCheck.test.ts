import { GET } from '../route';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

jest.mock('next/headers', () => ({
  cookies: jest.fn(),
}));

jest.mock('@prisma/client', () => {
  const mockPrisma = {
    user: {
      findUnique: jest.fn((args) => {
        if (args.where.id === 'existing-user') {
          return Promise.resolve({ id: 'existing-user', name: 'Test User', email: 'test@example.com' });
        }
        return Promise.resolve(null);
      }),
    },
  };
  return { PrismaClient: jest.fn(() => mockPrisma) };
});

describe('GET /api/auth/check', () => {
  const mockCookies = require('next/headers').cookies;
  const prisma = new PrismaClient();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return 401 if no auth token is present', async () => {
    mockCookies.mockReturnValue({ get: jest.fn(() => null) });

    const response = await GET();
    expect(response).toEqual(NextResponse.json({ authenticated: false }, { status: 401 }));
  });

  it('should return 401 if the token is invalid', async () => {
    mockCookies.mockReturnValue({ get: jest.fn(() => ({ value: 'invalid-token' })) });
    jest.spyOn(jwt, 'verify').mockImplementation(() => { throw new Error('Invalid token'); });

    const response = await GET();
    expect(response).toEqual(NextResponse.json({ authenticated: false }, { status: 401 }));
  });

  it('should return 401 if the user is not found', async () => {
    mockCookies.mockReturnValue({ get: jest.fn(() => ({ value: 'valid-token' })) });
    jest.spyOn(jwt, 'verify').mockReturnValue({ userId: 'non-existent-user' } as any);

    const response = await GET();
    expect(response).toEqual(NextResponse.json({ authenticated: false }, { status: 401 }));
  });

  it('should return 200 and user data if authentication is successful', async () => {
    mockCookies.mockReturnValue({ get: jest.fn(() => ({ value: 'valid-token' })) });
    jest.spyOn(jwt, 'verify').mockReturnValue({ userId: 'existing-user' } as any);

    const response = await GET();
    expect(response).toEqual(NextResponse.json({ authenticated: true, user: { id: 'existing-user', name: 'Test User', email: 'test@example.com' } }));
  });
});
