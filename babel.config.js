module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel', 'babel-plugin-styled-components', 'react-native-reanimated/plugin'],
      },
    },
    plugins: [
      // reanimated needs to be the last one
      'react-native-reanimated/plugin',
    ],
  };
};
