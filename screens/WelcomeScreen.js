import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";

import AppButton from "../components/AppButton/AppButton.android";
import colors from "../config/colors";
import routes from "../navigation/routes";

const image = require("../assets/background.jpg");
const logo = require("../assets/logo-red.png");

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.container}
      blurRadius={10}
    >
      <Image style={styles.logoImage} source={logo} resizeMode="cover" />
      <Text style={styles.title}>Sell What You Don't Need</Text>
      <View style={styles.buttonContainer}>
        <AppButton
          title="LOGIN"
          color="primary"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title="REGISTER"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
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
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 25,
    marginVertical: 10,
  },
});
