import React from 'react';
import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface SearchBarLeftButtonStyles {
  container: ViewStyle;
  icon: TextStyle;
}

const searchBarLeftButtonStyles = StyleSheet.create<SearchBarLeftButtonStyles>({
  container: {
    marginLeft: 10,
  },
  icon: {
    color: 'black',
  },
});

export const SearchBarLeftButton = () => {
  return (
    <View style={searchBarLeftButtonStyles.container}>
      <Ionicons name="location-sharp" size={24} style={searchBarLeftButtonStyles.icon} />
    </View>
  );
};
