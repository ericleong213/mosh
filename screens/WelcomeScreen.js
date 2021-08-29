import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import AppButton from "../components/AppButton";

import colors from "../config/colors";

const image = require("../assets/background.jpg");
const logo = require("../assets/logo-red.png");

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.container}
      blurRadius={10}
    >
      <Image style={styles.logoImage} source={logo} resizeMode="cover" />
      <Text style={styles.title}>Sell What You Don't Need</Text>
      <AppButton title="LOGIN" color={colors.primary} />
      <AppButton title="REGISTER" color={colors.secondary} />
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
    top: 160,
    position: "absolute",
    fontWeight: "bold",
    fontSize: 20,
  },
  logoImage: {
    width: 100,
    height: 100,
    top: 50,
    position: "absolute",
  },
  loginButton: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 60,
  },
  registerButton: {
    backgroundColor: colors.secondary,
    width: "100%",
    height: 60,
  },
});
