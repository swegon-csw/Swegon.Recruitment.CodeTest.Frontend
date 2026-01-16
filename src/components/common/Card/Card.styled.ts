import styled, { css } from "styled-components";

const getPaddingStyles = (padding: string) => {
  switch (padding) {
    case "none":
      return "0";
    case "small":
      return "0.5rem";
    case "large":
      return "2rem";
    default:
      return "1rem";
  }
};

const getVariantStyles = (variant: string) => {
  switch (variant) {
    case "outlined":
      return css`
        background-color: transparent;
        border: 1px solid ${({ theme }) => theme.colors.border};
      `;
    case "elevated":
      return css`
        background-color: ${({ theme }) => theme.colors.cardBackground};
        box-shadow: ${({ theme }) => theme.shadows.medium};
        border: none;
      `;
    default:
      return css`
        background-color: ${({ theme }) => theme.colors.cardBackground};
        border: 1px solid ${({ theme }) => theme.colors.border};
      `;
  }
};

export const StyledCard = styled.div<{ $variant: string; $padding: string; $clickable: boolean }>`
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ $padding }) => getPaddingStyles($padding)};
  transition: all 0.2s ease;
  ${({ $variant }) => getVariantStyles($variant)}

  ${({ $clickable }) =>
    $clickable &&
    css`
      cursor: pointer;

      &:hover {
        transform: translateY(-2px);
        box-shadow: ${({ theme }) => theme.shadows.large};
      }
    `}
`;
export {};
