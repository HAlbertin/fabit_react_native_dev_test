import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components/native';
import { theme } from '../theme';

type Props = {
  children?: React.ReactNode;
};

const ContextsProvider: React.FC<Props> = ({ children }) => (
  <StyledComponentsProvider theme={theme}>
    <PaperProvider theme={theme}>{children}</PaperProvider>
  </StyledComponentsProvider>
);

export default ContextsProvider;
