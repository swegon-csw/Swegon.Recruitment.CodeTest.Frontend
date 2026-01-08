import { ButtonHTMLAttributes, ReactNode } from 'react';
import styled, { css, keyframes } from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'outline';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const getSizeStyles = (size: string) => {
  switch (size) {
    case 'small':
      return css`
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
      `;
    case 'large':
      return css`
        padding: 1rem 2rem;
        font-size: 1.125rem;
      `;
    default:
      return css`
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
      `;
  }
};

const getVariantStyles = (variant: string) => {
  switch (variant) {
    case 'secondary':
      return css`
        background-color: ${({ theme }) => theme.colors.secondary};
        color: white;
        &:hover:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.secondaryHover};
        }
      `;
    case 'danger':
      return css`
        background-color: ${({ theme }) => theme.colors.error};
        color: white;
        &:hover:not(:disabled) {
          background-color: #c82333;
        }
      `;
    case 'success':
      return css`
        background-color: ${({ theme }) => theme.colors.success};
        color: white;
        &:hover:not(:disabled) {
          background-color: #218838;
        }
      `;
    case 'outline':
      return css`
        background-color: transparent;
        color: ${({ theme }) => theme.colors.primary};
        border: 2px solid ${({ theme }) => theme.colors.primary};
        &:hover:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.primaryLight};
        }
      `;
    default:
      return css`
        background-color: ${({ theme }) => theme.colors.primary};
        color: white;
        &:hover:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.primaryHover};
        }
      `;
  }
};

const StyledButton = styled.button<{ $variant: string; $size: string; $fullWidth: boolean; $loading: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  
  ${({ $size }) => getSizeStyles($size)}
  ${({ $variant }) => getVariantStyles($variant)}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  ${({ $loading }) =>
    $loading &&
    css`
      pointer-events: none;
    `}
`;

const Spinner = styled.span`
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
`;

export default function Button({
  variant = 'primary',
  size = 'medium',
  loading = false,
  fullWidth = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      $loading={loading}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Spinner />}
      {children}
    </StyledButton>
  );
}
