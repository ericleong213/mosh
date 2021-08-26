import React from "react";
import { View, Text, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// create js file name with .ios and . android extension, expo will automatically detect the right file with corresponding operation system
import AppText from "./components/AppText/AppText";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name="email" size={50} color="dodgerblue" />
      <AppText>Platform select method is used</AppText>
    </View>
  );
}
