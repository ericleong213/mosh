import React from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AuthNavigator from "./navigation/AuthNavigator";
import navigationTheme from "./navigation/navigationTheme";
import AppNavigator from "./navigation/AppNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";

import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

export default function App() {

  const storage = async () => {

  
  try {
  await AsyncStorage.setItem('person', JSON.stringify({id: 1}) )
  const value = await AsyncStorage.getItem('person')
  const person = JSON.parse(value)
  console.log(person)
    
  } catch (error) {
    console.log(error)
  }


  }

  storage()

  return (
    <View style={{ flex:1, backgroundColor: "black"}}></View>
  )
    
  // <NavigationContainer theme={navigationTheme}>
  //   <AppNavigator />
  // </NavigationContainer>
}
