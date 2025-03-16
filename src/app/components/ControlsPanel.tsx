'use client';

import { useState, useEffect } from 'react';

interface ControlsPanelProps {
  onAutoScrollToggle: (enabled: boolean) => void;
  onFontSizeChange: (size: number) => void;
  onTempoChange?: (tempo: number) => void;
  defaultTempo?: number;
  defaultAutoScroll?: boolean;
  defaultFontSize?: number;
}

export default function ControlsPanel({
  onAutoScrollToggle,
  onFontSizeChange,
  onTempoChange,
  defaultTempo = 100,
  defaultAutoScroll = false,
  defaultFontSize = 16
}: ControlsPanelProps) {
  const [autoScroll, setAutoScroll] = useState(defaultAutoScroll);
  const [fontSize, setFontSize] = useState(defaultFontSize);
  const [tempo, setTempo] = useState(defaultTempo);
  const [isPlaying, setIsPlaying] = useState(false);
  const [metronomeEnabled, setMetronomeEnabled] = useState(false);
  
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
      if (e.key === ' ' && !e.repeat) {
        togglePlay();
      } else if (e.key === 'm' && !e.repeat) {
        toggleMetronome();
      } else if (e.key === '+' || e.key === '=') {
        handleFontSizeChange(fontSize + 1);
      } else if (e.key === '-' || e.key === '_') {
        handleFontSizeChange(fontSize - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fontSize, isPlaying, metronomeEnabled, tempo]);

  const togglePlay = () => {
    const newPlayingState = !isPlaying;
    setIsPlaying(newPlayingState);
    
    if (newPlayingState) {
      // Start auto-scroll if not already enabled
      if (!autoScroll) {
        setAutoScroll(true);
        onAutoScrollToggle(true);
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
    const newAutoScrollState = !autoScroll;
    setAutoScroll(newAutoScrollState);
    onAutoScrollToggle(newAutoScrollState);
  };

  const handleFontSizeChange = (newSize: number) => {
    // Limit font size between 12 and 32
    const clampedSize = Math.max(12, Math.min(32, newSize));
    setFontSize(clampedSize);
    onFontSizeChange(clampedSize);
  };

  const handleTempoChange = (newTempo: number) => {
    setTempo(newTempo);
    if (onTempoChange) {
      onTempoChange(newTempo);
    }
    
    // Restart metronome if it's enabled
    if (metronomeEnabled) {
      stopMetronome();
      startMetronome();
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4">Controls</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Playback Controls */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Playback</span>
            <div className="flex space-x-2">
              <button
                onClick={togglePlay}
                className={`p-2 rounded-full ${
                  isPlaying 
                    ? 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300' 
                    : 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300'
                }`}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              <button
                onClick={toggleMetronome}
                className={`p-2 rounded-full ${
                  metronomeEnabled 
                    ? 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300' 
                    : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                }`}
                aria-label={metronomeEnabled ? 'Disable metronome' : 'Enable metronome'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Tempo Control */}
          <div>
            <div className="flex justify-between mb-1">
              <label htmlFor="tempo-slider" className="text-sm font-medium">Tempo: {tempo} BPM</label>
            </div>
            <input
              id="tempo-slider"
              type="range"
              min="40"
              max="240"
              value={tempo}
              onChange={(e) => handleTempoChange(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span>Slow</span>
              <span>Fast</span>
            </div>
          </div>
        </div>
        
        {/* Display Controls */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Auto-scroll</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={autoScroll}
                onChange={handleAutoScrollToggle}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
          
          {/* Font Size Control */}
          <div>
            <div className="flex justify-between mb-1">
              <label htmlFor="font-size-slider" className="text-sm font-medium">Font Size: {fontSize}px</label>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => handleFontSizeChange(fontSize - 1)}
                className="p-1 bg-gray-100 dark:bg-gray-700 rounded-l"
                aria-label="Decrease font size"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <input
                id="font-size-slider"
                type="range"
                min="12"
                max="32"
                value={fontSize}
                onChange={(e) => handleFontSizeChange(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mx-2"
              />
              <button
                onClick={() => handleFontSizeChange(fontSize + 1)}
                className="p-1 bg-gray-100 dark:bg-gray-700 rounded-r"
                aria-label="Increase font size"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        <p>Keyboard shortcuts: Space (play/pause), M (metronome), + (increase font), - (decrease font)</p>
      </div>
    </div>
  );
} 