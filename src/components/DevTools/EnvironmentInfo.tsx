import React from 'react';
import styled from 'styled-components';
import { useSongs } from '../../contexts/SongContext';
import { useAuth } from '../../contexts/AuthContext';
import { isPreviewDeployment, isFallbackMode } from '../../utils/firebase';

const Container = styled.div`
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  color: #e0e0e0;
  font-family: monospace;
`;

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 12px;
  color: #61dafb;
`;

const InfoRow = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const Label = styled.div`
  width: 180px;
  color: #9cdcfe;
`;

const Value = styled.div`
  flex: 1;
  word-break: break-all;
`;

const EnvironmentInfo: React.FC = () => {
  const { isPreviewMode } = useSongs();
  const { user } = useAuth();
  
  return (
    <Container>
      <Title>Environment Information</Title>
      
      <InfoRow>
        <Label>App Environment:</Label>
        <Value>{import.meta.env.VITE_APP_ENV || 'development'}</Value>
      </InfoRow>
      
      <InfoRow>
        <Label>Firebase Emulator:</Label>
        <Value>{import.meta.env.VITE_USE_FIREBASE_EMULATOR === 'true' ? 'Enabled' : 'Disabled'}</Value>
      </InfoRow>
      
      <InfoRow>
        <Label>Firestore Host:</Label>
        <Value>{import.meta.env.VITE_FIRESTORE_EMULATOR_HOST || 'Production'}</Value>
      </InfoRow>
      
      <InfoRow>
        <Label>Current Domain:</Label>
        <Value>{window.location.hostname}</Value>
      </InfoRow>
      
      <InfoRow>
        <Label>Preview Deployment:</Label>
        <Value>{isPreviewDeployment ? 'Yes' : 'No'}</Value>
      </InfoRow>
      
      <InfoRow>
        <Label>Fallback Mode:</Label>
        <Value>{isFallbackMode ? 'Yes' : 'No'}</Value>
      </InfoRow>
      
      <InfoRow>
        <Label>Preview Mode:</Label>
        <Value>{isPreviewMode ? 'Yes' : 'No'}</Value>
      </InfoRow>
      
      <InfoRow>
        <Label>User Authenticated:</Label>
        <Value>{user ? 'Yes' : 'No'}</Value>
      </InfoRow>
      
      {user && (
        <>
          <InfoRow>
            <Label>User ID:</Label>
            <Value>{user.uid}</Value>
          </InfoRow>
          <InfoRow>
            <Label>User Email:</Label>
            <Value>{user.email}</Value>
          </InfoRow>
        </>
      )}
    </Container>
  );
};

export default EnvironmentInfo; 