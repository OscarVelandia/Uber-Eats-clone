import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 17 : 0,
  },
});
