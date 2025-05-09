'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';

import { AuthUser, OAuthProvider } from '@/types/auth';

interface AuthContextType {
  isAuthenticated: boolean;
  user: AuthUser | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  signInWithProvider: (providerId: string) => Promise<boolean>;
  logout: () => Promise<void>;
  loading: boolean;
  oauthProviders: OAuthProvider[];
}

const OAUTH_PROVIDERS: OAuthProvider[] = [
  {
    id: 'google',
    name: 'Google',
    icon: 'google',
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: 'github',
  },
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { data: session, status } = useSession();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (status === 'loading') {
      setLoading(true);
      return;
    }

    if (session && session.user) {
      setIsAuth(true);
      setUser({
        id: session.user.id,
        name: session.user.name || null,
        email: session.user.email || '',
        image: session.user.image,
      });
    } else {
      setIsAuth(false);
      setUser(null);
    }
    
    setLoading(false);
  }, [session, status]);

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

  const signInWithProvider = async (providerId: string): Promise<boolean> => {
    try {
      await signIn(providerId, { callbackUrl: '/songs' });
      return true;
    } catch (error) {
      console.error(`${providerId} sign in error:`, error);
      return false;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await signOut({ redirect: false });
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
      signInWithProvider,
      logout,
      loading,
      oauthProviders: OAUTH_PROVIDERS,
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