import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

import colors from "../config/colors";

const FunctionList = ({ title, icon, onPress, styles2 }) => {
  return (
    <TouchableHighlight underlayColor={colors.primary} onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.iconContainer, styles2]}>{icon}</View>
        <View style={styles.contactNameContainer}>
          <Text style={styles.contactName}>{title}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default FunctionList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingLeft: 20,
    flexDirection: "row",
    backgroundColor: "white",
  },
  contactNameContainer: {
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  contactName: {
    fontWeight: "700",
    fontSize: 20,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});
