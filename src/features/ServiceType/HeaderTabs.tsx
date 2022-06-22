import React from 'react';
import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { HeaderButton } from './HeaderButton';
import { setShippingOption } from './ShippingOptionSlice';

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

export const HeaderTabs = () => {
  const dispatch = useAppDispatch();
  const selectedOption = useAppSelector((state) => state.shippingOption.selectedOption);

  return (
    <SafeAreaView style={headerTabsStyles.container}>
      <HeaderButton
        isSelected={selectedOption === 'delivery'}
        onPress={() => dispatch(setShippingOption('delivery'))}
        text="Delivery"
      />
      <HeaderButton
        isSelected={selectedOption === 'pickup'}
        onPress={() => dispatch(setShippingOption('pickup'))}
        text="Pickup"
      />
    </SafeAreaView>
  );
};
