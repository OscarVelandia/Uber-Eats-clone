import { YELP_API_KEY } from '@env';
import { ShippingOptions } from '@features/shippingOptions';
import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@utils';

export interface Restaurant {
  alias: string;
  categories: Array<string>;
  coordinates: Array<unknown>;
  display_phone: string;
  distance: number;
  id: string;
  image_url: `https://${string}`;
  is_closed: boolean;
  location: unknown;
  name: string;
  phone: string;
  price: '$' | '$$' | '$$$';
  rating: number;
  review_count: number;
  transactions: Array<ShippingOptions>;
  url: `https://www.yelp.com/${string}`;
  waitingTime: `${number}-${number} - min` | `more than ${number} hour`;
}

interface RestaurantResponse {
  businesses: Array<Restaurant>;
}

export const restaurantApi = createApi({
  reducerPath: 'restaurantApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api.yelp.com/v3/businesses/search',
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Array<Restaurant>, string>({
      query: (location) => ({
        url: `?term=restaurants&location=${location}`,
        headers: { Authorization: `Bearer ${YELP_API_KEY}` },
      }),
      transformResponse: (response: RestaurantResponse) => response.businesses,
    }),
    // mutation: build.mutation({
    //   query: () => ({ url: '/mutation', method: 'post' }),
    // }),
  }),
});

export const { useGetRestaurantsQuery } = restaurantApi;
