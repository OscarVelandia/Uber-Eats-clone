import React from 'react';
import { SafeAreaView, StyleSheet, View, ViewStyle } from 'react-native';
import { Categories } from '../features/Home/Categories';
import { HeaderTabs } from '../features/Home/HeaderTabs';
import { SearchBar } from '../features/Home/SearchBarStyles';
import globalStyles from '../styles/globalStyles';

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
    </SafeAreaView>
  );
};
