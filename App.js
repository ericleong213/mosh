import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* use icon library from expo */}
      <MaterialCommunityIcons name="email" size={50} color="dodgerblue" />
    </View>
  );
}
