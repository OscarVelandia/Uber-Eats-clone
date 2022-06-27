import { useGetRestaurantsQuery } from '@services';
import { useAppSelector } from '@store';
import React from 'react';
import {
  FlatList,
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Restaurants = () => {
  const selectedOption = useAppSelector((state) => state.homeReducer.selectedOption);
  const cityOrCountry = useAppSelector((state) => state.homeReducer.cityOrCountry);
  const { restaurants, error, isLoading } = useGetRestaurantsQuery(cityOrCountry, {
    selectFromResult: ({ data, ...rest }) => {
      return {
        restaurants: data?.filter((restaurant) => restaurant.transactions.includes(selectedOption)),
        error: rest.error,
        isLoading: rest.isLoading,
      };
    },
  });

  if (error) {
    return <Text>Error</Text>;
  }

  return isLoading || !restaurants ? (
    <Text>Loading</Text>
  ) : (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => (
        <RestaurantCard
          image={item.image_url}
          name={item.name}
          rating={item.rating}
          waitingTime={'13 to 45 mins'}
        />
      )}
    />
  );
};

interface RestaurantCardStyles {
  container: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
  iconContainer: ViewStyle;
  cardFooter: ViewStyle;
  nameInformation: TextStyle;
  waitingTimeInformation: TextStyle;
  ratingContainer: ViewStyle;
}

const restaurantCardStyles = StyleSheet.create<RestaurantCardStyles>({
  container: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 180,
  },
  iconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  nameInformation: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  waitingTimeInformation: {
    fontSize: 13,
  },
  ratingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    height: 30,
    width: 30,
    borderRadius: 15,
  },
});

interface RestaurantCardProps {
  image: string;
  name: string;
  rating: number;
  waitingTime: string;
}

const RestaurantCard = ({ image, name, rating, waitingTime }: RestaurantCardProps) => {
  return (
    <TouchableOpacity activeOpacity={1} style={restaurantCardStyles.container}>
      <View style={restaurantCardStyles.imageContainer}>
        <Image source={{ uri: image }} style={restaurantCardStyles.image} />
        <TouchableOpacity style={restaurantCardStyles.iconContainer}>
          <MaterialCommunityIcons name="heart-outline" size={25} color={'#fff'} />
        </TouchableOpacity>
      </View>
      <View style={restaurantCardStyles.cardFooter}>
        <View>
          <Text style={restaurantCardStyles.nameInformation}>{name}</Text>
          <Text style={restaurantCardStyles.waitingTimeInformation}>{waitingTime}</Text>
        </View>
        <View style={restaurantCardStyles.ratingContainer}>
          <Text>{rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
