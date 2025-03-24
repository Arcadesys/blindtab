'use client';

import { useState, useEffect } from 'react';
import { ChordNote, NOTES, FLAT_NOTES } from '@/utils/chordUtils';

export type DisplayMode = 'transposed' | 'original' | 'both' | 'numerals';

interface TranspositionControlsProps {
  originalKey: ChordNote | null;
  onChange: (params: { 
    targetKey: ChordNote; 
    semitones: number; 
    displayMode: DisplayMode;
    preferFlats: boolean;
  }) => void;
  className?: string;
}

export default function TranspositionControls({ 
  originalKey,
  onChange,
  className = ''
}: TranspositionControlsProps) {
  const [targetKey, setTargetKey] = useState<ChordNote>(originalKey || 'C');
  const [semitones, setSemitones] = useState(0);
  const [displayMode, setDisplayMode] = useState<DisplayMode>('transposed');
  const [preferFlats, setPreferFlats] = useState(false);
  
  // Calculate semitones when target key changes
  useEffect(() => {
    if (originalKey) {
      // Find the source and target indices
      const sourceIndex = NOTES.indexOf(originalKey as ChordNote);
      const targetIndex = NOTES.indexOf(targetKey as ChordNote);
      
      if (sourceIndex !== -1 && targetIndex !== -1) {
        // Calculate semitones difference (modulo 12 to keep within an octave)
        const semitonesDiff = (targetIndex - sourceIndex + 12) % 12;
        setSemitones(semitonesDiff);
        
        // Only notify parent component if the values are actually different
        // to prevent infinite render loops
        onChange({
          targetKey,
          semitones: semitonesDiff,
          displayMode,
          preferFlats
        });
      }
    }
  }, [targetKey, originalKey, displayMode, preferFlats, onChange]);
  
  // This is triggered when semitones are directly changed (e.g., via +/- buttons)
  const handleSemitonesChange = (newSemitones: number) => {
    if (!originalKey) return;
    
    // Keep semitones within -11 to +11 range
    const normalizedSemitones = ((newSemitones % 12) + 12) % 12;
    setSemitones(normalizedSemitones);
    
    // Calculate new target key based on semitones
    const sourceIndex = NOTES.indexOf(originalKey as ChordNote);
    if (sourceIndex !== -1) {
      const noteArray = preferFlats ? FLAT_NOTES : NOTES;
      const targetIndex = (sourceIndex + normalizedSemitones) % 12;
      const newTargetKey = noteArray[targetIndex] as ChordNote;
      setTargetKey(newTargetKey);
      
      // We don't need to call onChange here since the useEffect will handle it
      // when targetKey changes
    }
  };
  
  return (
    <div className={`p-4 rounded-lg border border-gray-300 dark:border-gray-700 ${className}`}>
      <h3 className="font-medium mb-4">Transposition Controls</h3>
      
      <div className="space-y-4">
        {/* Original Key Display */}
        {originalKey && (
          <div className="flex items-center">
            <span className="w-24 text-sm">Original Key:</span>
            <span className="font-medium">{originalKey}</span>
          </div>
        )}
        
        {/* Target Key Selection */}
        <div className="flex items-center">
          <label htmlFor="target-key" className="w-24 text-sm">
            Target Key:
          </label>
          <select
            id="target-key"
            value={targetKey}
            onChange={(e) => setTargetKey(e.target.value as ChordNote)}
            className="flex-grow p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
          >
            {(preferFlats ? FLAT_NOTES : NOTES).map((note) => (
              <option key={note} value={note}>
                {note}
              </option>
            ))}
          </select>
        </div>
        
        {/* Semitone Adjustment */}
        <div className="flex items-center">
          <label className="w-24 text-sm">Semitones:</label>
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => handleSemitonesChange(semitones - 1)}
              className="px-3 py-1 rounded-l bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              aria-label="Down one semitone"
            >
              -
            </button>
            <span className="px-4 py-1 bg-white dark:bg-gray-800 border-t border-b border-gray-300 dark:border-gray-700">
              {semitones}
            </span>
            <button
              type="button"
              onClick={() => handleSemitonesChange(semitones + 1)}
              className="px-3 py-1 rounded-r bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              aria-label="Up one semitone"
            >
              +
            </button>
          </div>
        </div>
        
        {/* Display Options */}
        <div>
          <div className="w-24 text-sm mb-2">Display:</div>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setDisplayMode('transposed')}
              className={`px-3 py-2 text-sm rounded text-center transition ${
                displayMode === 'transposed'
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
              }`}
            >
              Transposed Only
            </button>
            
            <button
              type="button"
              onClick={() => setDisplayMode('original')}
              className={`px-3 py-2 text-sm rounded text-center transition ${
                displayMode === 'original'
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
              }`}
            >
              Original Only
            </button>
            
            <button
              type="button"
              onClick={() => setDisplayMode('both')}
              className={`px-3 py-2 text-sm rounded text-center transition ${
                displayMode === 'both'
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
              }`}
            >
              Both
            </button>
            
            <button
              type="button"
              onClick={() => setDisplayMode('numerals')}
              className={`px-3 py-2 text-sm rounded text-center transition ${
                displayMode === 'numerals'
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
              }`}
            >
              Nashville Numerals
            </button>
          </div>
        </div>
        
        {/* Accidental Preference */}
        <div className="flex items-center">
          <label htmlFor="accidental-type" className="w-24 text-sm">
            Prefer:
          </label>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                checked={!preferFlats}
                onChange={() => setPreferFlats(false)}
                className="form-radio text-blue-600"
              />
              <span className="ml-2">Sharps (#)</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                checked={preferFlats}
                onChange={() => setPreferFlats(true)}
                className="form-radio text-blue-600"
              />
              <span className="ml-2">Flats (♭)</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
} 