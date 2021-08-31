import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";

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
      <View style={styles.contactBox}>
        <Image
          source={require("../assets/mosh.jpg")}
          style={styles.contactImage}
        />
        <View style={{ flexDirection: "column", paddingHorizontal: 15 }}>
          <Text style={styles.contactName}>Mosh Hamedani</Text>
          <Text style={styles.contactListNo}>5 Listings</Text>
        </View>
      </View>
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
  contactBox: {
    paddingVertical: 20,
    paddingLeft: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: "row",
  },
  contactName: {
    fontWeight: "bold",
  },
  contactListNo: {},
  contactImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
