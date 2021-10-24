import React, { useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

import Screen from "./Screen";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris }) {
  const [imageUri, setImageUri] = useState();
  const [data, setData] = [imageUris];
  const onAddImage = async (uri) => {
    setData([...data, "3"]);
  };

  return (
    <Screen>
      <FlatList
        data={data}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <ImageInput imageUri={item} onChangeImage={onAddImage} />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ImageInputList;
