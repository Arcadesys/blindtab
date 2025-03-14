import React, { useState, useEffect, memo, useCallback } from 'react';
import styled from 'styled-components';
import { env, config, isDev } from '../../utils/env';
import { getAllEdgeConfig, isEdgeConfigAvailable } from '../../utils/edgeConfig';

const Container = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  background-color: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  max-width: 600px;
  font-family: monospace;
  font-size: 0.9rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  max-height: 80vh;
  overflow-y: auto;
`;

const Title = styled.h3`
  margin-top: 0;
  color: var(--primary-color);
`;

const Section = styled.div`
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h4`
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
`;

const InfoRow = styled.div`
  display: flex;
  margin-bottom: 0.25rem;
`;

const Label = styled.div`
  width: 150px;
  font-weight: bold;
`;

const Value = styled.div`
  flex: 1;
  word-break: break-all;
`;

const CodeBlock = styled.pre`
  background-color: var(--bg-secondary);
  padding: 0.5rem;
  border-radius: 4px;
  overflow: auto;
  max-height: 200px;
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: var(--primary-color);
  animation: spin 1s ease-in-out infinite;
  margin-right: 8px;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

interface EnvironmentInfoProps {
  onClose?: () => void;
}

const EnvironmentInfo: React.FC<EnvironmentInfoProps> = memo(({ onClose }) => {
  const [edgeConfig, setEdgeConfig] = useState<Record<string, any> | null>(null);
  const [edgeConfigAvailable, setEdgeConfigAvailable] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  const loadEdgeConfig = useCallback(async () => {
    try {
      setLoading(true);
      const available = await isEdgeConfigAvailable();
      setEdgeConfigAvailable(available);
      
      if (available) {
        const config = await getAllEdgeConfig();
        setEdgeConfig(config);
      }
    } catch (error) {
      console.error('Error loading Edge Config:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadEdgeConfig();
  }, [loadEdgeConfig]);

  if (!isDev) {
    return null; // Only show in development
  }

  // Ensure config is available and has expected properties
  const features = config?.features || {};

  return (
    <Container>
      <Title>Environment Information</Title>
      
      <Section>
        <SectionTitle>Environment</SectionTitle>
        <InfoRow>
          <Label>Current:</Label>
          <Value>{env}</Value>
        </InfoRow>
        <InfoRow>
          <Label>API URL:</Label>
          <Value>{config?.apiUrl || 'Not set'}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Database Type:</Label>
          <Value>{config?.databaseType || 'Not set'}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Storage Prefix:</Label>
          <Value>{config?.storagePrefix || 'Not set'}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Analytics:</Label>
          <Value>{config?.enableAnalytics ? 'Enabled' : 'Disabled'}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Log Level:</Label>
          <Value>{config?.logLevel || 'Not set'}</Value>
        </InfoRow>
      </Section>
      
      <Section>
        <SectionTitle>Feature Flags</SectionTitle>
        {Object.entries(features).map(([key, value]) => (
          <InfoRow key={key}>
            <Label>{key}:</Label>
            <Value>{String(value)}</Value>
          </InfoRow>
        ))}
      </Section>
      
      <Section>
        <SectionTitle>Edge Config</SectionTitle>
        {loading ? (
          <div>
            <LoadingSpinner /> Loading Edge Config...
          </div>
        ) : edgeConfigAvailable ? (
          <>
            <InfoRow>
              <Label>Status:</Label>
              <Value>Available</Value>
            </InfoRow>
            <CodeBlock>{JSON.stringify(edgeConfig, null, 2)}</CodeBlock>
          </>
        ) : (
          <InfoRow>
            <Label>Status:</Label>
            <Value>Not Available</Value>
          </InfoRow>
        )}
      </Section>
    </Container>
  );
});

EnvironmentInfo.displayName = 'EnvironmentInfo';

export default EnvironmentInfo; 