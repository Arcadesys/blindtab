import { NextRequest } from 'next/server';
import { POST } from '@/app/api/auth/register/route';
import { PrismaClient } from '@prisma/client';

jest.mock('@prisma/client', () => {
  const mockPrisma = {
    user: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
    $disconnect: jest.fn(),
  };
  return {
    PrismaClient: jest.fn(() => mockPrisma),
  };
});

describe('Register API', () => {
  let mockPrisma: any;
  
  beforeEach(() => {
    jest.clearAllMocks();
    mockPrisma = new PrismaClient();
  });
  
  it('should return 400 if required fields are missing', async () => {
    const request = new NextRequest('http://localhost:3000/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name: 'Test User' }), // Missing email and password
    });
    
    const response = await POST(request);
    const data = await response.json();
    
    expect(response.status).toBe(400);
    expect(data.error).toBe('Name, email, and password are required');
  });
  
  it('should return 409 if user already exists', async () => {
    mockPrisma.user.findUnique.mockResolvedValue({
      id: '1',
      email: 'existing@example.com',
    });
    
    const request = new NextRequest('http://localhost:3000/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Existing User',
        email: 'existing@example.com',
        password: 'password123',
      }),
    });
    
    const response = await POST(request);
    const data = await response.json();
    
    expect(response.status).toBe(409);
    expect(data.error).toBe('User with this email already exists');
    expect(mockPrisma.user.findUnique).toHaveBeenCalledWith({
      where: { email: 'existing@example.com' },
    });
  });
  
  it('should create a new user successfully', async () => {
    mockPrisma.user.findUnique.mockResolvedValue(null);
    
    mockPrisma.user.create.mockResolvedValue({
      id: '1',
      name: 'New User',
      email: 'new@example.com',
    });
    
    const request = new NextRequest('http://localhost:3000/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        name: 'New User',
        email: 'new@example.com',
        password: 'password123',
      }),
    });
    
    const response = await POST(request);
    const data = await response.json();
    
    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.user).toEqual({
      id: '1',
      name: 'New User',
      email: 'new@example.com',
    });
    expect(mockPrisma.user.create).toHaveBeenCalled();
  });
});
