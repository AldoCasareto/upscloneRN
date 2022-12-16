import { View, Text, TextInput } from 'react-native';
import React from 'react';

export type SearchProps = {
  handleSearch: (searchText: string) => void;
};

const SearchBar = ({ handleSearch }: SearchProps) => {
  return (
    <View className='bg-white pt-5 p-5 px-10'>
      <View className='py-4 px-12'>
        <TextInput
          onChangeText={handleSearch}
          className='border-b border-gray-300 text-lg'
          placeholder='Type customer name'
        />
      </View>
    </View>
  );
};

export default SearchBar;
