import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

/**
 * creates a mock of reanimated method using global
 * the empty function is for mock purposes, so, lets disable lint for it
 */
// eslint-disable-next-line @typescript-eslint/no-empty-function
global.__reanimatedWorkletInit = () => {};
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));
