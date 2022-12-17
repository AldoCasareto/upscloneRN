import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Order } from '../typings';
import { Icon } from '@rneui/base';
import MapView, { Marker } from 'react-native-maps';

type Props = {
  order: Order;
  fullWidth?: boolean;
};

const OrdersCard = ({ order }: Props) => {
  return (
    <View className='p-2'>
      <View className='rounded-md shadow-xl p-3' style={{ backgroundColor: '#59C1CC' }}>
        <Icon className=' ml-auto' name='box' type='entypo' color='white' size={50} />
        <Text className='text-white text-center text-xs'>UPS: {order.trackingId}</Text>
        <Text className='text-white text-center font-bold text-lg'>
          Expected Delivery: {order.createdAt}
        </Text>
        <View className='mt-10'>
          <Text className='text-center font-bold text-lg text-white'>Address</Text>
          <Text className='text-center text-lg text-white'>{order.Address}</Text>
          <Text className='text-center text-lg text-white'>
            Shipping Cost: USD {order.shippingCost}
          </Text>
        </View>
        <View className='mt-6'>
          {order.trackingItems.items.map((item) => (
            <View
              className='text-white flex-row justify-between items-center space-y-3'
              key={item.item_id}
            >
              <Text className='text-white'>{item.name}</Text>
              <Text className='text-white'>{item.quantity}</Text>
            </View>
          ))}
        </View>
      </View>
      <MapView
        initialRegion={{
          latitude: order.Lat,
          longitude: order.Lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        style={{ height: 300, width: '100%' }}
      >
        {order.Lat && order.Lng && (
          <Marker
            coordinate={{
              latitude: order.Lat,
              longitude: order.Lng,
            }}
            title='Delivery Location'
            description={order.Address}
            identifier='Destination'
          />
        )}
      </MapView>
    </View>
  );
};

export default OrdersCard;
