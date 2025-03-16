import React, { useState, useEffect } from 'react';
import { createSampleSong, songOperations } from '../utils/db';
import { SongData } from '../types/song';

export const FirestoreTest: React.FC = () => {
  const [result, setResult] = useState<string>('');
  const [songData, setSongData] = useState<SongData | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  // Check connection on mount
  useEffect(() => {
    const checkConnection = async () => {
      try {
        setResult('Checking Firestore connection...');
        const connected = await songOperations.checkConnection();
        setIsConnected(connected);
        setResult(connected ? 'Connected to Firestore' : 'Failed to connect to Firestore');
      } catch (error) {
        setResult(`Connection error: ${error.message}`);
        setIsConnected(false);
      }
    };

    checkConnection();
  }, []);

  const handleCreateSample = async () => {
    if (!isConnected) {
      setResult('Cannot create song: Not connected to Firestore');
      return;
    }

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
      console.error('Error creating sample song:', error);
      setResult(`Error: ${error.message}`);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Firestore Test</h2>
      
      <div style={{ 
        padding: '10px', 
        marginBottom: '20px',
        background: isConnected ? '#e6ffe6' : '#ffe6e6',
        borderRadius: '4px'
      }}>
        <strong>Status: </strong>
        {isConnected ? '✅ Connected' : '❌ Not Connected'}
      </div>

      <button 
        onClick={handleCreateSample}
        disabled={!isConnected}
        style={{
          padding: '8px 16px',
          background: isConnected ? '#007AFF' : '#cccccc',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: isConnected ? 'pointer' : 'not-allowed'
        }}
      >
        Create Sample Song
      </button>

      <pre style={{ 
        marginTop: '20px', 
        padding: '10px', 
        background: '#f5f5f5',
        borderRadius: '4px'
      }}>
        {result}
      </pre>

      {songData && (
        <div style={{ marginTop: '20px' }}>
          <h3>Created Song Data:</h3>
          <pre style={{ 
            background: '#f5f5f5', 
            padding: '10px',
            borderRadius: '4px',
            overflow: 'auto'
          }}>
            {JSON.stringify(songData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}; 