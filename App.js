import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Button, Imag, FlatList } from "react-native";

import ImageInput from "./components/ImageInput";
import ImageInputList from "./components/ImageInputList";
import Screen from "./components/Screen";

export default function App() {
  const [imageUri, setImageUri] = useState();

  return (
    <ImageInput imageUri={imageUri} onChangeImage={(uri) => setImageUri(uri)} />
  );
}

// export default function App() {
//   const [imageUri, setImageUri] = useState();

//   const selectImage = async () => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync();
//       if (!result.cancelled) setImageUri(result.uri);
//     } catch (error) {
//       console.log("error reading an image", error);
//     }
//   };

//   const requestPermission = async () => {
//     const { granted } = await ImagePicker.requestCameraPermissionsAsync();
//     if (!granted) alert("not permitted");
//   };

//   useEffect(() => {
//     requestPermission();
//   }, []);

//   return (
//     <Screen>
//       <Button title="Select Image" onPress={selectImage} />
//       <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
//     </Screen>
//   );
// }
