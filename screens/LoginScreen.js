import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Formik } from "formik";

import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton/AppButton";
import Screen from "../components/Screen";

export default function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              placeholder="Email"
              icon="email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
              textContextType="emailAddress"
            />
            <AppTextInput
              placeholder="Password"
              icon="lock"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(text) => setPassword(text)}
              textContextType="password"
              secureTextEntry
            />
            <AppButton
              title="login"
              onPress={() => console.log("login is pressed!", email, password)}
            />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
