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
        allowlist: ['YELP_API_KEY', 'YELP_CLIENT_ID'],
      },
    ],
  ],
};
