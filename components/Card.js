import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";

const Card = ({ title, subTitle, imageUrl, onPress, thumbnailUrl }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image uri={imageUrl} preview={{ uri: thumbnailUrl }} tint="light" style={styles.cardImage} resizeMode="cover" />
        <View style={styles.titleBox}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  titleBox: {
    padding: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  subTitle: {
    color: colors.secondary,
    paddingTop: 10,
  },
});
