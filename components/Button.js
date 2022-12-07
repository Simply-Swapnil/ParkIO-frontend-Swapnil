import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames'

const Button = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD">
      <View style={tw`w-full pt-4 pb-4 mt-5 mb-5 bg-black rounded-lg`}>
        <Text style={tw`text-center text-base text-white font-bold`}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
