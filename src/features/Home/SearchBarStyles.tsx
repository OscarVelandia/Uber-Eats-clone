import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { GooglePlacesAutocomplete, Styles } from 'react-native-google-places-autocomplete';
import { SearchBarLeftButton } from './SearchBarLeftButton';
import { SearchBarRightButton } from './SearchBarRightButton';

interface SearchBarStyles {
  container: ViewStyle;
}

const searchBarStyles = StyleSheet.create<SearchBarStyles>({
  container: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 15,
  },
});

const searchInput: Partial<Styles> = {
  textInput: {
    backgroundColor: '#eee',
    borderRadius: 20,
    fontWeight: '700',
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 50,
    marginRight: 10,
  },
};

export const SearchBar = () => {
  return (
    <View style={searchBarStyles.container}>
      <GooglePlacesAutocomplete
        styles={searchInput}
        placeholder="Search"
        renderLeftButton={SearchBarLeftButton}
        renderRightButton={SearchBarRightButton}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'YOUR API KEY',
          language: 'en',
        }}
      />
    </View>
  );
};
