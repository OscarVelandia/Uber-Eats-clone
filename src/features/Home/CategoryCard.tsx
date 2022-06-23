import React from 'react';
import { Image, ImageStyle, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { Category } from '@hooks';

interface CategoryCardStyles {
  container: ViewStyle;
  image: ImageStyle;
  text: TextStyle;
}

const categoryCardStyles = StyleSheet.create<CategoryCardStyles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30,
  },
  image: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
  },
  text: {
    color: 'black',
    fontSize: 13,
    fontWeight: '900',
  },
});
type CategoryCardProps = Category;

export const CategoryCard = ({ image, text }: CategoryCardProps) => {
  return (
    <View style={categoryCardStyles.container}>
      <Image source={image} style={categoryCardStyles.image} />
      <Text style={categoryCardStyles.text}>{text}</Text>
    </View>
  );
};
