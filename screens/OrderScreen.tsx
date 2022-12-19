import { View, Text, ScrollView, Image } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { RootStackParamsList } from '../navigator/RootNavigator';
import { TabStackParamsList } from '../navigator/TabNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import useOrders from '../hooks/useOrders';
import { LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';
import Button from '../components/UI/Button';

type OrdersScreenRouteProp = RouteProp<RootStackParamsList, 'Order'>;

export type OrdersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamsList, 'Orders'>,
  NativeStackNavigationProp<RootStackParamsList>
>;
const OrderScreen = ({
  route,
  navigation,
}: {
  navigation: OrdersScreenNavigationProp;
  route: OrdersScreenRouteProp;
}) => {
  const { loading, error, orders } = useOrders();
  const [ascending, setAscending] = useState<boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      tabBarLabel: ({ focused, color }) => (
        <Text style={{ color: focused ? '#EB6a7C' : color, fontSize: 10 }}>Orders</Text>
      ),
    });
  }, []);

  const handlePress = () => {
    setAscending(!ascending);
  };

  return (
    <ScrollView>
      <Image className='w-full h-64' source={{ uri: 'https://links.papareact.com/m51' }} />
      <Button onPress={handlePress}>
        {ascending ? 'Showing oldest orders first' : 'Showing most recent orders first'}
      </Button>
    </ScrollView>
  );
};

export default OrderScreen;
