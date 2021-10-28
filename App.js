import React from "react";
import { Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import Screen from "./components/Screen";

//need to add return () to wrap the component such as Tweets, TweetsDetails and StackNavigator. This is not necessary in Mosh course. This problem may be caused by different version.

//navigation parameter only available in the Screen component but not its child component, need to use useNavigation() or pass the props one by one, I prefer the first method.
const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="click"
      onPress={() => navigation.navigate("TweetsDetails", { id: 1 })}
    />
  );
};

const Tweets = ({ navigation }) => {
  return (
    <Screen>
      <Text>Tweets</Text>
      <Link />
    </Screen>
  );
};

const TweetsDetails = ({ route }) => {
  return (
    <Screen>
      <Text>Tweet Details{route.params.id}</Text>
    </Screen>
  );
};

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tweets"
      screenOptions={{
        headerStyle: { backgroundColor: "slateblue" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Tweets"
        component={Tweets}
        options={{
          headerStyle: { backgroundColor: "tomato" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="TweetsDetails"
        component={TweetsDetails}
        options={({ route }) => ({ title: route.params.id })}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
