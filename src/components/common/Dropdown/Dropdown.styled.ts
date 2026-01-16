import styled from "styled-components";

export const Container = styled.div<{ $fullWidth: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const Required = styled.span`
  color: ${({ theme }) => theme.colors.error};
  margin-left: 0.25rem;
`;

export const StyledSelect = styled.select<{ $hasError: boolean; $fullWidth: boolean }>`
  padding: 0.75rem;
  border: 1px solid ${({ theme, $hasError }) => ($hasError ? theme.colors.error : theme.colors.border)};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 1rem;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.error};
`;

export const HelperText = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textLight};
`;
export {};
