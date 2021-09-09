import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import colors from "../config/colors";

const ListItem = ({ title, subTitle, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.contactImage} />
      <View style={styles.contactBox}>
        <View style={{ flexDirection: "column", paddingHorizontal: 15 }}>
          <Text style={styles.contactName}>{title}</Text>
          <Text style={styles.contactListNo}>{subTitle}</Text>
        </View>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingLeft: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: "row",
  },
  contactName: {
    fontWeight: "bold",
  },
  contactImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
