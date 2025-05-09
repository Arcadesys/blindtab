// Define types for our chord utilities
export type ChordNote = 'C' | 'C#' | 'Db' | 'D' | 'D#' | 'Eb' | 'E' | 'F' | 'F#' | 'Gb' | 'G' | 'G#' | 'Ab' | 'A' | 'A#' | 'Bb' | 'B';
export type ChordQuality = 'major' | 'minor' | '7' | 'maj7' | 'm7' | 'dim' | 'aug' | 'sus2' | 'sus4' | '9' | 'add9' | '6' | 'm6' | '5' | '';
export type ChordBassNote = ChordNote | null;

export interface Chord {
  root: ChordNote;
  quality: ChordQuality;
  bassNote: ChordBassNote;
  display: string; // Original display format
}

export interface ParsedChord {
  chord: Chord;
  startIndex: number;
  endIndex: number;
}

// Define the standard notes in order (used for transposition)
export const NOTES: ChordNote[] = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
export const FLAT_NOTES: ChordNote[] = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

// Map enharmonic equivalents for consistency
const ENHARMONIC_MAP: Record<ChordNote, ChordNote> = {
  'C': 'C',
  'C#': 'C#',
  'Db': 'C#',
  'D': 'D',
  'D#': 'D#',
  'Eb': 'D#',
  'E': 'E',
  'F': 'F',
  'F#': 'F#',
  'Gb': 'F#',
  'G': 'G',
  'G#': 'G#',
  'Ab': 'G#',
  'A': 'A',
  'A#': 'A#',
  'Bb': 'A#',
  'B': 'B'
};

