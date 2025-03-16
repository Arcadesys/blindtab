import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, googleProvider } from '../utils/firebase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: Error | null;
  signIn: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      setLoading(false);
    }, (error) => {
      console.error('[Auth] Auth state change error:', error);
      setError(error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return result.user;
    } catch (error: any) {
      console.error('[Auth] Google sign-in error:', error);
      
      // Handle unauthorized domain error
      if (error.code === 'auth/unauthorized-domain') {
        console.warn('[Auth] This domain is not authorized in Firebase. Add it in the Firebase Console -> Authentication -> Sign-in method -> Authorized domains');
        console.warn('[Auth] Current domain:', window.location.hostname);
        
        // For development purposes, you can use a workaround
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
          console.info('[Auth] For local development, please use the Firebase emulator with VITE_USE_FIREBASE_EMULATOR=true');
        } else if (window.location.hostname.includes('-projects.vercel.app') || 
                  window.location.hostname.includes('-staging.vercel.app') || 
                  window.location.hostname.includes('-preview.vercel.app')) {
          console.info('[Auth] For preview deployments, please add this domain to Firebase authorized domains list');
          console.info('[Auth] Or use the production domain that is already authorized');
        }
      }
      
      throw error;
    }
  };

  const signIn = async () => {
    try {
      return await signInWithGoogle();
    } catch (error) {
      setError(error instanceof Error ? error : new Error('Failed to sign in'));
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      setError(error instanceof Error ? error : new Error('Failed to sign out'));
      throw error;
    }
  };

  const value = {
    user,
    loading,
    error,
    signIn,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
} 