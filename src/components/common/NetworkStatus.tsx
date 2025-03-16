import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Define types for props
interface NetworkStatusProps {
  isLoading?: boolean;
}

// Styled components
const StatusContainer = styled.div<{ isOnline: boolean }>`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 20px;
  background-color: ${props => props.isOnline ? 'rgba(0, 128, 0, 0.2)' : 'rgba(255, 0, 0, 0.2)'};
  color: ${props => props.isOnline ? '#00aa00' : '#ff0000'};
  font-size: 12px;
  transition: all 0.3s ease;
  pointer-events: none;
  opacity: 0.8;
  
  &:hover {
    opacity: 1;
  }
`;

const StatusDot = styled.div<{ isOnline: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.isOnline ? '#00aa00' : '#ff0000'};
  margin-right: 5px;
`;

const StatusText = styled.span`
  font-weight: 500;
`;

// Spinner animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-top: 2px solid #3498db;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-left: 10px;
`;

const LoadingOverlay = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  opacity: ${props => props.visible ? 1 : 0};
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  transition: opacity 0.3s, visibility 0.3s;
`;

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const LargeSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-top: 3px solid #3498db;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 10px;
`;

const LoadingText = styled.div`
  color: #333;
  font-size: 16px;
  font-weight: 500;
`;

const NetworkStatus: React.FC<NetworkStatusProps> = ({ isLoading = false }) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showLoadingOverlay, setShowLoadingOverlay] = useState(false);
  const [loadingTimer, setLoadingTimer] = useState<number | null>(null);

  // Monitor online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Handle loading state with delay for overlay
  useEffect(() => {
    if (isLoading) {
      // Show loading overlay after 1 second of loading
      const timer = window.setTimeout(() => {
        setShowLoadingOverlay(true);
      }, 1000);
      
      setLoadingTimer(timer as unknown as number);
    } else {
      if (loadingTimer) {
        clearTimeout(loadingTimer);
      }
      setShowLoadingOverlay(false);
    }

    return () => {
      if (loadingTimer) {
        clearTimeout(loadingTimer);
      }
    };
  }, [isLoading]);

  return (
    <>
      <StatusContainer isOnline={isOnline}>
        <StatusDot isOnline={isOnline} />
        <StatusText>{isOnline ? 'Online' : 'Offline'}</StatusText>
        {isLoading && <LoadingSpinner />}
      </StatusContainer>

      <LoadingOverlay visible={showLoadingOverlay && isLoading}>
        <SpinnerContainer>
          <LargeSpinner />
          <LoadingText>Loading songs...</LoadingText>
        </SpinnerContainer>
      </LoadingOverlay>
    </>
  );
};

export default NetworkStatus; 