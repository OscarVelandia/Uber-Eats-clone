import React from 'react';
import { FlatList, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { useCategoriesData } from '../../hooks/useCategoriesData';
import { CategoryCard } from './CategoryCard';

interface CategoriesStyles {
  container: ViewStyle;
  icon: TextStyle;
  text: TextStyle;
}

const categoriesStyles = StyleSheet.create<CategoriesStyles>({
  container: {
    backgroundColor: 'white',
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

export const Categories = () => {
  const categories = useCategoriesData();

  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <CategoryCard image={item.image} text={item.text} />}
      style={categoriesStyles.container}
    />
  );
};
