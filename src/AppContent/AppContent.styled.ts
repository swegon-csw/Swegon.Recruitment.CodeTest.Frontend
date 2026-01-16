import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const lightTheme = {
  colors: {
    primary: "#0066cc",
    primaryHover: "#0052a3",
    primaryLight: "#e6f2ff",
    secondary: "#6c757d",
    secondaryHover: "#5a6268",
    success: "#28a745",
    successLight: "rgba(40, 167, 69, 0.1)",
    error: "#dc3545",
    errorLight: "rgba(220, 53, 69, 0.1)",
    warning: "#ffc107",
    warningLight: "rgba(255, 193, 7, 0.1)",
    info: "#17a2b8",
    infoLight: "rgba(23, 162, 184, 0.1)",
    background: "#ffffff",
    backgroundAlt: "#f8f9fa",
    cardBackground: "#ffffff",
    text: "#212529",
    textLight: "#6c757d",
    heading: "#212529",
    border: "#dee2e6",
    modalOverlay: "rgba(0, 0, 0, 0.5)",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },
  borderRadius: {
    small: "0.25rem",
    medium: "0.375rem",
    large: "0.5rem",
    round: "50%",
  },
  shadows: {
    small: "0 1px 2px rgba(0, 0, 0, 0.05)",
    medium: "0 4px 6px rgba(0, 0, 0, 0.1)",
    large: "0 10px 15px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1)",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: "#1a1a1a",
    backgroundAlt: "#2d2d2d",
    cardBackground: "#2d2d2d",
    text: "#f8f9fa",
    textLight: "#adb5bd",
    heading: "#f8f9fa",
    border: "#495057",
    modalOverlay: "rgba(0, 0, 0, 0.7)",
  },
};

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export {};
