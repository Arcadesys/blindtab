'use client';

import { useState, useEffect } from 'react';

interface ControlsPanelProps {
  fontSize: number;
  setFontSize: (size: number) => void;
  autoScroll: boolean;
  setAutoScroll: (enabled: boolean) => void;
  onClose: () => void;
  tempo: number;
}

export default function ControlsPanel({
  fontSize,
  setFontSize,
  autoScroll,
  setAutoScroll,
  onClose,
  tempo: initialTempo
}: ControlsPanelProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [metronomeEnabled, setMetronomeEnabled] = useState(false);
  const [tempo, setTempo] = useState(initialTempo);
  
  // Audio context for metronome
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [metronomeInterval, setMetronomeInterval] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Initialize audio context
    if (typeof window !== 'undefined') {
      setAudioContext(new (window.AudioContext || (window as any).webkitAudioContext)());
    }
    
    // Cleanup on unmount
    return () => {
      if (metronomeInterval) {
        clearInterval(metronomeInterval);
      }
      if (audioContext) {
        audioContext.close();
      }
    };
  }, []);

  useEffect(() => {
    // Handle keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ' && !e.repeat && e.ctrlKey) {
        e.preventDefault();
        togglePlay();
      } else if (e.key === 'm' && !e.repeat) {
        e.preventDefault();
        toggleMetronome();
      } else if (e.key === 'a' && !e.repeat) {
        e.preventDefault();
        handleAutoScrollToggle();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, metronomeEnabled, tempo]);

  const togglePlay = () => {
    const newPlayingState = !isPlaying;
    setIsPlaying(newPlayingState);
    
    if (newPlayingState) {
      // Start auto-scroll if not already enabled
      if (!autoScroll) {
        setAutoScroll(true);
      }
    }
  };

  const toggleMetronome = () => {
    const newMetronomeState = !metronomeEnabled;
    setMetronomeEnabled(newMetronomeState);
    
    if (newMetronomeState) {
      startMetronome();
    } else {
      stopMetronome();
    }
  };

  const startMetronome = () => {
    if (!audioContext) return;
    
    // Calculate interval in milliseconds from tempo (BPM)
    const interval = 60000 / tempo;
    
    // Clear any existing interval
    if (metronomeInterval) {
      clearInterval(metronomeInterval);
    }
    
    // Create new interval
    const newInterval = setInterval(() => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = 800;
      gainNode.gain.value = 0.1;
      
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.05);
    }, interval);
    
    setMetronomeInterval(newInterval);
  };

  const stopMetronome = () => {
    if (metronomeInterval) {
      clearInterval(metronomeInterval);
      setMetronomeInterval(null);
    }
  };

  const handleAutoScrollToggle = () => {
    setAutoScroll(!autoScroll);
  };

  const handleTempoChange = (newTempo: number) => {
    setTempo(newTempo);
    
    // Restart metronome if it's enabled
    if (metronomeEnabled) {
      stopMetronome();
      startMetronome();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Controls</h2>
        <button 
          onClick={onClose}
          className="p-1 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
          aria-label="Close controls"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="space-y-6">
        {/* Main Controls */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Playback</h3>
          <div className="flex justify-between gap-2">
            <button
              onClick={togglePlay}
              className={`flex-1 p-2 rounded-lg flex items-center justify-center ${
                isPlaying 
                  ? 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300' 
                  : 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300'
              }`}
              aria-label={isPlaying ? 'Pause' : 'Play'}
              title={isPlaying ? 'Pause (Ctrl+Space)' : 'Play (Ctrl+Space)'}
            >
              {isPlaying ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  <span>Play</span>
                </>
              )}
            </button>
            
            <button
              onClick={toggleMetronome}
              className={`flex-1 p-2 rounded-lg flex items-center justify-center ${
                metronomeEnabled 
                  ? 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300' 
                  : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
              }`}
              aria-label={metronomeEnabled ? 'Disable metronome' : 'Enable metronome'}
              title={metronomeEnabled ? 'Disable metronome (M)' : 'Enable metronome (M)'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>Metronome</span>
            </button>
          </div>
          
          <button
            onClick={handleAutoScrollToggle}
            className={`w-full p-2 rounded-lg flex items-center justify-center ${
              autoScroll 
                ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300' 
                : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
            }`}
            aria-label={autoScroll ? 'Disable auto-scroll' : 'Enable auto-scroll'}
            title={autoScroll ? 'Disable auto-scroll (A)' : 'Enable auto-scroll (A)'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg>
            <span>Auto-scroll: {autoScroll ? 'On' : 'Off'}</span>
          </button>
        </div>
        
        {/* Tempo Controls */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Tempo: {tempo} BPM</h3>
          <input
            type="range"
            min="40"
            max="240"
            value={tempo}
            onChange={(e) => handleTempoChange(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>40</span>
            <span>240</span>
          </div>
        </div>
      </div>
      
      <div className="mt-auto pt-4 text-xs text-gray-500 dark:text-gray-400">
        <p className="mb-1">Keyboard shortcuts:</p>
        <ul className="space-y-1">
          <li>Ctrl+Space: Play/Pause</li>
          <li>M: Toggle metronome</li>
          <li>A: Toggle auto-scroll</li>
          <li>F: Font size controls</li>
        </ul>
      </div>
    </div>
  );
} 