import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryHover: string;
      primaryLight: string;
      secondary: string;
      secondaryHover: string;
      success: string;
      successLight: string;
      error: string;
      errorLight: string;
      warning: string;
      warningLight: string;
      info: string;
      infoLight: string;
      background: string;
      backgroundAlt: string;
      cardBackground: string;
      text: string;
      textLight: string;
      heading: string;
      border: string;
      modalOverlay: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
      round: string;
    };
    shadows: {
      small: string;
      medium: string;
      large: string;
      xl: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
