import { View, Text } from 'react-native';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import tw from "tailwind-react-native-classnames";
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Button from '../components/BottomButton';

const HomeScreen = () => {
  return (
    <View style={tw`mt-6 h-full`}>
      <Text>HomeScreen</Text>
      <Button title="Parking spot details"/>
      <Navbar />
    </View>
  );
};

export default HomeScreen;