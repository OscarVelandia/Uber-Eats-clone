import { Platform, StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 17 : 0,
  },
});
