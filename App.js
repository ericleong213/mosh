import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

// npm install @react-native-community/hooks first
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';


export default function App() {

  // Object destructuring, landscape is the property inside the object
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: "dodgerblue",
        width: '100%',

        // Change the height as the orientation change
        height: landscape ? "100%" : "30%",

      }}>
        <Text>Mosh is with us, thanks Mosh</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
