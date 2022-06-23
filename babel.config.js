module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: ['GOOGLE_PLACES_API_KEY', 'YELP_API_KEY', 'YELP_CLIENT_ID'],
      },
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@components': './src/components',
          '@features': './src/features',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@services': './src/services',
          '@store': './src/store',
          '@styles': './src/styles',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
