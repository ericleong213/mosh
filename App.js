import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Button, Imag, FlatList } from "react-native";

import ImageInput from "./components/ImageInput";
import ImageInputList from "./components/ImageInputList";
import Screen from "./components/Screen";

export default function App() {
  const [imageUris, setImageUris] = useState([]);
  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };
  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri != uri));
  };

  return (
    <ImageInputList
      imageUris={imageUris}
      onAddImage={handleAdd}
      onRemoveImage={handleRemove}
    />
  );
}
