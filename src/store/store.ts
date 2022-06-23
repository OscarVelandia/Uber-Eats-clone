import { searchBarReducer } from '@features/SearchBar';
import { shippingOptionReducer } from '@features/shippingOptions';
import { configureStore } from '@reduxjs/toolkit';
import { restaurantApi } from '@services';

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
