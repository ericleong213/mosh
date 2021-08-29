import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import colors from "../config/colors";

const Card = (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.cardImage} resizeMode="cover" />
      <View style={styles.titleBox}>
        <Text style={styles.title}>{props.subTitle}</Text>
        <Text style={styles.price}>$ 100</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    marginVertical: 30,
    borderRadius: 30,
    display: "flex",
  },
  cardImage: {
    width: "100%",
    height: "70%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  titleBox: {
    backgroundColor: "white",
    width: "100%",
    height: "30%",
    paddingVertical: 15,
    paddingLeft: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  price: {
    color: colors.secondary,
    paddingTop: 10,
  },
});
