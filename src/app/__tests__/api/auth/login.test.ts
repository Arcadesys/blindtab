import { NextRequest } from 'next/server';
import { POST } from '@/app/api/auth/login/route';
import { PrismaClient } from '@prisma/client';
import * as authUtils from '@/utils/authUtils';

jest.mock('@prisma/client', () => {
  const mockPrisma = {
    user: {
      findUnique: jest.fn(),
    },
    $disconnect: jest.fn(),
  };
  return {
    PrismaClient: jest.fn(() => mockPrisma),
  };
});

jest.mock('@/utils/authUtils', () => ({
  comparePasswords: jest.fn(),
  generateJwtToken: jest.fn(),
  setAuthCookie: jest.fn(),
}));

describe('Login API', () => {
  let mockPrisma: any;
  
  beforeEach(() => {
    jest.clearAllMocks();
    mockPrisma = new PrismaClient();
  });
  
  it('should return 400 if required fields are missing', async () => {
    const request = new NextRequest('http://localhost:3000/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email: 'test@example.com' }), // Missing password
    });
    
    const response = await POST(request);
    const data = await response.json();
    
    expect(response.status).toBe(400);
    expect(data.error).toBe('Email and password are required');
  });
  
  it('should return 401 if user does not exist', async () => {
    mockPrisma.user.findUnique.mockResolvedValue(null);
    
    const request = new NextRequest('http://localhost:3000/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: 'nonexistent@example.com',
        password: 'password123',
      }),
    });
    
    const response = await POST(request);
    const data = await response.json();
    
    expect(response.status).toBe(401);
    expect(data.error).toBe('Invalid credentials');
    expect(mockPrisma.user.findUnique).toHaveBeenCalledWith({
      where: { email: 'nonexistent@example.com' },
    });
  });
  
  it('should return 401 if password is incorrect', async () => {
    mockPrisma.user.findUnique.mockResolvedValue({
      id: '1',
      email: 'test@example.com',
      password: 'hashedPassword',
    });
    
    (authUtils.comparePasswords as jest.Mock).mockResolvedValue(false);
    
    const request = new NextRequest('http://localhost:3000/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: 'test@example.com',
        password: 'wrongpassword',
      }),
    });
    
    const response = await POST(request);
    const data = await response.json();
    
    expect(response.status).toBe(401);
    expect(data.error).toBe('Invalid credentials');
    expect(authUtils.comparePasswords).toHaveBeenCalledWith('wrongpassword', 'hashedPassword');
  });
  
  it('should login successfully with correct credentials', async () => {
    mockPrisma.user.findUnique.mockResolvedValue({
      id: '1',
      name: 'Test User',
      email: 'test@example.com',
      password: 'hashedPassword',
    });
    
    (authUtils.comparePasswords as jest.Mock).mockResolvedValue(true);
    
    (authUtils.generateJwtToken as jest.Mock).mockReturnValue('jwt-token');
    
    const request = new NextRequest('http://localhost:3000/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: 'test@example.com',
        password: 'password123',
      }),
    });
    
    const response = await POST(request);
    const data = await response.json();
    
    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.user).toEqual({
      id: '1',
      name: 'Test User',
      email: 'test@example.com',
    });
    expect(authUtils.generateJwtToken).toHaveBeenCalledWith('1');
    expect(authUtils.setAuthCookie).toHaveBeenCalledWith('jwt-token');
  });
});
