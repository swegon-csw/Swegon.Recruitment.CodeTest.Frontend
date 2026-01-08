export const lightTheme = {
  colors: {
    // Primary colors
    primary: '#0066CC',
    primaryHover: '#0052A3',
    primaryLight: '#E6F2FF',
    
    // Secondary colors
    secondary: '#6C757D',
    secondaryHover: '#565E64',
    secondaryLight: '#F8F9FA',
    
    // Status colors
    success: '#28A745',
    successLight: '#D4EDDA',
    error: '#DC3545',
    errorLight: '#F8D7DA',
    warning: '#FFC107',
    warningLight: '#FFF3CD',
    info: '#17A2B8',
    infoLight: '#D1ECF1',
    
    // Neutral colors
    text: '#212529',
    textLight: '#6C757D',
    heading: '#000000',
    background: '#FFFFFF',
    backgroundAlt: '#F8F9FA',
    border: '#DEE2E6',
    borderLight: '#E9ECEF',
    
    // Component-specific
    cardBackground: '#FFFFFF',
    cardShadow: 'rgba(0, 0, 0, 0.1)',
    modalOverlay: 'rgba(0, 0, 0, 0.5)',
    codeBackground: '#F4F4F4',
    
    // Scrollbar
    scrollbarTrack: '#F1F1F1',
    scrollbarThumb: '#C1C1C1',
    scrollbarThumbHover: '#A8A8A8',
  },
  
  shadows: {
    small: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    medium: '0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)',
    large: '0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.10)',
    xl: '0 15px 30px rgba(0, 0, 0, 0.20), 0 5px 15px rgba(0, 0, 0, 0.12)',
  },
  
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    xl: '16px',
    round: '50%',
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  
  breakpoints: {
    xs: '480px',
    sm: '768px',
    md: '1024px',
    lg: '1280px',
    xl: '1536px',
  },
};

export const darkTheme: typeof lightTheme = {
  colors: {
    // Primary colors
    primary: '#4A9EFF',
    primaryHover: '#6BB1FF',
    primaryLight: '#1A2332',
    
    // Secondary colors
    secondary: '#ADB5BD',
    secondaryHover: '#CED4DA',
    secondaryLight: '#1E2329',
    
    // Status colors
    success: '#51CF66',
    successLight: '#1A2E1F',
    error: '#FF6B6B',
    errorLight: '#2E1A1A',
    warning: '#FFD93D',
    warningLight: '#2E2A1A',
    info: '#4DABF7',
    infoLight: '#1A262E',
    
    // Neutral colors
    text: '#E9ECEF',
    textLight: '#ADB5BD',
    heading: '#F8F9FA',
    background: '#0D1117',
    backgroundAlt: '#161B22',
    border: '#30363D',
    borderLight: '#21262D',
    
    // Component-specific
    cardBackground: '#161B22',
    cardShadow: 'rgba(0, 0, 0, 0.3)',
    modalOverlay: 'rgba(0, 0, 0, 0.7)',
    codeBackground: '#1E2329',
    
    // Scrollbar
    scrollbarTrack: '#161B22',
    scrollbarThumb: '#30363D',
    scrollbarThumbHover: '#484F58',
  },
  
  shadows: lightTheme.shadows,
  borderRadius: lightTheme.borderRadius,
  spacing: lightTheme.spacing,
  breakpoints: lightTheme.breakpoints,
};

export type Theme = typeof lightTheme;
