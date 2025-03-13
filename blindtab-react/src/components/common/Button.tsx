import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isActive?: boolean;
  className?: string;
}

const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: var(--primary-color);
        color: white;
        &:hover:not(:disabled) {
          background-color: var(--primary-hover-color);
        }
        &:focus {
          box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.3);
        }
      `;
    case 'secondary':
      return css`
        background-color: var(--bg-secondary);
        color: var(--text-primary);
        border: 1px solid var(--border-color);
        &:hover:not(:disabled) {
          background-color: var(--bg-hover);
        }
        &:focus {
          box-shadow: 0 0 0 3px rgba(221, 221, 221, 0.3);
        }
      `;
    case 'success':
      return css`
        background-color: var(--success-color);
        color: white;
        &:hover:not(:disabled) {
          background-color: var(--success-hover-color);
        }
        &:focus {
          box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.3);
        }
      `;
    case 'danger':
      return css`
        background-color: var(--danger-color);
        color: white;
        &:hover:not(:disabled) {
          background-color: var(--danger-hover-color);
        }
        &:focus {
          box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.3);
        }
      `;
    case 'warning':
      return css`
        background-color: var(--warning-color);
        color: #212529;
        &:hover:not(:disabled) {
          background-color: var(--warning-hover-color);
        }
        &:focus {
          box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.3);
        }
      `;
    case 'text':
      return css`
        background-color: transparent;
        color: var(--primary-color);
        border: none;
        padding: 0;
        &:hover:not(:disabled) {
          text-decoration: underline;
          background-color: transparent;
        }
        &:focus {
          box-shadow: none;
          text-decoration: underline;
        }
      `;
    default:
      return '';
  }
};

const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return css`
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
      `;
    case 'medium':
      return css`
        padding: 0.5rem 1rem;
        font-size: 1rem;
      `;
    case 'large':
      return css`
        padding: 0.75rem 1.5rem;
        font-size: 1.125rem;
      `;
    default:
      return '';
  }
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 500;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  outline: none;
  
  ${props => getVariantStyles(props.variant || 'primary')}
  ${props => getSizeStyles(props.size || 'medium')}
  
  ${props => props.fullWidth && css`
    width: 100%;
  `}
  
  ${props => props.isActive && css`
    background-color: var(--primary-hover-color);
    border-color: var(--primary-hover-color);
  `}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  svg {
    margin-right: ${props => props.children ? '0.5rem' : '0'};
  }
`;

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  fullWidth = false,
  isActive = false,
  ...props 
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      isActive={isActive}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button; 