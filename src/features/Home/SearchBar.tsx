import { GOOGLE_PLACES_API_KEY } from '@env';
import { useAppDispatch } from '@store';
import React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import {
  GooglePlaceData,
  GooglePlacesAutocomplete,
  Styles,
} from 'react-native-google-places-autocomplete';
import { setCityOrCountry } from './HomeSlice';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

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

  const handleSearchOnPress = (data: GooglePlaceData) => {
    const [city] = data.description.split(',');

    dispatch(setCityOrCountry(city));
  };

  return (
    <View style={searchBarStyles.container}>
      <GooglePlacesAutocomplete
        styles={searchInput}
        debounce={300}
        placeholder="Search"
        renderLeftButton={SearchBarLeftButton}
        renderRightButton={SearchBarRightButton}
        onPress={handleSearchOnPress}
        query={{ key: GOOGLE_PLACES_API_KEY, language: 'en' }}
      />
    </View>
  );
};

interface SearchBarLeftButtonStyles {
  container: ViewStyle;
  icon: TextStyle;
}

const searchBarLeftButtonStyles = StyleSheet.create<SearchBarLeftButtonStyles>({
  container: {
    marginLeft: 10,
  },
  icon: {
    color: 'black',
  },
});

const SearchBarLeftButton = () => {
  return (
    <View style={searchBarLeftButtonStyles.container}>
      <Ionicons name="location-sharp" size={24} style={searchBarLeftButtonStyles.icon} />
    </View>
  );
};

interface SearchBarRightButtonStyles {
  container: ViewStyle;
  icon: TextStyle;
  text: TextStyle;
}

const searchBarRightButtonStyles = StyleSheet.create<SearchBarRightButtonStyles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
    padding: 9,
    backgroundColor: 'white',
    borderRadius: 30,
  },
  icon: {
    marginRight: 6,
    color: 'black',
  },
  text: {
    color: 'black',
  },
});

export const SearchBarRightButton = () => {
  return (
    <View style={searchBarRightButtonStyles.container}>
      <AntDesign name="clockcircle" size={11} style={searchBarRightButtonStyles.icon} />
      <Text style={searchBarRightButtonStyles.text}>Search</Text>
    </View>
  );
};
