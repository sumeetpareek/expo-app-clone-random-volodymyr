module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin']
  };
};
// See: https://github.com/software-mansion/react-native-reanimated/issues/1875
