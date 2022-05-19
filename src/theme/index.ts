import { DefaultTheme as PaperTheme } from 'react-native-paper';

export const theme = {
  dark: false,
  animation: {
    scale: 1.0,
  },
  fonts: {
    regular: {
      ...PaperTheme.fonts.regular,
      fontSize: 14,
    },
    medium: {
      ...PaperTheme.fonts.medium,
      fontSize: 14,
    },
    light: {
      ...PaperTheme.fonts.light,
      fontSize: 14,
    },
    thin: {
      ...PaperTheme.fonts.thin,
      fontSize: 14,
    },
  },
  roundness: 4,
  colors: {
    primary: '#FFB81C',
    secondary: '#101820',
    background: '#F7F8F7',
    surface: '#0000',
    accent: '#0000',
    error: '#E02020',
    text: '#0000',
    onSurface: '#0000',
    disabled: '#999999',
    placeholder: '#707070',
    backdrop: '#CCCCCC',
    notification: '#E7E8E9',
    absolutes: {
      black: '#000000',
      white: '#FFFFFF',
      gray: '#CCCCCC',
    },
  },
};

export type Theme = typeof theme;
