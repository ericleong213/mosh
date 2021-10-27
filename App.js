import React, { useEffect, useState } from "react";
import { StyleSheet, Text} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Screen from "./components/Screen";


const Tweets =() => {
  <Screen>
    <Text>Tweets</Text>
  </Screen>
};

const TweetsDetails = () => {
  <Screen>
    <Text>Tweet Details</Text>
  </Screen>
}

const Stack = createStackNavigator();
const StackNavigator = () => {
  <Stack.Navigator initialRouteName="Tweets">
    <Stack.Screen 
    name="Tweets"
    component={Tweets}
    />
    <Stack.Screen 
    name="TweetsDetails"
    component={TweetsDetails}
    />
  </Stack.Navigator>
}

export default function App() {
  

  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}
