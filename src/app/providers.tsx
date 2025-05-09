'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { AuthProvider } from './context/AuthContext';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <AuthProvider>
          {children}
        </AuthProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}     