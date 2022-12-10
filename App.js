import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from "./store";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ParkingSpotScreen from "./src/screens/ParkingSpotScreen";
import BookingScreen from "./src/screens/BookingScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import TicketScreen from "./src/screens/TicketScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login" screenOptions={{headerShown: false}}>
          <Stack.Screen name="login" component={LoginScreen}/>
          <Stack.Screen name="register" component={RegisterScreen} />
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="parkingspot" component={ParkingSpotScreen} />
          <Stack.Screen name="booking" component={BookingScreen} />
          <Stack.Screen name="profile" component={ProfileScreen} />
          <Stack.Screen name="ticket" component={TicketScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
