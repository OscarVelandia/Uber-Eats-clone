import { GOOGLE_PLACES_API_KEY } from '@env';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { GooglePlacesAutocomplete, Styles } from 'react-native-google-places-autocomplete';
import { useAppDispatch } from '../../store/hooks';
import { SearchBarLeftButton } from './SearchBarLeftButton';
import { SearchBarRightButton } from './SearchBarRightButton';
import { setCityOrCountry } from './SearchBarSlice';

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
  const dispatch = useAppDispatch();

  return (
    <View style={searchBarStyles.container}>
      <GooglePlacesAutocomplete
        styles={searchInput}
        debounce={300}
        placeholder="Search"
        renderLeftButton={SearchBarLeftButton}
        renderRightButton={SearchBarRightButton}
        onPress={(data, details = null) => {
          const [city] = data.description.split(',');

          dispatch(setCityOrCountry(city));
        }}
        query={{ key: GOOGLE_PLACES_API_KEY, language: 'en' }}
      />
    </View>
  );
};