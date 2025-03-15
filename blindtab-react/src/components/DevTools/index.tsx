import React, { useState } from 'react';
import { FirestoreTest } from '../FirestoreTest';

const DevTools: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('firestore');

  const tabs = {
    firestore: {
      label: '🔥 Firestore',
      component: <FirestoreTest />
    },
    // We can add more tools here later:
    // logs: { label: '📝 Logs', component: <LogViewer /> },
    // config: { label: '⚙️ Config', component: <ConfigEditor /> },
    // etc...
  };

  return (
    <div className="dev-tools" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>🛠️ Dev Tools</h1>
      
      <div className="tab-bar" style={{ 
        display: 'flex', 
        gap: '10px', 
        marginBottom: '20px',
        borderBottom: '1px solid #ccc',
        paddingBottom: '10px'
      }}>
        {Object.entries(tabs).map(([key, { label }]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            style={{
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px',
              background: activeTab === key ? '#007AFF' : '#f0f0f0',
              color: activeTab === key ? 'white' : 'black',
              cursor: 'pointer'
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {tabs[activeTab]?.component}
      </div>

      <div style={{ 
        marginTop: '40px', 
        padding: '20px', 
        background: '#f5f5f5', 
        borderRadius: '8px',
        fontSize: '14px'
      }}>
        <h3>🎯 Quick Tips</h3>
        <ul>
          <li>These tools are only available in development mode</li>
          <li>Data created here is real and will persist in your Firestore database</li>
          <li>Remember to clean up test data before deploying to production</li>
        </ul>
      </div>
    </div>
  );
};

export default DevTools; 