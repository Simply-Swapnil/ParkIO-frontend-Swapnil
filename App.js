import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { store } from "./store";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ParkingSpotScreen from "./src/screens/ParkingSpotScreen";
import BookingScreen from "./src/screens/BookingScreen";

// const Stack = createNativeStackNavigator();

// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Login"
//           component={LoginScreen}
//         />
//         <Stack.Screen 
//           name="Register" 
//           component={RegisterScreen}
//         />
//         <Stack.Screen 
//           name="Home" 
//           component={HomeScreen}
//         />
//         <Stack.Screen 
//           name="ParkingSpot" 
//           component={ParkingSpotScreen}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

export default function App() {
  return (
    <Provider store={store}>
      {/* <NavigationContainer> */}
        <BookingScreen />
      {/* </NavigationContainer> */}
    </Provider>
  );
}
