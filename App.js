import React from "react";
import { View, Text, Platform } from "react-native";


import AppButton from "./components/AppButton";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppButton title="LOGIN" />
    </View>
  );
}
