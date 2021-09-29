import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import AppTextInput from "./components/AppTextInput";
import Screen from "./components/Screen";

export default function App() {
  return (
    <Screen>
      <AppTextInput placeholder="Username" icon="email" />
    </Screen>
  );
}
