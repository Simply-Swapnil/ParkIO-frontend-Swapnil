import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const BottomButton = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => navigation.navigate(props.path) }>
        <View style={tw`w-11/12 pt-4 pb-4 mt-5 mb-5 ml-4 bg-black rounded-lg`}>
          <Text style={tw`text-center text-base text-white font-bold`}>
            {props.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingBottom: 25,
    justifyContent: 'flex-end',
  }
});

export default BottomButton;
