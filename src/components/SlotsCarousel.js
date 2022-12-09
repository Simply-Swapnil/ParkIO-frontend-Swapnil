import { View, Text, TouchableHighlight, Pressable } from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";

const Slot = (props) => {
  return (
      <View style={tw`w-1/4 p-3 border rounded-md`}>
        <Text style={tw`text-center`}>{props.slot.startTime} am</Text>
        <Text style={tw`text-center`}>to</Text>
        <Text style={tw`text-center`}>{props.slot.endTime} am</Text>
      </View>
  );
};

const SlotsCarousel = (props) => {
  const slots = props.slots;
  return (
    <View style={tw`w-full mb-2 flex-row justify-evenly`}>
      {slots.map((slot, index) => (
        <Slot key={index} slot={slot} />
      ))}
    </View>
  );
};

export default SlotsCarousel;