// Regular expression for matching chord patterns
// This handles formats like C, Cm, C7, Cmaj7, C/G, etc.
const CHORD_REGEX = /\b([A-G][b#]?)([m]?(?:maj|min|dim|aug|sus|add)?[2-9]?(?:\/[A-G][b#]?)?)\b/g;

// Map chord symbols to their qualities
const QUALITY_MAP: Record<string, ChordQuality> = {
  '': 'major',      // C = C major
  'm': 'minor',     // Cm = C minor
  'min': 'minor',
  'maj': 'major',
  '7': '7',         // C7 = C dominant 7th
  'maj7': 'maj7',   // Cmaj7 = C major 7th
  'm7': 'm7',       // Cm7 = C minor 7th
  'dim': 'dim',     // Cdim = C diminished
  'aug': 'aug',     // Caug = C augmented
  'sus2': 'sus2',   // Csus2 = C suspended 2nd
  'sus4': 'sus4',   // Csus4 = C suspended 4th
  '9': '9',         // C9 = C dominant 9th
  'add9': 'add9',   // Cadd9 = C add 9th
  '6': '6',         // C6 = C 6th
  'm6': 'm6',       // Cm6 = C minor 6th
  '5': '5'          // C5 = C power chord (root + 5th)
};

// Interface for identified chord with position info
export interface ChordPosition {
  chord: string;
  startIndex: number;
  endIndex: number;
}

/**
 * Parse a chord string into its components
 * @param chordStr A string containing a chord (e.g., "Cmaj7", "G/B")
 * @returns A Chord object or null if not a valid chord
 */
export function parseChord(chordStr: string): Chord | null {
  // Simple validation
  if (!chordStr || typeof chordStr !== 'string') return null;
  
  // Check if the string starts with a valid note
  const rootMatch = chordStr.match(/^([A-G][b#]?)/);
  if (!rootMatch) return null;
  
  const rootNote = rootMatch[1] as ChordNote;
  
  // Extract the quality (everything between the root and the optional bass note)
  let rest = chordStr.substring(rootNote.length);
  let bassNote: ChordBassNote = null;
  
  // Check for bass note (e.g., C/G)
  const bassMatch = rest.match(/\/([A-G][b#]?)$/);
  if (bassMatch) {
    bassNote = bassMatch[1] as ChordNote;
    rest = rest.substring(0, rest.length - bassMatch[0].length);
  }
  
  // Determine the chord quality
  const quality: ChordQuality = determineQuality(rest);
  
  return {
    root: rootNote,
    quality,
    bassNote,
    display: chordStr // Keep the original format
  };
}

/**
 * Determine the quality of a chord based on its suffix
 */
function determineQuality(qualityStr: string): ChordQuality {
  // Try direct mapping first
  if (QUALITY_MAP[qualityStr]) {
    return QUALITY_MAP[qualityStr];
  }
  
  // Handle more complex quality strings
  if (qualityStr.includes('maj7')) return 'maj7';
  if (qualityStr.includes('m7')) return 'm7';
  if (qualityStr.includes('dim')) return 'dim';
  if (qualityStr.includes('aug')) return 'aug';
  if (qualityStr.includes('sus2')) return 'sus2';
  if (qualityStr.includes('sus4')) return 'sus4';
  if (qualityStr.includes('add9')) return 'add9';
  if (qualityStr.includes('m6')) return 'm6';
  if (qualityStr.includes('min')) return 'minor';
  if (qualityStr.includes('maj')) return 'major';
  if (qualityStr.includes('7')) return '7';
  if (qualityStr.includes('9')) return '9';
  if (qualityStr.includes('6')) return '6';
  if (qualityStr.includes('5')) return '5';
  
  // Default to major if no quality specified
  return '';
}

/**
 * Find all chords in a given text string
 * @param text Text that may contain chords
 * @returns Array of parsed chords with their positions
 */
export function findChords(text: string): ParsedChord[] {
  const results: ParsedChord[] = [];
  let match;
  
  while ((match = CHORD_REGEX.exec(text)) !== null) {
    const fullMatch = match[0];
    
    const chord = parseChord(fullMatch);
    if (chord) {
      results.push({
        chord,
        startIndex: match.index,
        endIndex: match.index + fullMatch.length - 1
      });
    }
  }
  
  return results;
}

/**
 * Determine if a line of text is likely a chord line
 * (containing primarily chord symbols)
 */
export function isChordLine(line: string): boolean {
  if (!line.trim()) return false;
  
  // Get all chords in the line
  const chords = findChords(line);
  
  // If we find chords and they make up a significant portion of non-whitespace chars
  if (chords.length > 0) {
    const totalNonWhitespace = line.replace(/\s+/g, '').length;
    const chordTextLength = chords.reduce((sum, c) => sum + (c.chord.display.length), 0);
    
    // If chords make up at least 40% of non-whitespace content, it's likely a chord line
    return chordTextLength / totalNonWhitespace >= 0.4;
  }
  
  return false;
}

/**
 * Transpose a chord by a number of semitones
 * @param chord The chord to transpose
 * @param semitones Number of semitones to transpose (positive = up, negative = down)
 * @param preferFlats Whether to prefer flat notation for the result
 * @returns A new transposed chord
 */
export function transposeChord(chord: Chord, semitones: number, preferFlats = false): Chord {
  // Use the appropriate note array based on preference
  const noteArray = preferFlats ? FLAT_NOTES : NOTES;
  
  // Normalize root to a standard form
  const normalizedRoot = ENHARMONIC_MAP[chord.root];
  const rootIndex = NOTES.indexOf(normalizedRoot);
  
  if (rootIndex === -1) return chord; // Invalid root note
  
  // Calculate the new root note index
  const newIndex = (rootIndex + semitones + 12) % 12;
  const newRoot = noteArray[newIndex] as ChordNote;
  
  // Transpose the bass note if present
  let newBass: ChordBassNote = null;
  if (chord.bassNote) {
    const normalizedBass = ENHARMONIC_MAP[chord.bassNote];
    const bassIndex = NOTES.indexOf(normalizedBass);
    if (bassIndex !== -1) {
      const newBassIndex = (bassIndex + semitones + 12) % 12;
      newBass = noteArray[newBassIndex] as ChordNote;
    }
  }
  
  // Create the display format based on original chord style
  let display = newRoot;
  
  // Add quality to display
  if (chord.quality === 'minor') {
    display += 'm';
  } else if (chord.quality !== 'major' && chord.quality !== '') {
    display += chord.quality;
  }
  
  // Add bass note if present
  if (newBass) {
    display += '/' + newBass;
  }
  
  return {
    root: newRoot,
    quality: chord.quality,
    bassNote: newBass,
    display
  };
}

/**
 * Transpose an entire line of text, keeping non-chord text unchanged
 * @param line The line of text to transpose
 * @param semitones Number of semitones to transpose
 * @param preferFlats Whether to prefer flat notation
 * @returns The transposed text
 */
export function transposeLine(line: string, semitones: number, preferFlats = false): string {
  // Find all chords in the line
  const chords = findChords(line);
  
  // If no chords, return the original line
  if (chords.length === 0) return line;
  
  // Sort chords by their position (in reverse so we can replace without affecting indices)
  const sortedChords = [...chords].sort((a, b) => b.startIndex - a.startIndex);
  
  // Create a new line by replacing each chord
  let result = line;
  
  for (const parsedChord of sortedChords) {
    const { chord, startIndex, endIndex } = parsedChord;
    const transposed = transposeChord(chord, semitones, preferFlats);
    
    // Replace the chord in the result string
    result = 
      result.substring(0, startIndex) + 
      transposed.display + 
      result.substring(endIndex + 1);
  }
  
  return result;
}

/**
 * Get the distance in semitones between two keys
 * @param fromKey The source key
 * @param toKey The target key
 * @returns The number of semitones to transpose
 */
export function getTranspositionDistance(fromKey: ChordNote, toKey: ChordNote): number {
  const normalizedFrom = ENHARMONIC_MAP[fromKey];
  const normalizedTo = ENHARMONIC_MAP[toKey];
  
  const fromIndex = NOTES.indexOf(normalizedFrom);
  const toIndex = NOTES.indexOf(normalizedTo);
  
  if (fromIndex === -1 || toIndex === -1) return 0;
  
  return (toIndex - fromIndex + 12) % 12;
}

/**
 * Convert a chord to its Nashville Number equivalent
 * @param chord The chord to convert
 * @param key The key context
 * @returns The Nashville Number representation
 */
export function chordToNashville(chord: Chord, key: ChordNote): string {
  const normalizedChordRoot = ENHARMONIC_MAP[chord.root];
  const normalizedKey = ENHARMONIC_MAP[key];
  
  const keyIndex = NOTES.indexOf(normalizedKey);
  const chordIndex = NOTES.indexOf(normalizedChordRoot);
  
  if (keyIndex === -1 || chordIndex === -1) return chord.display;
  
  // Calculate the scale degree (1-based)
  const degree = ((chordIndex - keyIndex + 12) % 12) + 1;
  
  // Determine if the chord is major or minor, affecting the roman numeral case
  const isMajor = 
    chord.quality === 'major' || 
    chord.quality === '' || 
    chord.quality === 'maj7' || 
    chord.quality === '7' || 
    chord.quality === '6' || 
    chord.quality === '9' || 
    chord.quality === 'add9';
  
  // Convert to roman numeral
  let numeral = '';
  
  // Convert the degree to a roman numeral
  switch (degree) {
    case 1: numeral = 'I'; break;
    case 2: numeral = 'II'; break;
    case 3: numeral = 'III'; break;
    case 4: numeral = 'IV'; break;
    case 5: numeral = 'V'; break;
    case 6: numeral = 'VI'; break;
    case 7: numeral = 'VII'; break;
    case 8: numeral = 'I'; break;
    case 9: numeral = 'II'; break;
    case 10: numeral = 'III'; break;
    case 11: numeral = 'IV'; break;
    case 12: numeral = 'V'; break;
    default: numeral = degree.toString();
  }
  
  // Apply case based on major/minor
  if (!isMajor) {
    numeral = numeral.toLowerCase();
  }
  
  // Add chord quality suffixes except for basic major/minor
  let suffix = '';
  if (chord.quality !== 'major' && chord.quality !== 'minor' && chord.quality !== '') {
    suffix = chord.quality;
  }
  
  // Add bass note if present
  if (chord.bassNote) {
    // Convert bass note to scale degree
    const bassNote = ENHARMONIC_MAP[chord.bassNote];
    const bassIndex = NOTES.indexOf(bassNote);
    if (bassIndex !== -1) {
      const bassDegree = ((bassIndex - keyIndex + 12) % 12) + 1;
      suffix += '/' + bassDegree;
    } else {
      suffix += '/' + chord.bassNote;
    }
  }
  
  return numeral + suffix;
}

/**
 * Convert a chord string to Nashville Number notation based on a key
 * @param chordStr Chord string to convert
 * @param key Key to reference for numbering
 * @returns Nashville number notation for the chord
 */
export function lineToNashville(chordStr: string, key: ChordNote): string {
  const chord = parseChord(chordStr);
  if (!chord) return chordStr; // Return original if not a valid chord
  
  // Find the degree of the chord in the key
  const keyIndex = NOTES.indexOf(key);
  const chordIndex = NOTES.indexOf(chord.root);
  
  if (keyIndex === -1 || chordIndex === -1) {
    return chordStr; // Return original if either note is invalid
  }
  
  // Calculate the degree (1-7) based on semitone difference
  const degreeIndex = (chordIndex - keyIndex + 12) % 12;
  
  // Map to Nashville degrees
  // In Nashville system, we use numbers 1-7
  let nashville = '';
  switch (degreeIndex) {
    case 0: nashville = '1'; break;  // Root
    case 1: nashville = 'b2'; break; // Flat second
    case 2: nashville = '2'; break;  // Second
    case 3: nashville = 'b3'; break; // Flat third
    case 4: nashville = '3'; break;  // Third
    case 5: nashville = '4'; break;  // Fourth
    case 6: nashville = 'b5'; break; // Flat fifth
    case 7: nashville = '5'; break;  // Fifth
    case 8: nashville = 'b6'; break; // Flat sixth
    case 9: nashville = '6'; break;  // Sixth
    case 10: nashville = 'b7'; break; // Flat seventh
    case 11: nashville = '7'; break; // Seventh
    default: nashville = chordStr; return nashville;
  }
  
  // Add quality modifications
  if (chord.quality === 'minor') {
    nashville += 'm';
  } else if (chord.quality === 'dim') {
    nashville += 'dim';
  } else if (chord.quality === 'aug') {
    nashville += '+';
  } else if (chord.quality === 'sus2') {
    nashville += 'sus2';
  } else if (chord.quality === 'sus4') {
    nashville += 'sus4';
  } else if (chord.quality !== 'major' && chord.quality !== '') {
    nashville += chord.quality;
  }
  
  // Add bass note if present
  if (chord.bassNote) {
    const bassIndex = NOTES.indexOf(chord.bassNote);
    if (bassIndex !== -1) {
      const bassDegreeIndex = (bassIndex - keyIndex + 12) % 12;
      let bassNashville = '';
      
      // Map bass note to Nashville degree
      switch (bassDegreeIndex) {
        case 0: bassNashville = '1'; break;
        case 1: bassNashville = 'b2'; break;
        case 2: bassNashville = '2'; break;
        case 3: bassNashville = 'b3'; break;
        case 4: bassNashville = '3'; break;
        case 5: bassNashville = '4'; break;
        case 6: bassNashville = 'b5'; break;
        case 7: bassNashville = '5'; break;
        case 8: bassNashville = 'b6'; break;
        case 9: bassNashville = '6'; break;
        case 10: bassNashville = 'b7'; break;
        case 11: bassNashville = '7'; break;
      }
      
      nashville += '/' + bassNashville;
    }
  }
  
  return nashville;
}

/**
 * Find all chords in a text string with their positions
 * @param text Text string to find chords in
 * @returns Array of chord objects with position information
 */
export function findChordsInText(text: string): ChordPosition[] {
  const chords: ChordPosition[] = [];
  
  // Look for chord patterns in the text
  const regex = new RegExp(CHORD_REGEX);
  let match;
  
  // Use exec with a loop to find all matches with their positions
  while ((match = regex.exec(text)) !== null) {
    // This prevents infinite loops for zero-width matches
    if (match.index === regex.lastIndex) {
      regex.lastIndex++;
      continue;
    }
    
    chords.push({
      chord: match[0],
      startIndex: match.index,
      endIndex: match.index + match[0].length
    });
  }
  
  return chords;
}  