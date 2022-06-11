import React, { useState } from 'react';
import {
  FlatList,
  Image,
  ImageStyle,
  SafeAreaView,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { GooglePlacesAutocomplete, Styles } from 'react-native-google-places-autocomplete';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Category, useCategoriesData } from '../hooks/useCategoriesData';
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

//#region RenderSearchBarLeftButton

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

//#endregion

//#region SearchBarRightButton

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

const SearchBarRightButton = () => {
  return (
    <View style={searchBarRightButtonStyles.container}>
      <AntDesign name="clockcircle" size={11} style={searchBarRightButtonStyles.icon} />
      <Text style={searchBarRightButtonStyles.text}>Search</Text>
    </View>
  );
};

//#endregion

//#region SearchBar

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

//#endregion

//#region Categories

interface CategoriesStyles {
  container: ViewStyle;
  icon: TextStyle;
  text: TextStyle;
}

const categoriesStyles = StyleSheet.create<CategoriesStyles>({
  container: {
    flex: 1,
  },
  icon: {
    marginRight: 6,
    color: 'black',
  },
  text: {
    color: 'black',
  },
});

const Categories = () => {
  const items = useCategoriesData();

  return (
    <SafeAreaView style={categoriesStyles.container}>
      <FlatList
        data={items}
        horizontal
        renderItem={({ item }) => <CategoryCard image={item.image} text={item.text} />}
      />
      <Text style={categoriesStyles.text}>Search</Text>
    </SafeAreaView>
  );
};

//#endregion

//#region

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

const CategoryCard = ({ image, text }: CategoryCardProps) => {
  return (
    <View style={categoryCardStyles.container}>
      <Image source={image} style={categoryCardStyles.image} />
      <Text style={categoryCardStyles.text}>{text}</Text>
    </View>
  );
};
//#endregion
