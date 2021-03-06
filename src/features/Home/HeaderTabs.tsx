import { RoundedButton } from '@components';
import { setShippingOption } from '@features/Home';
import { useAppDispatch, useAppSelector } from '@store';
import React from 'react';
import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native';

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
  const selectedOption = useAppSelector((state) => state.homeReducer.selectedOption);

  return (
    <SafeAreaView style={headerTabsStyles.container}>
      <RoundedButton
        isSelected={selectedOption === 'delivery'}
        onPress={() => dispatch(setShippingOption('delivery'))}
        text="Delivery"
      />
      <RoundedButton
        isSelected={selectedOption === 'pickup'}
        onPress={() => dispatch(setShippingOption('pickup'))}
        text="Pickup"
      />
    </SafeAreaView>
  );
};
