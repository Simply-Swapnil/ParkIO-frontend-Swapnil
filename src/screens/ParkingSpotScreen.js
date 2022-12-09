import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames";
import Navbar from "../components/Navbar";
import Button from '../components/Button';
import SlotsCarousel from '../components/SlotsCarousel';
import { Icon } from '@rneui/themed';
import data from '../../data/ParkingSpotsData';


const ParkingSpotScreen = ( {navigation} ) => {
  return (
    <View style={tw`mt-6 h-full`}>
      <View style={tw`w-full flex-row`}>
        <View style={tw`p-4 pr-0`}>
          <TouchableOpacity>
          <Icon name="arrow-left" type="material-community" size={40} />
          </TouchableOpacity>
        </View>
        <View style={tw`p-5`}>
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
      </View>
      <View style={tw`w-full flex-row`}>
        <View style={tw`w-1/2 p-3 justify-center border-t border-b border-gray-100 flex-row`}>
          <Icon name="call" type="ionicons" size={24}/>
          <Text style={tw`text-base ml-2`}>Call</Text>
        </View>
        <View style={tw`w-1/2 p-3 justify-center  border-t border-b border-gray-100 flex-row`}>
          <Icon name="directions" type="font-awesome-5" size={24}/>
          <Text style={tw`text-base ml-2`}>Directions</Text>
        </View>
      </View>
      <View style={tw`w-full mt-3 pl-7 pr-7`}>
        <Text style={tw`text-xl mb-3 font-semibold`}>Details</Text> 
        <Text style={tw`text-gray-400`}>ADDRESS</Text> 
        <Text style={tw`mb-4`}>{data.address}</Text> 
        <Text style={tw`text-gray-400`}>OPERATION</Text> 
        <Text style={tw`mb-4`}>{data.timing}</Text> 
        <Text style={tw`text-gray-400`}>RATE</Text>
        <Text style={tw`mb-4`}>{data.rate} ₹/hour</Text> 
      </View>
      <View style={tw`w-full mt-2`}>
        <Text style={tw`pl-7 mb-3 text-xl font-semibold`}>Parking slots availaible</Text>
        <SlotsCarousel slots={data.slotsAvailible}/>
      </View>
      <Button title="Pick spot" />      
      {/* On press navigate to booking screen with selected time slot as prop */}
      <Navbar />
    </View>
  );
}

export default ParkingSpotScreen;