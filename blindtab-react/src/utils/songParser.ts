import { SongData, SongLine, Chord } from '../types/song';

/**
 * Parses formatted text into SongData
 * Expects text in format:
 * Title: Song Title
 * Artist: Artist Name
 * 
 *    Am        C        G
 * The lyrics go here like this
 *    F         Em       Am
 * And continue with more lines
 */
export function parseSongText(text: string): SongData {
  const lines = text.split('\n').map(line => line.trimEnd());
  const songInfo = {
    title: '',
    artist: '',
  };

  // Extract title and artist from metadata
  for (const line of lines) {
    if (line.toLowerCase().startsWith('title:')) {
      songInfo.title = line.slice(6).trim();
    } else if (line.toLowerCase().startsWith('artist:')) {
      songInfo.artist = line.slice(7).trim();
    }
  }

  const songData: SongLine[] = [];
  let currentChordLine: string | null = null;

  // Process lines in pairs (chord line followed by lyric line)
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trimEnd();
    
    // Skip empty lines and metadata
    if (line.trim() === '' || line.toLowerCase().includes(':')) {
      continue;
    }

    // If line contains only chord characters, it's a chord line
    const isChordLine = /^[\s]*[A-G][#bmMsus0-9]*(?:[\s]+[A-G][#bmMsus0-9]*)*[\s]*$/.test(line);

    if (isChordLine) {
      currentChordLine = line;
    } else if (currentChordLine !== null) {
      // This is a lyric line that follows a chord line
      const chords = extractChords(currentChordLine);
      songData.push({
        lyric: line,
        chords,
      });
      currentChordLine = null;
    } else {
      // This is a lyric line without chords
      songData.push({
        lyric: line,
      });
    }
  }

  return {
    songInfo,
    songData,
  };
}

/**
 * Extracts chords and their positions from a chord line
 */
function extractChords(chordLine: string): Chord[] {
  const chords: Chord[] = [];
  const chordMatches = [...chordLine.matchAll(/[A-G][#bmMsus0-9]*/g)];
  
  for (const match of chordMatches) {
    if (match.index !== undefined) {
      chords.push({
        text: match[0],
        position: match.index,
      });
    }
  }

  return chords;
} 