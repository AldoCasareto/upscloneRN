import { useEffect, useState } from 'react';
import { GET_ORDERS } from '../graphql/queries';
import { Order } from '../typings';
import { getOrders } from '../utils';
import { useQuery } from '@apollo/client';

const useOrders = () => {
  const { loading, error, data } = useQuery(GET_ORDERS);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchedOrders = getOrders(data);
    setOrders(fetchedOrders);
  }, [data, loading, error]);

  return { loading, error, orders };
};

export default useOrders;
