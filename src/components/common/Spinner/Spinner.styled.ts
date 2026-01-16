import styled, { keyframes } from "styled-components";

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const getSizeStyles = (size: string) => {
  switch (size) {
    case "small":
      return "1.5rem";
    case "large":
      return "3rem";
    default:
      return "2rem";
  }
};

export const StyledSpinner = styled.div<{ $size: string; $color: string }>`
  width: ${({ $size }) => getSizeStyles($size)};
  height: ${({ $size }) => getSizeStyles($size)};
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-top-color: ${({ theme, $color }) => ($color === "white" ? "white" : theme.colors.primary)};
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
`;
export {};
