import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { getConfig, AppConfig } from '../../utils/config';
import { env } from '../../utils/env';

const Container = styled.div`
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h3`
  margin-bottom: 10px;
  color: #333;
`;

const CodeBlock = styled.pre`
  background: #f5f5f5;
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
`;

const Status = styled.div<{ status: 'success' | 'error' | 'loading' }>`
  padding: 8px 12px;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: ${({ status }) => 
    status === 'success' ? '#e6ffe6' :
    status === 'error' ? '#ffe6e6' :
    '#f0f0f0'};
  color: ${({ status }) => 
    status === 'success' ? '#006600' :
    status === 'error' ? '#660000' :
    '#666666'};
`;

const EnvironmentInfo: React.FC = () => {
  const [config, setConfig] = useState<AppConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadConfig = useCallback(async () => {
    try {
      setLoading(true);
      const appConfig = await getConfig();
      setConfig(appConfig);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadConfig();
  }, [loadConfig]);

  return (
    <Container>
      <Section>
        <Title>Environment</Title>
        <CodeBlock>
          {JSON.stringify(env, null, 2)}
        </CodeBlock>
      </Section>

      <Section>
        <Title>Configuration</Title>
        {loading ? (
          <Status status="loading">Loading configuration...</Status>
        ) : error ? (
          <Status status="error">Error: {error}</Status>
        ) : (
          <>
            <Status status="success">Configuration loaded successfully</Status>
            <CodeBlock>
              {JSON.stringify(config, null, 2)}
            </CodeBlock>
          </>
        )}
      </Section>

      <Section>
        <Title>Actions</Title>
        <button onClick={loadConfig} disabled={loading}>
          Refresh Configuration
        </button>
      </Section>
    </Container>
  );
};

export default EnvironmentInfo; 