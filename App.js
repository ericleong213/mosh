import React, { useEffect } from "react";
import { StyleSheet, Text, TextInput, View, Switch } from "react-native";

import Screen from "./components/Screen";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync();
    if (!result.granted) alert("You need to enable access permission");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <Screen>
      <Text>hi23</Text>
    </Screen>
  );
}
