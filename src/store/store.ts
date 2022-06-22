import { configureStore } from '@reduxjs/toolkit';
import { restaurantApi } from '../services/restaurantApi';
import searchBarReducer from '../features/SearchBar/SearchBarSlice';
import shippingOptionReducer from '../features/ServiceType/ShippingOptionSlice';

export const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
    shippingOption: shippingOptionReducer,
    [restaurantApi.reducerPath]: restaurantApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(restaurantApi.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
