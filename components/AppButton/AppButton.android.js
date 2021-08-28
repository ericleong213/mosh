import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

import colors from "../../config/colors";

const AppButton = (props) => {
  return (
    <View style={styles.container}>
      <Button title={props.title} color={colors.primary} />
    </View>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderRadius: 25,
  },
});
