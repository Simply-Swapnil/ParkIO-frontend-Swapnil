import { View, Text } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames";
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';

const HomeScreen = () => {
  return (
    <View style={tw`mt-6 h-full bg-red-100`}>
      <Text>HomeScreen</Text>
      <Navbar />
    </View>
  );
};

export default HomeScreen;