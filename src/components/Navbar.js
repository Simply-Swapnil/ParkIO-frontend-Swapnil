import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Navbar = ({ navigation }) => {
  return (
    <View
      style={[styles.container,tw`flex-row justify-evenly pt-3 pb-3 bg-gray-200`]}>
      <TouchableOpacity>
        <View>
          <Icon name="home-outline" type="material-community" size={30} />
          <Text>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <Icon name="ticket-confirmation-outline" type="material-community" size={30}/>
          <Text>Booking</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <Icon name="account-outline" type="material-community" size={30} />
          <Text>Profile</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Navbar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    position: "absolute",
    bottom: 24,
  },
});
