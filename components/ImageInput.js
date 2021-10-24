import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import Icon from "./Icon";
import Screen from "./Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("not permitted");
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "are you sure you want to delete this image", [
        { text: "yes", onPress: () => onChangeImage(null) },
        { text: "no" },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("error reading an image", error);
    }
  };

  return (
    <Screen>
      <TouchableOpacity onPress={handlePress} style={styles.container}>
        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            style={{ width: 120, height: 120 }}
          />
        )}
        {!imageUri && (
          <MaterialCommunityIcons name={"camera"} color={"black"} size={50} />
        )}
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    width: 120,
    height: 120,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default ImageInput;
