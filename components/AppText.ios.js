import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AppText = (props) => {
  return <Text style={styles.txt}> {props.children}</Text>;
};

const styles = StyleSheet.create({
  txt: {
    color: "green",
    fontSize: 20,
    fontFamily: "Avenir",
  },
});

export default AppText;
