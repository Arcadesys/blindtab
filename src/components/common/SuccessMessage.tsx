import React from 'react';
import styled from 'styled-components';

interface SuccessMessageProps {
  message: string;
  className?: string;
}

const SuccessContainer = styled.div`
  color: var(--success-color);
  background-color: rgba(40, 167, 69, 0.1);
  border: 1px solid var(--success-color);
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

const SuccessMessage: React.FC<SuccessMessageProps> = ({ message, className }) => {
  if (!message) return null;
  
  return (
    <SuccessContainer className={className} role="status">
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
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      {message}
    </SuccessContainer>
  );
};

export default SuccessMessage; 