import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

const AppText = (props) => {
  return <Text style={styles.txt}> {props.children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  txt: {
    color: "red",
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roberto" : "Avenir",
  },
});
