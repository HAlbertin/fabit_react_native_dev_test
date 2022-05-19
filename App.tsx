import './wdyr';
import React from 'react';
import ContextsProvider from './src/providers';
import Screens from './src/screens';

const App = () => (
  <ContextsProvider>
    <Screens />
  </ContextsProvider>
);

export default App;
