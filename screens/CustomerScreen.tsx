import { View, Text, SafeAreaView, ScrollView, Image, TextInput, FlatList } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { RouteProp, ParamListBase } from '@react-navigation/native';
import { TabStackParamsList } from '../navigator/TabNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import SearchBar from '../components/SearchBar';
import { GET_CUSTOMERS } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import CustomerCard from '../components/CustomerCard';
import { CustomerList, CustomerResponse } from '../typings';

export type CustomerScreenNavigationProp = {
  navigation: BottomTabNavigationProp<TabStackParamsList, 'Customers'>;
  route: RouteProp<ParamListBase, string>;
};

const CustomerScreen = ({ navigation, route }: CustomerScreenNavigationProp) => {
  const [searchInput, setSearchInput] = useState<string>('');

  const { data, loading, error } = useQuery(GET_CUSTOMERS);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleSearch = (value: React.SetStateAction<string>) => {
    setSearchInput(value);
  };

  if (!data) return;
  return (
    <ScrollView style={{ backgroundColor: '#59C1CC' }}>
      <Image source={{ uri: 'https://links.papareact.com/3jc' }} className='w-full h-64' />
      <SearchBar handleSearch={handleSearch} />
      {data?.getCustomers
        .filter((customer: CustomerList) => customer.value.name.includes(searchInput))
        .map(({ name: ID, value: { email, name } }: CustomerResponse) => (
          <CustomerCard key={ID} email={email} name={name} userId={ID} />
        ))}
    </ScrollView>
  );
};

export default CustomerScreen;
