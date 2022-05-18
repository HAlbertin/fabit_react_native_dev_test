import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components/native';
import { theme } from '../theme';

type Props = {
  children?: React.ReactNode;
};

const ContextsProvider: React.FC<Props> = ({ children }) => (
  <StyledComponentsProvider theme={theme}>
    <PaperProvider theme={theme}>
      <SafeAreaProvider>{children}</SafeAreaProvider>
    </PaperProvider>
  </StyledComponentsProvider>
);

export default ContextsProvider;
