import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

interface HeaderButtonStyles {
  container: ViewStyle;
  text: TextStyle;
}

const headerButtonStyles = (isSelected: boolean) =>
  StyleSheet.create<HeaderButtonStyles>({
    container: {
      backgroundColor: isSelected ? 'black' : 'white',
      borderRadius: 30,
      paddingVertical: 6,
      paddingHorizontal: 16,
    },
    text: {
      color: isSelected ? 'white' : 'black',
      fontSize: 15,
      fontWeight: '900',
    },
  });

interface HeaderButtonProps {
  isSelected: boolean;
  onPress: () => void;
  text: string;
}

export const HeaderButton = ({ isSelected, onPress, text }: HeaderButtonProps) => {
  return (
    <TouchableOpacity style={headerButtonStyles(isSelected).container} onPress={onPress}>
      <Text style={headerButtonStyles(isSelected).text}>{text}</Text>
    </TouchableOpacity>
  );
};
