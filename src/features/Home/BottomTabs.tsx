import { ButtonWithIcon } from '@components';
import React from 'react';
import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';

interface BottomTabsStyles {
  container: ViewStyle;
  icon: TextStyle;
  text: TextStyle;
}

const bottomTabsStyles = StyleSheet.create<BottomTabsStyles>({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  icon: {
    marginRight: 6,
    color: 'black',
  },
  text: {
    color: 'black',
  },
});

export const BottomTabs = () => {
  return (
    <View style={bottomTabsStyles.container}>
      <ButtonWithIcon icon="home" text="Home" />
      <ButtonWithIcon icon="search" text="Browse" />
      <ButtonWithIcon icon="shopping-bag" text="Grocery" />
      <ButtonWithIcon icon="receipt" text="Orders" />
      <ButtonWithIcon icon="user" text="Account" />
    </View>
  );
};
