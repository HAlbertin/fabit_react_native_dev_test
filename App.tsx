import React from 'react';
import ContextsProvider from './src/providers';
import Screens from './src/screens';

/**
 * Reactotron for dev purposes only
 */
if (__DEV__) {
  import('./reactotron').then(() => console.log('Reactotron Configured'));
}

const App = () => (
  <ContextsProvider>
    <Screens />
  </ContextsProvider>
);

export default App;
