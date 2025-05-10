'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SoundContextType {
  soundsEnabled: boolean;
  toggleSounds: () => void;
}

const defaultContext: SoundContextType = {
  soundsEnabled: true,
  toggleSounds: () => {},
};

const SoundContext = createContext<SoundContextType>(defaultContext);

export const useSounds = () => useContext(SoundContext);

interface SoundProviderProps {
  children: ReactNode;
}

export function SoundProvider({ children }: SoundProviderProps) {
  const [soundsEnabled, setSoundsEnabled] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedPreference = localStorage.getItem('blindtab-sounds-enabled');
      if (savedPreference !== null) {
        setSoundsEnabled(savedPreference === 'true');
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('blindtab-sounds-enabled', soundsEnabled.toString());
    }
  }, [soundsEnabled]);

  const toggleSounds = () => {
    setSoundsEnabled(prev => !prev);
  };

  return (
    <SoundContext.Provider value={{ soundsEnabled, toggleSounds }}>
      {children}
    </SoundContext.Provider>
  );
}
