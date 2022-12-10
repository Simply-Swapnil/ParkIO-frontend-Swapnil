import { SafeAreaView, View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Button } from '@rneui/themed';
import InputText from "../components/InputText";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const LoginScreen = ({ navigation }) => {
  return (
    <View style={tw`mt-6 p-10 h-full`}>
      <View style={tw`items-center mt-5 mb-20`}>
        <Text style={tw`text-3xl font-semibold`}>Login</Text>
      </View>
      <View>
        <Text>USERNAME</Text>
        <InputText secure={false}/>
        <Text>PASSWORD</Text>
        <InputText secure={true}/>
        <Button buttonStyle={{width: 290, padding: 16, borderRadius: 8, marginLeft:13, marginTop: 15, marginBottom: 15}} color='#000' title="Login" titleStyle={{color:'white', textAlign:'center'}} onPress={() => navigation.navigate('home')}/>
      </View>
      <View style={tw`self-center flex-row`}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('register')}>
          <Text style={tw`underline`}>Sign up here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
