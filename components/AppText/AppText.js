import React from "react";
import { View, Text } from "react-native";

// styles are organized in separte file
import styles from "./Styles";

const AppText = (props) => {
  return <Text style={styles.txt}> {props.children}</Text>;
};


export default AppText;
