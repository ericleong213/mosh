import React from "react";
import { StyleSheet, View } from "react-native";

import MyAccountScreen from "./screens/myAccountScreen";
import Screen from "./components/Screen";
import Icon from "./components/Icon";

export default function App() {
  return (
    <Screen>
      <Icon name="email" size={100} backgroundColor="red" iconColor="white" />
    </Screen>
  );
}
