import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { RouteProp, ParamListBase } from '@react-navigation/native';
import { TabStackParamsList } from '../navigator/TabNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type Props = {
  navigation: BottomTabNavigationProp<TabStackParamsList, 'Customers'>;
  route: RouteProp<ParamListBase, string>;
};

const CustomerScreen = ({ navigation, route }: Props) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: '#59C1CC' }}>
      <Image source={{ uri: 'https://links.papareact.com/3jc' }} className='w-full h-64' />
    </ScrollView>
  );
};

export default CustomerScreen;
