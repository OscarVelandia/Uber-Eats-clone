// import { YELP_API_KEY, YELP_CLIENT_ID } from '@env';

export interface LocalRestaurant {
  name: string;
  imageUrl: `https://${string}`;
  categories: Array<string>;
  price: `$${string}`;
  reviews: number;
  rating: number;
  waitingTime: `${number}-${number} - min` | `more than ${number} hour`;
}

export const useLocalRestaurantsData = () => {
  const localRestaurants: Array<LocalRestaurant> = [
    {
      name: 'Beachside Bar',
      imageUrl:
        'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
      categories: ['Cafe', 'Bar'],
      price: '$$',
      reviews: 1244,
      rating: 4.5,
      waitingTime: '30-45 - min',
    },
    {
      name: 'Benihana',
      imageUrl:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      categories: ['Cafe', 'Bar'],
      price: '$$',
      reviews: 1244,
      rating: 3.7,
      waitingTime: '10-30 - min',
    },
    {
      name: "India's Grill",
      imageUrl:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      categories: ['Indian', 'Bar'],
      price: '$$',
      reviews: 700,
      rating: 4.9,
      waitingTime: '10-20 - min',
    },
  ];

  return localRestaurants;
};
