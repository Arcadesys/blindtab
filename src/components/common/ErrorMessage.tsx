import React from 'react';
import styled from 'styled-components';

interface ErrorMessageProps {
  message: string;
  className?: string;
}

const ErrorContainer = styled.div`
  color: var(--error-color);
  background-color: rgba(211, 47, 47, 0.1);
  border: 1px solid var(--error-color);
  border-radius: 4px;
  padding: 10px 15px;
  margin: 10px 0;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
    flex-shrink: 0;
  }
`;

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, className }) => {
  if (!message) return null;
  
  return (
    <ErrorContainer className={className} role="alert">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
      {message}
    </ErrorContainer>
  );
};

export default ErrorMessage; 