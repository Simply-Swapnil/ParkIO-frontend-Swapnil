import { SafeAreaView, View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Button } from '@rneui/themed';
import InputText from "../components/InputText";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { color } from "@rneui/base";



const RegisterScreen = ({ navigation }) => {
  return (
    <View style={tw`mt-6 p-10 h-full`}>
      <View style={tw`items-center mt-5 mb-10`}>
        <Text style={tw`text-3xl font-semibold`}>Register</Text>
      </View>
      <View>
        <Text>NAME</Text>
        <InputText secure={false} />
        <Text>VEHICLE</Text>
        <InputText secure={false} />
        <Text>CONTACT</Text>
        <InputText secure={false} />
        <Text>USERNAME</Text>
        <InputText secure={false} />
        <Text>PASSWORD</Text>
        <InputText secure={true} />
        <Button buttonStyle={{width: 290, padding: 16, borderRadius: 8, marginLeft:13, marginTop: 15, marginBottom: 15}} color='#000' title="Register" titleStyle={{color:'white', textAlign:'center'}} onPress={() => navigation.navigate('home')}/>
      </View>
      <View style={tw`self-center flex-row`}>
        <Text>Have an account already? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>                          
          <Text style={tw`underline`}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
