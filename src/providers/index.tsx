import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components/native';
import { theme } from '../theme';

type Props = {
  children?: React.ReactNode;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const ContextsProvider: React.FC<Props> = ({ children }) => (
  <StyledComponentsProvider theme={theme}>
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </SafeAreaProvider>
    </PaperProvider>
  </StyledComponentsProvider>
);

export default ContextsProvider;
