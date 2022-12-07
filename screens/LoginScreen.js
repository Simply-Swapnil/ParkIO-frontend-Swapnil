import { SafeAreaView, View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Button from "../components/Button";
import InputText from "../components/InputText";

const LoginScreen = () => {
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
        <Button title='Login'/>
      </View>
      <View style={tw`self-center flex-row`}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={tw`underline`}>Sign up here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
