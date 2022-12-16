import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamsList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigator/RootNavigator';
import useCustomerOrders from '../hooks/useCustomerOrders';

type ModalScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamsList>,
  NativeStackNavigationProp<RootStackParamsList, 'CustomerModal'>
>;

type ModalScreenRouteProp = RouteProp<RootStackParamsList, 'CustomerModal'>;

const ModalScreen = ({
  navigation,
  route,
}: {
  navigation: ModalScreenNavigationProp;
  route: ModalScreenRouteProp;
}) => {
  const {
    params: { name, userId },
  } = route;

  const { orders, error, loading } = useCustomerOrders(userId);

  console.log(`name = `, name);
  console.log(`userId = `, userId);
  console.log(`orders = `, orders);

  return (
    <View>
      <FlatList data={orders} keyExtractor={({ order }) => order.Address} />
    </View>
  );
};

export default ModalScreen;
