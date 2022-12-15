import { View, Text, TextInput } from 'react-native';
import React from 'react';

export type SearchProps = {
  handleSearch: (searchText: string) => void;
};

const SearchBar = ({ handleSearch }: SearchProps) => {
  return (
    <View className='bg-white pt-5 pb-0 px-10'>
      <TextInput
        onChangeText={handleSearch}
        className='border-b border-gray-300 text-lg'
        placeholder='Type customer name'
      />
    </View>
  );
};

export default SearchBar;
