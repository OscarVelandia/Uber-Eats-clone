import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

interface ButtonWithIconStyles {
  container: ViewStyle;
  icon: TextStyle;
}

const bottomWithIconStyles = StyleSheet.create<ButtonWithIconStyles>({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 3,
  },
});

interface ButtonWithIconProps {
  icon: string;
  text: string;
}

export const ButtonWithIcon = ({ icon, text }: ButtonWithIconProps) => {
  return (
    <TouchableOpacity onPress={console.log}>
      <FontAwesome5 name={icon} size={25} style={bottomWithIconStyles.icon} />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};
