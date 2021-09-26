import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListItem from "../components/ListItem";
import FunctionList from "../components/FunctionList";
import ListItemSeparator from "../components/ListItemSeparator";

export default function MyAccountScreen() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="close" size={30} color="white" />
      <ListItem
        title="Mosh Hamedani"
        subTitle="programmingwithmosh@gmail.com"
        image={require("../assets/mosh.jpg")}
        onPress={() => console.log("Message selected")}
        styles2={{
          backgroundColor: "white",
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
        }}
      />
      <ListItemSeparator />

      <FunctionList
        title="My Listings"
        icon={<MaterialCommunityIcons name="email" size={20} color="white" />}
        onPress={() => console.log("email selected")}
        styles2={{ backgroundColor: "red" }}
      />
      <ListItemSeparator />
      <FunctionList
        title="My Messages"
        icon={
          <MaterialCommunityIcons
            name="format-list-bulleted"
            size={20}
            color="white"
          />
        }
        onPress={() => console.log("email selected")}
        styles2={{ backgroundColor: "green" }}
      />
      <ListItemSeparator />
      <FunctionList
        title="Log Out"
        icon={<MaterialCommunityIcons name="logout" size={20} color="white" />}
        onPress={() => console.log("email selected")}
        styles2={{ backgroundColor: "yellow" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    backgroundColor: "grey",
  },
});
