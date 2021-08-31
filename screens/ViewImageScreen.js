import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const image = require("../assets/chair.jpg");
const windowWidth = Dimensions.get("window").width;

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <Image source={image} resizeMode="stretch" style={styles.image} />
      <MaterialCommunityIcons
        name="close"
        size={30}
        color="white"
        style={styles.closeButton}
      />
      <MaterialCommunityIcons
        name="trash-can-outline"
        size={30}
        color="white"
        style={styles.deleteButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
  },
  title: {
    color: "black",
  },
  image: {
    width: "100%",
    height: "70%",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  deleteButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
});
