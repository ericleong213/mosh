import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";

const image = require("../assets/chair.jpg");
const logo = require("../assets/logo-red.png");
const windowWidth = Dimensions.get("window").width;

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <Image source={image} resizeMode="stretch" style={styles.image} />
      <View style={styles.closeButton}></View>
      <View style={styles.deletetButton}></View>
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
  logo: {
    top: 30,
    left: windowWidth / 2 - 100 / 2,
    position: "absolute",
  },
  logoImage: {
    top: 150,
    width: 100,
    height: 100,
  },
  image: {
    width: "100%",
    height: "70%",
  },
  closeButton: {
    backgroundColor: "#fc5c65",
    width: 60,
    height: 60,
    position: "absolute",
    top: 20,
    left: 20,
  },
  deletetButton: {
    backgroundColor: "#4ECDC4",
    width: 60,
    height: 60,
    position: "absolute",
    top: 20,
    right: 20,
  },
});
