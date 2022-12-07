import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from '@rneui/themed';

const Navbar = () => {
  return (
    <View style={[styles.container, tw`flex-row justify-evenly pt-4 pb-4 bg-white border-t`]}>
      <View>
        <Icon name="home-outline" type="material-community" size={30} />
        <Text>Home</Text>
      </View>
      <View>
        <Icon name="ticket-confirmation-outline" type="material-community" size={30} />   
        <Text>Booking</Text>
      </View>
      <View>
        <Icon name="account-outline" type="material-community" size={30} />
        <Text>Profile</Text>
      </View>
    </View>
  );
}

export default Navbar

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    position: "absolute",
    bottom: 24,
  },
});
