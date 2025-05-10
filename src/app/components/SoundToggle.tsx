'use client';

import { useState, useEffect } from 'react';
import { useSounds } from '../context/SoundContext';

export default function SoundToggle() {
  const { soundsEnabled, toggleSounds } = useSounds();
  
  return (
    <button
      onClick={toggleSounds}
      className={`relative inline-flex items-center h-6 rounded-full w-11 ${
        soundsEnabled ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
      }`}
      aria-pressed={soundsEnabled}
      aria-label="Toggle sound effects"
    >
      <span className="sr-only">Toggle sound effects</span>
      <span
        className={`${
          soundsEnabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out`}
      />
    </button>
  );
}
