import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login My Wallet">
          <Stack.Screen name="Login My Wallet" component={Login} />
          <Stack.Screen name="Register My Wallet" component={Register} />
          <Stack.Screen name="Home My Wallet" component={Home} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
