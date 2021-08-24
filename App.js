import React from "react";
import { View, Text } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import ViewImageScreen from "./screens/ViewImageScreen";
import AppText from "./components/AppText";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontFamily: "Avenir-Black",
          fontWeight: "500",
        }}
      >
        <AppText>App text children props is used</AppText>
      </Text>
    </View>
  );
}
