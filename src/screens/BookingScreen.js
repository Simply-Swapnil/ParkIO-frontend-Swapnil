import { View, TouchableOpacity, Text } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import tw from "tailwind-react-native-classnames";
import Button from "../components/Button";
import user from "../../data/UserData";
import parkingspot from "../../data/ParkingSpotsData";

const BookingScreen = (props) => {
  return (
    <View style={tw`mt-6 h-full`}>
      <View style={tw`w-full flex-row`}>
        <View style={tw`p-4 pr-0`}>
          <TouchableOpacity>
            <Icon name="arrow-left" type="material-community" size={40} />
          </TouchableOpacity>
        </View>
        <View style={tw`p-5`}>
          <Text style={tw`text-2xl font-bold`}>Booking Details</Text>
        </View>
      </View>
      <View style={tw`w-full flex-row`}>
        <View
          style={tw`w-1/2 p-3 justify-center border-t border-b border-gray-100`}
        >
          <Text style={tw`text-center text-gray-400 font-semibold text-base`}>
            Arriving at
          </Text>
          <Text style={tw`text-center font-bold text-lg`}>11:00 am</Text>
        </View>
        <View
          style={tw`w-1/2 p-3 justify-center  border-t border-b border-gray-100`}
        >
          <Text style={tw`text-center text-gray-400 font-semibold text-base`}>
            Leaving at
          </Text>
          <Text style={tw`text-center font-bold text-lg`}>12:00 am</Text>
        </View>
      </View>
      <View style={tw`w-full mt-4 pl-7 pr-7`}>
        <Text style={tw`text-xl mb-4 font-semibold`}>Vehicle Details</Text>
        <View style={tw`flex-row pl-1 pr-4 justify-between`}>
          <Text style={tw`text-gray-400`}>Name</Text>
          <Text style={tw`mb-4`}>{user.vehicles[0].name}</Text>
        </View>
        <View style={tw`flex-row pl-1 pr-4 justify-between`}>
          <Text style={tw`text-gray-400`}>Type</Text>
          <Text style={tw`mb-4`}>{user.vehicles[0].type}</Text>
        </View>
        <View style={tw`flex-row pl-1 pr-4 justify-between`}>
          <Text style={tw`text-gray-400`}>Registration</Text>
          <Text style={tw`mb-4`}>{user.vehicles[0].regno}</Text>
        </View>
      </View>
      <View style={tw`bg-yellow-300 p-4 justify-center`}>
        <Text style={tw`text-2xl font-bold`}>AMOUNT TO BE PAID ₹{parkingspot.rate}</Text>
      </View>

      <Button title="Pay and Reserve" />
    </View>
  );
};

export default BookingScreen;
