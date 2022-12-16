import { useEffect, useState } from 'react';
import { Order } from '../typings';
import { useQuery } from '@apollo/client';
import { GET_ORDERS } from '../graphql/queries';
import { getOrders } from '../utils';

const useCustomerOrders = (userId: string) => {
  const { loading, error, data } = useQuery(GET_ORDERS);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const orders = getOrders(data);

    // Filter the orders to only include orders for the given user
    const customerOrders = orders.filter((order) => order.trackingItems.customer_id === userId);

    setOrders(customerOrders);
  }, [data, userId]);

  return { loading, error, orders };
};

export default useCustomerOrders;
