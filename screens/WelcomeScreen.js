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

const image = require("../assets/background.jpg");
const logo = require("../assets/logo-red.png");
const windowWidth = Dimensions.get("window").width;

export default function WelcomeScreen() {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
      <Image style={styles.logoImage} source={logo} resizeMode="cover" />
      <Text style={styles.title}>Sell What You Don't Need</Text>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    color: "black",
    top: 150,
    position: "absolute",
  },
  logoImage: {
    width: 100,
    height: 100,
    top: 50,
    position: "absolute",
  },
  loginButton: {
    backgroundColor: "#fc5c65",
    width: "100%",
    height: 60,
  },
  registerButton: {
    backgroundColor: "#4ECDC4",
    width: "100%",
    height: 60,
  },
});
