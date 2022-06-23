import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchBarState {
  cityOrCountry: string;
}

const initialState: SearchBarState = { cityOrCountry: 'Bogota' };

const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    setCityOrCountry(state, action: PayloadAction<string>) {
      state.cityOrCountry = action.payload;
    },
  },
});

export const { setCityOrCountry } = searchBarSlice.actions;

export const searchBarReducer = searchBarSlice.reducer;
