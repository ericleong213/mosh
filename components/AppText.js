import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

const AppText = (props) => {
  return <Text style={styles.txt}> {props.children}</Text>;
};

const styles = StyleSheet.create({
  txt: {
    // use spread operator before, because Platform.select method return an object, it will return corresponding object according to operation system
    ...Platform.select({
      ios: {
        color: "green",
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        color: "blue",
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default AppText;
