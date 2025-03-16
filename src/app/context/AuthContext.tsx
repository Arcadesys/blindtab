'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Get the base URL for API calls
const getBaseUrl = () => {
  // In development, use the local server
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3001';
  }
  // In production, use the deployed URL
  return '';
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const baseUrl = getBaseUrl();

  useEffect(() => {
    // Check if user is logged in on mount
    const checkAuth = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/auth/me`);
        
        // If response is OK, set the user
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        } 
        // If unauthorized, that's expected when not logged in
        else if (response.status === 401) {
          setUser(null);
        }
        // For other errors, log them
        else {
          console.error('Auth check error:', response.statusText);
        }
      } catch (error) {
        // Only log network errors
        console.error('Auth check network error:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [baseUrl]);

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch(`${baseUrl}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: data.error || 'Login failed',
        };
      }

      setUser(data.user);
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        error: 'An unexpected error occurred',
      };
    }
  };

  const logout = async () => {
    try {
      await fetch(`${baseUrl}/api/auth/logout`, {
        method: 'POST',
      });
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
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