import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../../config/colors";

const AppButton = ({ title, color = "primary", onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={{ color: "white" }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderRadius: 25,
    marginVertical: 10,
  },
});
