import React from "react";
import { StyleSheet, View } from "react-native";

import ViewImageScreen from "./screens/ViewImageScreen";
import MessageScreen from "./screens/MessageScreen";

export default function App() {
  return <MessageScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
