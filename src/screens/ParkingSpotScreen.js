import { View, Text, Image, Touchable, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames";
import Navbar from "../components/Navbar";
import { Button } from '@rneui/themed';
import SlotsCarousel from '../components/SlotsCarousel';
import { Icon } from '@rneui/themed';
import data from '../../data/ParkingSpotsData';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const ParkingSpotScreen = ({ navigation }) => {
  return (
    <View style={tw`mt-6 h-full`}>
      <View style={tw`w-full flex-row`}>
        <View style={tw`p-4 pr-0`}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" type="material-community" size={40} />
          </TouchableOpacity>
        </View>
        <View style={tw`p-5 pr-0 mr-8`}>
          <Text style={tw`text-2xl font-bold`}>{data.name}</Text>
          <Text style={tw`text-lg mb-3 font-medium text-gray-400`}>
            {data.shortaddress}
          </Text>
          <View style={tw`flex-row mb-1`}>
            <Icon
              name="parking"
              style={tw`mr-1`}
              type="font-awesome-5"
              size={16}
            />
            <Text>{data.spotsAvailible} spots availaible</Text>
          </View>
          <View style={tw`flex-row`}>
            <Icon
              name="location-arrow"
              style={tw`mr-1`}
              type="font-awesome-5"
              size={16}
            />
            <Text>{data.distance} mtrs away</Text>
          </View>
        </View>
        <View style={tw`justify-center`}>
          <Image
            source={{ uri: data.img }}
            style={tw`w-24 h-24`}
          />
        </View>
      </View>
      <View style={tw`w-full flex-row`}>
        <TouchableOpacity style={tw`flex-row justify-center p-0 m-0 w-1/2 border-t border-gray-100`}>
          <View style={tw`p-3 border-t border-b border-gray-100 flex-row`}>
            <Icon name="call" type="ionicons" size={24} />
            <Text style={tw`text-base ml-2`}>Call</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={tw`justify-center flex-row p-0 m-0 w-1/2 border-t border-gray-100`}>
          <View style={tw`p-3 flex-row`}>
            <Icon name="directions" type="font-awesome-5" size={24} />
            <Text style={tw`text-base ml-2`}>Directions</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={tw`h-4 bg-gray-200`} />
      <View style={tw`w-full mt-4 mb-3 pl-7 pr-7`}>
        <Text style={tw`text-xl mb-3 font-semibold`}>Details</Text>
        <Text style={tw`text-gray-400`}>ADDRESS</Text>
        <Text style={tw`mb-4`}>{data.address}</Text>
        <Text style={tw`text-gray-400`}>OPERATION</Text>
        <Text style={tw`mb-4`}>{data.timing}</Text>
        <Text style={tw`text-gray-400`}>RATE</Text>
        <Text style={tw`mb-4`}>{data.rate} ₹/hour</Text>
      </View>
      <View style={tw`h-4 bg-gray-200`} />
      <View style={tw`w-full mt-4`}>
        <Text style={tw`pl-7 mb-3 text-xl font-semibold`}>
          Timing slots availaible
        </Text>
        <SlotsCarousel slots={data.slotsAvailible} />
      </View>
      <Button buttonStyle={{padding: 16, borderRadius: 8, margin: 20, marginTop: 40}} color='#000' title="Choose slot" titleStyle={{color:'white', textAlign:'center'}} onPress={() => navigation.navigate('booking')}/>
      {/* On press navigate to booking screen with selected time slot as prop */}
    </View>
  );
}

export default ParkingSpotScreen;