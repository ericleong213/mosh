import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ScrollViewBase,
  ScrollView,
} from "react-native";

import Screen from "./Screen";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  // use useRef() hook to get instance of scrollView component, in order to call scrollToEnd() method
  const scrollView = useRef();

  return (
    // wrap this with a View component in order make it shrink to its own size, coz ScrollView component will have flex: 1 by default.
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <Screen style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </Screen>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
