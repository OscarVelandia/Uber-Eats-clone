import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native';
import { HeaderButton } from './HeaderButton';

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

type Sections = 'Delivery' | 'Pickup';

export const HeaderTabs = () => {
  const [isCurrentSection, setIsCurrentSection] = useState<Sections>('Delivery');

  return (
    <SafeAreaView style={headerTabsStyles.container}>
      <HeaderButton
        isSelected={isCurrentSection === 'Delivery'}
        onPress={() => setIsCurrentSection('Delivery')}
        text="Delivery"
      />
      <HeaderButton
        isSelected={isCurrentSection === 'Pickup'}
        onPress={() => setIsCurrentSection('Pickup')}
        text="Pickup"
      />
    </SafeAreaView>
  );
};
