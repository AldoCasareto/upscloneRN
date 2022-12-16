import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Card, Icon } from '@rneui/themed';
import useCustomerOrders from '../hooks/useCustomerOrders';
import { useNavigation } from '@react-navigation/native';
import { CustomerScreenNavigationProp } from '../screens/CustomerScreen';

type CustomerProps = {
  email: string;
  name: string;
  userId: string;
};

const CustomerCard = ({ email, name, userId }: CustomerProps) => {
  const { loading, error, orders } = useCustomerOrders(userId);

  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CustomerModal', { name, userId })}
      activeOpacity={0.75}
    >
      <View className='m-3 bg-white rounded-md'>
        <View className='flex-row justify-between p-4'>
          <View>
            <Text className='text-xl font-bold'>{name}</Text>
            <Text style={{ color: '#59C1CC' }}>ID: {userId}</Text>
            <Text className='mt-10'>{email}</Text>
          </View>
          <View className='flex-row items-center justify-end'>
            <Text style={{ color: '#59C1CC' }}>{loading ? 'loading...' : orders.length} x </Text>
            <Icon className='mb-5 ml-auto' name='box' type='entypo' color='#59C1CC' size={50} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomerCard;
