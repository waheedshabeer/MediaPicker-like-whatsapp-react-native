// Configure Metro Bundler options if needed
module.exports = {
  resolver: {
    assetExts: ['bmp', 'gif', 'jpe?g', 'png', 'svg'],
    extraNodeModules: {
      '@react-native-firebase/app': require.resolve('@react-native-firebase/app/package.json')
    }
  },
  watchFolders: ['./node_modules']
};