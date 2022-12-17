import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamsList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigator/RootNavigator';
import useCustomerOrders from '../hooks/useCustomerOrders';
import OrdersCard from '../components/OrdersCard';
import { Icon } from '@rneui/base';

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

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()} className='absolute right-5 top-5 z-10'>
        <Icon name='closecircle' type='antdesign' />
      </TouchableOpacity>
      <View className='p-8'>
        <Text style={{ color: '#59C1CC' }} className='text-center style-bold text-lg font-bold'>
          {name}
        </Text>
        <Text className='text-center style-bold text-md mb-8'>Deliveries</Text>
        <FlatList
          data={orders}
          keyExtractor={({ Address }) => Address}
          renderItem={({ item: order }) => <OrdersCard order={order} />}
          contentContainerStyle={{ paddingBottom: 150 }}
        />
      </View>
    </View>
  );
};

export default ModalScreen;
