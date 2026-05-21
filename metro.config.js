module.exports = {
  // Enable Babel's transform-runtime plugin.
  transformer: {
    getTransformModulePath: function () {
      return require.resolve('@babel/core');
    },
    presets: ['react-native'],
  },
};