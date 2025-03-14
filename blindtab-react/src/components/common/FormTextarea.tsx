import React, { TextareaHTMLAttributes } from 'react';
import styled from 'styled-components';

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  className?: string;
}

const TextareaContainer = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
`;

const TextareaLabel = styled.label`
  font-size: 0.875rem;
  margin-bottom: 6px;
  color: var(--text-primary);
  font-weight: 500;
`;

const StyledTextarea = styled.textarea<{ hasError?: boolean }>`
  padding: 10px 12px;
  border: 1px solid ${props => props.hasError ? 'var(--error-color)' : 'var(--border-color)'};
  border-radius: 4px;
  font-size: 1rem;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: border-color 0.2s, box-shadow 0.2s;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? 'var(--error-color)' : 'var(--primary-color)'};
    box-shadow: 0 0 0 2px ${props => props.hasError 
      ? 'rgba(211, 47, 47, 0.2)' 
      : 'rgba(74, 144, 226, 0.2)'};
  }
  
  &:disabled {
    background-color: var(--bg-secondary);
    cursor: not-allowed;
    opacity: 0.7;
  }
  
  &::placeholder {
    color: var(--text-secondary);
    opacity: 0.7;
  }
`;

const HelperText = styled.span<{ isError?: boolean }>`
  font-size: 0.75rem;
  margin-top: 4px;
  color: ${props => props.isError ? 'var(--error-color)' : 'var(--text-secondary)'};
`;

const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  id,
  error,
  helperText,
  fullWidth = false,
  className,
  ...props
}) => {
  return (
    <TextareaContainer fullWidth={fullWidth} className={className}>
      <TextareaLabel htmlFor={id}>{label}</TextareaLabel>
      <StyledTextarea 
        id={id}
        hasError={!!error}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
        {...props}
      />
      {(error || helperText) && (
        <HelperText 
          isError={!!error}
          id={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
        >
          {error || helperText}
        </HelperText>
      )}
    </TextareaContainer>
  );
};

export default FormTextarea; 