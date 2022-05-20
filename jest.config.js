module.exports = {
  preset: 'jest-expo',
  modulePaths: ['<rootDir>/src'],
  setupFiles: ['<rootDir>/src/__mocks__/jest.mock.js'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/src/__mocks__/svg.mock.js',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.tsx'],
  coverageReporters: ['lcov'],
};
