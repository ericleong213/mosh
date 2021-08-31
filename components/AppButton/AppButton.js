import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

import colors from "../config/colors";

const AppButton = (props) => {
  return (
    <View style={[styles.container, { backgroundColor: props.color }]}>
      <Button title={props.title} color="white" />
    </View>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 50,
    borderRadius: 25,
    marginVertical: 12,
  },
});
