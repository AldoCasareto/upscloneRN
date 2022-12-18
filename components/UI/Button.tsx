import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
};

const Button = ({ children, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      className='bg-pink m-3 py-2 px-5 bg-pink-300 rounded-md'
      onPress={onPress}
    >
      <Text className='color-gray text-center '>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
