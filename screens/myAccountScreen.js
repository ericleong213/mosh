import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function MyAccountScreen() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="close"
        size={30}
        color="white"
        style={styles.closeButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "center",
  },
});
