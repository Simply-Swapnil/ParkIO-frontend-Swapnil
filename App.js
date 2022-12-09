import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import { store } from "./store";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ParkingSpotScreen from "./src/screens/ParkingSpotScreen";
import BookingScreen from "./src/screens/BookingScreen";


export default function App() {
  return (
      <Provider store={store}>
        <ParkingSpotScreen />
      </Provider>
  );
}
