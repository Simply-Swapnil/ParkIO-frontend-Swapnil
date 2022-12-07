import { SafeAreaView, View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Button from "../components/Button";
import InputText from "../components/InputText";

const RegisterScreen = () => {
  return (
    <View style={tw`mt-6 p-10 h-full`}>
      <View style={tw`items-center mt-5 mb-10`}>
        <Text style={tw`text-3xl font-semibold`}>Register</Text>
      </View>
      <View>
        <Text>NAME</Text>
        <InputText secure={false}/>
        <Text>VEHICLE</Text>
        <InputText secure={false}/>
        <Text>CONTACT</Text>
        <InputText secure={false}/>
        <Text>USERNAME</Text>
        <InputText secure={false}/>
        <Text>PASSWORD</Text>
        <InputText secure={true}/>
        <Button title='Register'/>
      </View>
      <View style={tw`self-center flex-row`}>
        <Text>Have an account already? </Text>
        <TouchableOpacity>
          <Text style={tw`underline`}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
