import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import ModalScreen from '../screens/ModalScreen';

export type RootStackParamsList = {
  Main: undefined;
  CustomerModal: {
    userId: string;
    name: string;
  };
  Order: { order: any };
};

const RootNavigator = () => {
  const RootStack = createNativeStackNavigator<RootStackParamsList>();

  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name='Main' component={TabNavigator} />
      </RootStack.Group>
      <RootStack.Group>
        <RootStack.Screen name='CustomerModal' component={ModalScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
