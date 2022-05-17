import React from 'react';
import Screens from './src/components/screens';
import ContextsProvider from './src/providers';

const App = () => (
  <ContextsProvider>
    <Screens />
  </ContextsProvider>
);

export default App;
