// Example Babel configuration file
module.exports = (api) => {
  api.cache(false);

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      // Add your custom Babel plugins here
    ],
  };
};