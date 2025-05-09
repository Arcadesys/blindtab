'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie, isAuthenticated } from '@/utils/cookieUtils';
import { AuthUser } from '@/types/auth';

interface AuthContextType {
  isAuthenticated: boolean;
  user: AuthUser | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    // Check authentication status on mount
    (async () => {
      const auth = await isAuthenticated();
      setIsAuth(auth);
      if (auth) {
        // Optionally, fetch user info from an endpoint or decode JWT
        const token = await getCookie('auth_token');
        if (token) {
          // You may want to decode the JWT here to get user info
          // For now, just set as authenticated
          setUser(null); // Or fetch user info if needed
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    })();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) return false;
      setIsAuth(true);
      // Optionally, fetch user info here
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      if (!response.ok) return false;
      return login(email, password);
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setIsAuth(false);
      setUser(null);
      router.push('/songs');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated: isAuth,
      user,
      login,
      register,
      logout,
      loading,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}        