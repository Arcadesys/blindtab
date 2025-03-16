import { SongData, SongLine, Chord } from '../types/song';

/**
 * Parses a markdown-formatted leadsheet into structured song data
 * 
 * Format example:
 * # Song Title
 * ## Artist Name
 * Key: C
 * Tempo: 120
 * 
 * [C]This is a [G]line with chords
 * Another [Am]line with [F]chords
 */
export const parseMarkdown = (markdown: string): SongData => {
  const lines = markdown.split('\n');
  const songInfo: SongData['songInfo'] = {
    title: 'Untitled',
    artist: 'Unknown'
  };
  const lyrics: SongLine[] = [];
  
  // Process metadata
  let dataSection = true;
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i].trim();
    
    // Title (h1)
    if (line.startsWith('# ')) {
      songInfo.title = line.substring(2).trim();
      i++;
      continue;
    }
    
    // Artist (h2)
    if (line.startsWith('## ')) {
      songInfo.artist = line.substring(3).trim();
      i++;
      continue;
    }
    
    // Key, Tempo, Time Signature
    if (line.startsWith('Key:')) {
      songInfo.key = line.substring(4).trim();
      i++;
      continue;
    }
    
    if (line.startsWith('Tempo:')) {
      const tempoStr = line.substring(6).trim();
      const tempo = parseInt(tempoStr, 10);
      if (!isNaN(tempo)) {
        songInfo.tempo = tempo;
      }
      i++;
      continue;
    }
    
    if (line.startsWith('Time:') || line.startsWith('Time Signature:')) {
      const timeStr = line.includes(':') ? line.split(':')[1].trim() : '';
      songInfo.timeSignature = timeStr;
      i++;
      continue;
    }
    
    // Empty line separates metadata from song content
    if (line === '' && dataSection) {
      dataSection = false;
      i++;
      continue;
    }
    
    // If we're past the metadata section, process song lines
    if (!dataSection) {
      // Skip empty lines in the song body
      if (line === '') {
        lyrics.push({ line: '' });
        i++;
        continue;
      }
      
      // Process a line with potential chord markers
      const songLine: SongLine = {
        line: '',
        chords: []
      };
      
      // Extract chords and lyrics
      let lyricLine = '';
      let currentPosition = 0;
      
      // Regular expression to find chord markers [Chord]
      const chordRegex = /\[([^\]]+)\]/g;
      let match;
      let lastIndex = 0;
      
      while ((match = chordRegex.exec(line)) !== null) {
        // Add text before this chord to the lyric line
        const textBeforeChord = line.substring(lastIndex, match.index);
        lyricLine += textBeforeChord;
        currentPosition += textBeforeChord.length;
        
        // Add the chord at this position
        const chord: Chord = {
          text: match[1], // The chord text inside brackets
          position: currentPosition
        };
        songLine.chords?.push(chord);
        
        lastIndex = match.index + match[0].length;
      }
      
      // Add any remaining text after the last chord
      lyricLine += line.substring(lastIndex);
      
      songLine.line = lyricLine;
      lyrics.push(songLine);
    }
    
    i++;
  }
  
  return { songInfo, lyrics };
};

/**
 * Converts structured song data back to markdown format
 */
export const songDataToMarkdown = (songData: SongData): string => {
  let markdown = '';
  
  // Add title and artist
  markdown += `# ${songData.songInfo.title}\n`;
  markdown += `## ${songData.songInfo.artist}\n`;
  
  // Add optional metadata
  if (songData.songInfo.key) {
    markdown += `Key: ${songData.songInfo.key}\n`;
  }
  
  if (songData.songInfo.tempo) {
    markdown += `Tempo: ${songData.songInfo.tempo}\n`;
  }
  
  if (songData.songInfo.timeSignature) {
    markdown += `Time: ${songData.songInfo.timeSignature}\n`;
  }
  
  // Add empty line between metadata and song content
  markdown += '\n';
  
  // Process each line of the song
  const lines = songData.lyrics || songData.songData || [];
  lines.forEach(line => {
    if (!line.lyric && !line.line && !line.chords?.length && !line.chord) {
      markdown += '\n';
      return;
    }
    
    let lineText = line.lyric || line.line || '';
    
    // Insert chord markers
    if ((line.chords && line.chords.length > 0) || line.chord) {
      if (line.chords) {
        // Sort chords by position (right to left to avoid position shifts)
        const sortedChords = [...line.chords].sort((a, b) => b.position - a.position);
        
        // Insert each chord at its position
        sortedChords.forEach(chord => {
          const position = Math.min(chord.position, lineText.length);
          lineText = 
            lineText.substring(0, position) + 
            `[${chord.text}]` + 
            lineText.substring(position);
        });
      } else if (line.chord) {
        // Handle single chord at the start of the line
        lineText = `[${line.chord}]${lineText}`;
      }
    }
    
    markdown += lineText + '\n';
  });
  
  return markdown;
}; 