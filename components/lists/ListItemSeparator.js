import React from "react";
import { View, StyleSheet } from "react-native";

const ListItemSeparator = () => {
  return <View style={styles.separator}></View>;
};

export default ListItemSeparator;

const styles = StyleSheet.create({
  separator: {
    height: 2,
    backgroundColor: "grey",
  },
});
