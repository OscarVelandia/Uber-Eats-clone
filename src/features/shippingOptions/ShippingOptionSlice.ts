import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ShippingOptions = 'delivery' | 'pickup';

interface ShippingServiceTypeState {
  selectedOption: ShippingOptions;
}

const initialState: ShippingServiceTypeState = { selectedOption: 'delivery' };

const shippingOptionSlice = createSlice({
  name: 'shippingOption',
  initialState,
  reducers: {
    setShippingOption(state, action: PayloadAction<ShippingOptions>) {
      state.selectedOption = action.payload;
    },
  },
});

export const { setShippingOption } = shippingOptionSlice.actions;

export default shippingOptionSlice.reducer;
