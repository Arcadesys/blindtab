import { POST } from '@/app/api/auth/logout/route';
import * as authUtils from '@/utils/authUtils';

jest.mock('@/utils/authUtils', () => ({
  removeAuthCookie: jest.fn(),
}));

describe('Logout API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  it('should logout successfully', async () => {
    const response = await POST();
    const data = await response.json();
    
    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(authUtils.removeAuthCookie).toHaveBeenCalled();
  });
  
  it('should handle errors during logout', async () => {
    (authUtils.removeAuthCookie as jest.Mock).mockImplementation(() => {
      throw new Error('Logout error');
    });
    
    const response = await POST();
    const data = await response.json();
    
    expect(response.status).toBe(500);
    expect(data.error).toBe('Logout failed');
  });
});
