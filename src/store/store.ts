import { homeReducer } from '@features/Home';
import { configureStore } from '@reduxjs/toolkit';
import { restaurantApi } from '@services';

export const store = configureStore({
  reducer: {
    homeReducer: homeReducer,
    [restaurantApi.reducerPath]: restaurantApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(restaurantApi.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
