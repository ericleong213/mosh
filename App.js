import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Switch } from "react-native";

import AppTextInput from "./components/AppTextInput";
import AppPicker from "./components/AppPicker";
import Screen from "./components/Screen";
import LoginScreen from "./screens/LoginScreen";
import ListingEditScreen from "./screens/ListingEditScreen";

export default function App() {
  return <ListingEditScreen />;
}
