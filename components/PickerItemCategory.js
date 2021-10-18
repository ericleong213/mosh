import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const screen = Dimensions.get("screen");
const itemWidth = 100;

const PickerItemCategory = ({ label, onPress, icon, color }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.item}>
        <View style={[styles.icon, { backgroundColor: color }]}>
          <MaterialCommunityIcons name={icon} color="black" size={35} />
        </View>
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PickerItemCategory;

const styles = StyleSheet.create({
  item: {
    width: itemWidth,
    height: 135,
    //make the item space around evenly
    margin: (screen.width - itemWidth * 3) / 6,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    backgroundColor: "white",
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});
