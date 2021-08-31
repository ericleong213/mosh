import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

export default function ListingDetailsScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/jacket.jpg")}
        resizeMode="cover"
        style={styles.topImage}
      />
      <View style={styles.titleBox}>
        <Text style={styles.title}>Red jacket for sale</Text>
        <Text style={styles.price}>$ 100</Text>
      </View>
      <ListItem/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topImage: {
    width: "100%",
    height: 250,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    color: colors.secondary,
    paddingTop: 10,
  },
  titleBox: {
    paddingVertical: 20,
    paddingLeft: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

});
