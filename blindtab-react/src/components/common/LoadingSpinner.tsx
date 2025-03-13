import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
  className?: string;
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div<{ size: number }>`
  display: inline-block;
  position: relative;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

const SpinnerCircle = styled.div<{ size: number; color: string }>`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: ${props => Math.max(2, props.size / 10)}px solid;
  border-radius: 50%;
  border-color: ${props => props.color} transparent transparent transparent;
  animation: ${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`;

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 40, 
  color = 'var(--primary-color)',
  className 
}) => {
  return (
    <SpinnerContainer size={size} className={className} role="status" aria-label="Loading">
      <SpinnerCircle size={size} color={color} />
      <span className="sr-only">Loading...</span>
    </SpinnerContainer>
  );
};

export default LoadingSpinner; 