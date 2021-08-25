import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AppText = (props) => {
  return <Text style={styles.txt}> {props.children}</Text>;
};

const styles = StyleSheet.create({
  txt: {
    color: "blue",
    fontSize: 18,
    fontFamily: "Roboto",
  },
});
export default AppText;
