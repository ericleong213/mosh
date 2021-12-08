import React from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AuthNavigator from "./navigation/AuthNavigator";
import navigationTheme from "./navigation/navigationTheme";
import AppNavigator from "./navigation/AppNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";

import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
