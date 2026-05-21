// Import necessary modules and configurations
import { merge } from 'lodash';
import { getDefaultConfig } from '@react-native/metro-config';

module.exports = merge(getDefaultConfig(), {
  resolver: {
    assetExts: ['json'],
  },
});