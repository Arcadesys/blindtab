'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
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
  const { data: session, status } = useSession();
  const router = useRouter();
  
  const user: AuthUser | null = session?.user ? {
    id: session.user.email as string, // Use email as ID since NextAuth doesn't provide ID by default
    email: session.user.email as string,
    name: session.user.name || null,
  } : null;
  
  useEffect(() => {
    setLoading(status === 'loading');
  }, [status]);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });
      
      return result?.ok || false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };
  
  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      
      if (!response.ok) {
        return false;
      }
      
      return login(email, password);
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };
  
  const logout = async (): Promise<void> => {
    try {
      await signOut({ redirect: false });
      router.push('/songs');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated: !!session, 
      user, 
      login, 
      register, 
      logout, 
      loading 
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