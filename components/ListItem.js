import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import colors from "../config/colors";

const ListItem = ({ title, subTitle, image }) => {
  return (
    <View style={styles.container}>
        <Image
        source={require("../assets/mosh.jpg")}
        style={styles.contactImage}
        />
        <View style={styles.contactBox}>
            <View style={{ flexDirection: "column", paddingHorizontal: 15 }}>
                <Text style={styles.contactName}>Mosh Hamedani</Text>
                <Text style={styles.contactListNo}>5 Listings</Text>
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
      contactListNo: {},
      contactImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
      },
});
