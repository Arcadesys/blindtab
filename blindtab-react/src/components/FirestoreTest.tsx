import React, { useState } from 'react';
import { createSampleSong, songOperations } from '../utils/db';
import { SongData } from '../types/song';

export const FirestoreTest: React.FC = () => {
  const [result, setResult] = useState<string>('');
  const [songData, setSongData] = useState<SongData | null>(null);

  const handleCreateSample = async () => {
    try {
      setResult('Creating sample song...');
      const songId = await createSampleSong();
      if (songId) {
        setResult(`Success! Created song with ID: ${songId}`);
        // Try to fetch the song we just created
        const song = await songOperations.getSongById(songId);
        setSongData(song);
      } else {
        setResult('Failed to create sample song');
      }
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Firestore Test</h2>
      <button onClick={handleCreateSample}>
        Create Sample Song
      </button>
      <pre style={{ marginTop: '20px', padding: '10px', background: '#f5f5f5' }}>
        {result}
      </pre>
      {songData && (
        <div style={{ marginTop: '20px' }}>
          <h3>Created Song Data:</h3>
          <pre style={{ background: '#f5f5f5', padding: '10px' }}>
            {JSON.stringify(songData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}; 