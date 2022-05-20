import { DefaultTheme as PaperTheme } from 'react-native-paper';

export const theme = {
  dark: false,
  animation: {
    scale: 1.0,
  },
  fonts: {
    regular: {
      ...PaperTheme.fonts.regular,
      fontSize: 16,
    },
    medium: {
      ...PaperTheme.fonts.medium,
      fontSize: 16,
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
    surface: '#000',
    accent: '#000',
    error: '#E02020',
    text: '#000',
    onSurface: '#000',
    disabled: '#999999',
    placeholder: '#707070',
    backdrop: '#CCCCCC',
    notification: '#E7E8E9',
    absolutes: {
      black: '#000',
      white: '#FFFFFF',
      gray: '#CCCCCC',
    },
  },
};

export type Theme = typeof theme;
