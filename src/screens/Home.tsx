import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { GooglePlacesAutocomplete, Styles } from 'react-native-google-places-autocomplete';
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
    </SafeAreaView>
  );
};

// Components

//#region HeaderTabs

interface HeaderTabsStyles {
  container: ViewStyle;
}

const headerTabsStyles = StyleSheet.create<HeaderTabsStyles>({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'white',
  },
});

type Sections = 'Delivery' | 'Pickup';

const HeaderTabs = () => {
  const [isCurrentSection, setIsCurrentSection] = useState<Sections>('Delivery');

  return (
    <SafeAreaView style={headerTabsStyles.container}>
      <HeaderButton
        isSelected={isCurrentSection === 'Delivery'}
        onPress={() => setIsCurrentSection('Delivery')}
        text="Delivery"
      />
      <HeaderButton
        isSelected={isCurrentSection === 'Pickup'}
        onPress={() => setIsCurrentSection('Pickup')}
        text="Pickup"
      />
    </SafeAreaView>
  );
};

//#endregion

//#region HeaderButtons

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

const HeaderButton = ({ isSelected, onPress, text }: HeaderButtonProps) => {
  return (
    <TouchableOpacity style={headerButtonStyles(isSelected).container} onPress={onPress}>
      <Text style={headerButtonStyles(isSelected).text}>{text}</Text>
    </TouchableOpacity>
  );
};

//#endregion

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

const SearchBar = () => {
  return (
    <View style={searchBarStyles.container}>
      <GooglePlacesAutocomplete
        styles={searchInput}
        placeholder="Search"
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
