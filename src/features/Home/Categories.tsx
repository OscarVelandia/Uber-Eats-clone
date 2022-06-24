import { useCategoriesData } from '@hooks';
import React from 'react';
import { FlatList, StyleSheet, ViewStyle } from 'react-native';
import { CategoryCard } from './CategoryCard';

interface CategoriesStyles {
  container: ViewStyle;
}

const categoriesStyles = StyleSheet.create<CategoriesStyles>({
  container: {
    backgroundColor: 'white',
    paddingVertical: 10,
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
