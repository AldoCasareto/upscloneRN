import { View, Text, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { RouteProp, ParamListBase } from '@react-navigation/native';
import { TabStackParamsList } from '../navigator/TabNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import SearchBar from '../components/SearchBar';

type Props = {
  navigation: BottomTabNavigationProp<TabStackParamsList, 'Customers'>;
  route: RouteProp<ParamListBase, string>;
};

const CustomerScreen = ({ navigation, route }: Props) => {
  const [searchInput, setSearchInput] = useState('');
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleSearch = (value: React.SetStateAction<string>) => {
    console.log(`value = `, value);
    setSearchInput(value);
  };

  return (
    <ScrollView style={{ backgroundColor: '#59C1CC' }}>
      <Image source={{ uri: 'https://links.papareact.com/3jc' }} className='w-full h-64' />
      <SearchBar handleSearch={handleSearch} />
    </ScrollView>
  );
};

export default CustomerScreen;
