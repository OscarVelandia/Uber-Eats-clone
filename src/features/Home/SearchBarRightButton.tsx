import React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface SearchBarRightButtonStyles {
  container: ViewStyle;
  icon: TextStyle;
  text: TextStyle;
}

const searchBarRightButtonStyles = StyleSheet.create<SearchBarRightButtonStyles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
    padding: 9,
    backgroundColor: 'white',
    borderRadius: 30,
  },
  icon: {
    marginRight: 6,
    color: 'black',
  },
  text: {
    color: 'black',
  },
});

export const SearchBarRightButton = () => {
  return (
    <View style={searchBarRightButtonStyles.container}>
      <AntDesign name="clockcircle" size={11} style={searchBarRightButtonStyles.icon} />
      <Text style={searchBarRightButtonStyles.text}>Search</Text>
    </View>
  );
};
