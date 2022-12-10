import { View, Text } from 'react-native';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import tw from "tailwind-react-native-classnames";
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import { Button } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={tw`mt-6 h-full`}>
      <Text>HomeScreen</Text>
      <Button buttonStyle={{width: 290, padding: 16, borderRadius: 8, marginLeft:13, marginTop: 15, marginBottom: 15}} color='#000' title="Parking hub details" titleStyle={{color:'white', textAlign:'center'}} onPress={() => navigation.navigate('parkingspot')}/>
      <Navbar />
    </View>
  );
};

export default HomeScreen;