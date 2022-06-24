import { BottomTabs, Categories, HeaderTabs, Restaurants, SearchBar } from '@features/Home';
import { globalStyles } from '@styles';
import React from 'react';
import { SafeAreaView, StyleSheet, View, ViewStyle } from 'react-native';

interface HomeStyles {
  container: ViewStyle;
  headerAndSearchContainer: ViewStyle;
}

const homeStyles = StyleSheet.create<HomeStyles>({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  headerAndSearchContainer: {
    backgroundColor: 'white',
    padding: 15,
  },
});

export const Home = () => {
  return (
    <SafeAreaView style={StyleSheet.compose(homeStyles.container, globalStyles.AndroidSafeArea)}>
      <View style={homeStyles.headerAndSearchContainer}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <Categories />
      <Restaurants />
      <BottomTabs />
    </SafeAreaView>
  );
};
