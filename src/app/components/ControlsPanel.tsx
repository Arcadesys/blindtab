'use client';

import { useState, useEffect, useCallback } from 'react';

interface ControlsPanelProps {
  onClose: () => void;
  onShowInfo: () => void;
  autoScroll?: boolean;
  setAutoScroll?: (autoScroll: boolean) => void;
  tempo?: number;
  stepSize?: number;
  setStepSize?: (size: number) => void;
}

export default function ControlsPanel({
  onClose,
  onShowInfo,
  autoScroll = false,
  setAutoScroll = () => {},
  tempo = 100,
  stepSize = 1,
  setStepSize = () => {}
}: ControlsPanelProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [metronomeEnabled, setMetronomeEnabled] = useState(false);
  const [localTempo, setLocalTempo] = useState(tempo);
  
  // Audio context for metronome
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [metronomeInterval, setMetronomeInterval] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Initialize audio context
    if (typeof window !== 'undefined') {
      setAudioContext(new (window.AudioContext || (window as Window & typeof globalThis & { webkitAudioContext?: AudioContext })
      .webkitAudioContext)());
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
  }, [metronomeInterval, audioContext]);

  const togglePlay = useCallback(() => {
    const newPlayingState = !isPlaying;
    setIsPlaying(newPlayingState);
    
    if (newPlayingState) {
      // Start auto-scroll if not already enabled
      if (!autoScroll) {
        setAutoScroll(true);
      }
    }
  }, [isPlaying, autoScroll, setAutoScroll]);

  const startMetronome = useCallback(() => {
    if (!audioContext) return;
    
    // Calculate interval in milliseconds from tempo (BPM)
    const interval = 60000 / localTempo;
    
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
  }, [audioContext, metronomeInterval, localTempo]);

  const stopMetronome = useCallback(() => {
    if (metronomeInterval) {
      clearInterval(metronomeInterval);
      setMetronomeInterval(null);
    }
  }, [metronomeInterval]);

  const toggleMetronome = useCallback(() => {
    const newMetronomeState = !metronomeEnabled;
    setMetronomeEnabled(newMetronomeState);
    
    if (newMetronomeState) {
      startMetronome();
    } else {
      stopMetronome();
    }
  }, [metronomeEnabled, startMetronome, stopMetronome]);

  const handleAutoScrollToggle = useCallback(() => {
    setAutoScroll(!autoScroll);
  }, [autoScroll, setAutoScroll]);

  useEffect(() => {
    // Handle keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ' && !e.repeat && e.ctrlKey) {
        togglePlay();
      } else if (e.key === 'm' && !e.repeat && e.ctrlKey) {
        toggleMetronome();
      } else if (e.key === 'a' && !e.repeat && e.ctrlKey) {
        handleAutoScrollToggle();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlay, toggleMetronome, handleAutoScrollToggle]);

  const handleTempoChange = (newTempo: number) => {
    setLocalTempo(newTempo);
    
    // Restart metronome if it's enabled
    if (metronomeEnabled) {
      stopMetronome();
      startMetronome();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-30 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-md h-[80vh] overflow-hidden">
        <div className="p-4 h-full">
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
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Tempo: {localTempo} BPM</h3>
                <input
                  type="range"
                  min="40"
                  max="240"
                  value={localTempo}
                  onChange={(e) => handleTempoChange(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>40</span>
                  <span>240</span>
                </div>
              </div>

              {/* Step Size Controls */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Lines per step</h3>
                <select
                  value={stepSize}
                  onChange={(e) => setStepSize(parseInt(e.target.value))}
                  className="w-full p-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-sm"
                >
                  <option value="1">1 line</option>
                  <option value="2">2 lines</option>
                  <option value="3">3 lines</option>
                </select>
              </div>
            </div>
            
            <div className="mt-auto pt-4">
              <button
                onClick={onShowInfo}
                className="w-full p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Keyboard Shortcuts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 