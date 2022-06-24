import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ShippingOptions = 'delivery' | 'pickup';

interface HomeState {
  cityOrCountry: string;
  selectedOption: ShippingOptions;
}

const initialState: HomeState = { cityOrCountry: 'Bogota', selectedOption: 'delivery' };

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setCityOrCountry(state, action: PayloadAction<string>) {
      state.cityOrCountry = action.payload;
    },
    setShippingOption(state, action: PayloadAction<ShippingOptions>) {
      state.selectedOption = action.payload;
    },
  },
});

export const { setCityOrCountry, setShippingOption } = homeSlice.actions;

export const homeReducer = homeSlice.reducer;
