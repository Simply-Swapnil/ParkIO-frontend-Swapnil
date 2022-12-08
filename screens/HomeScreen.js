import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from "tailwind-react-native-classnames";
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';

const HomeScreen = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('url')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
  }, []);

  return (
    <View style={tw`mt-6 h-full bg-red-100`}>
      <Text>HomeScreen</Text>
      <Text>{data[0]}</Text>
      <Navbar />
    </View>
  );
};

export default HomeScreen;