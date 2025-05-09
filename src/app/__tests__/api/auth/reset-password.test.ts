import { NextRequest } from 'next/server';
import { POST, PUT } from '@/app/api/auth/reset-password/route';
import { PrismaClient } from '@prisma/client';
import * as authUtils from '@/utils/authUtils';

jest.mock('@prisma/client', () => {
  const mockPrisma = {
    user: {
      findUnique: jest.fn(),
      update: jest.fn(),
    },
    $disconnect: jest.fn(),
  };
  return {
    PrismaClient: jest.fn(() => mockPrisma),
  };
});

jest.mock('@/utils/authUtils', () => ({
  hashPassword: jest.fn(),
}));

describe('Password Reset API', () => {
  let mockPrisma: any;
  
  beforeEach(() => {
    jest.clearAllMocks();
    mockPrisma = new PrismaClient();
  });
  
  describe('POST - Request Password Reset', () => {
    it('should return 400 if email is missing', async () => {
      const request = new NextRequest('http://localhost:3000/api/auth/reset-password', {
        method: 'POST',
        body: JSON.stringify({}), // Missing email
      });
      
      const response = await POST(request);
      const data = await response.json();
      
      expect(response.status).toBe(400);
      expect(data.error).toBe('Email is required');
    });
    
    it('should return success even if user does not exist (for security)', async () => {
      mockPrisma.user.findUnique.mockResolvedValue(null);
      
      const request = new NextRequest('http://localhost:3000/api/auth/reset-password', {
        method: 'POST',
        body: JSON.stringify({ email: 'nonexistent@example.com' }),
      });
      
      const response = await POST(request);
      const data = await response.json();
      
      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.message).toBe('If an account with that email exists, a password reset link has been sent.');
      expect(mockPrisma.user.findUnique).toHaveBeenCalledWith({
        where: { email: 'nonexistent@example.com' },
      });
    });
    
    it('should return success if user exists', async () => {
      mockPrisma.user.findUnique.mockResolvedValue({
        id: '1',
        email: 'test@example.com',
      });
      
      const request = new NextRequest('http://localhost:3000/api/auth/reset-password', {
        method: 'POST',
        body: JSON.stringify({ email: 'test@example.com' }),
      });
      
      const response = await POST(request);
      const data = await response.json();
      
      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.message).toBe('If an account with that email exists, a password reset link has been sent.');
      expect(mockPrisma.user.findUnique).toHaveBeenCalledWith({
        where: { email: 'test@example.com' },
      });
    });
  });
  
  describe('PUT - Reset Password', () => {
    it('should return 400 if required fields are missing', async () => {
      const request = new NextRequest('http://localhost:3000/api/auth/reset-password', {
        method: 'PUT',
        body: JSON.stringify({ email: 'test@example.com' }), // Missing newPassword
      });
      
      const response = await PUT(request);
      const data = await response.json();
      
      expect(response.status).toBe(400);
      expect(data.error).toBe('Email and new password are required');
    });
    
    it('should return 404 if user does not exist', async () => {
      mockPrisma.user.findUnique.mockResolvedValue(null);
      
      const request = new NextRequest('http://localhost:3000/api/auth/reset-password', {
        method: 'PUT',
        body: JSON.stringify({
          email: 'nonexistent@example.com',
          newPassword: 'newpassword123',
        }),
      });
      
      const response = await PUT(request);
      const data = await response.json();
      
      expect(response.status).toBe(404);
      expect(data.error).toBe('User not found');
      expect(mockPrisma.user.findUnique).toHaveBeenCalledWith({
        where: { email: 'nonexistent@example.com' },
      });
    });
    
    it('should reset password successfully', async () => {
      mockPrisma.user.findUnique.mockResolvedValue({
        id: '1',
        email: 'test@example.com',
      });
      
      (authUtils.hashPassword as jest.Mock).mockResolvedValue('newhashed123');
      
      mockPrisma.user.update.mockResolvedValue({
        id: '1',
        email: 'test@example.com',
        password: 'newhashed123',
      });
      
      const request = new NextRequest('http://localhost:3000/api/auth/reset-password', {
        method: 'PUT',
        body: JSON.stringify({
          email: 'test@example.com',
          newPassword: 'newpassword123',
        }),
      });
      
      const response = await PUT(request);
      const data = await response.json();
      
      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.message).toBe('Password has been reset successfully');
      expect(authUtils.hashPassword).toHaveBeenCalledWith('newpassword123');
      expect(mockPrisma.user.update).toHaveBeenCalledWith({
        where: { id: '1' },
        data: { password: 'newhashed123' },
      });
    });
  });
});
