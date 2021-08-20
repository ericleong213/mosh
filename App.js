import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


export default function App() {



  return (
      <View style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row", // make horizontal as main axis, vertical as secondary axis
        justifyContent: "center", //along main axis
        alignItems: "center" //along secondary axis
      }}>
        <View style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 300,
        }}></View>
        <View style={{
          backgroundColor: "gold",
          width: 100,
          height: 200,
        }}></View>
        <View style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}></View>

      </View>
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
