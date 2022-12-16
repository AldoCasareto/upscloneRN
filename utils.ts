import { Order, OrderResponse } from './typings';

export const getOrders = (data: any): Order[] => {
  if (!data) return [];

  return data.getOrders.map(({ value }: OrderResponse) => ({
    carrier: value.carrier,
    createdAt: value.createdAt,
    shippingCost: value.shippingCost,
    trackingId: value.trackingId,
    trackingItems: value.trackingItems,
    Address: value.Address,
    City: value.City,
    Lat: value.Lat,
    Lng: value.Lng,
  }));
};
