import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

jest.useFakeTimers();

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

/**
 * creates a mock of reanimated method using global
 * the empty function is for mock purposes, so, lets disable lint for it
 */
// eslint-disable-next-line @typescript-eslint/no-empty-function
global.__reanimatedWorkletInit = () => {};
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
