import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import ActivityIndicator from "../components/ActivityIndicator";

import Card from "../components/Card";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import useApi from "../hooks/useApi";

// const listings = [
//   {
//     id: 1,
//     title: "Red jacket for sale",
//     price: 100,
//     image: {uri: "https://reactnative.dev/img/tiny_logo.png"},
//     // image: require("../assets/jacket.jpg"),
//   },
//   {
//     id: 2,
//     title: "Couch in great condition",
//     price: 1000,
//     image: {uri: "https://reactnative.dev/img/tiny_logo.png"},
//     // image: require("../assets/couch.jpg"),
//   },
// ];

function ListingsScreen({ navigation }) {
  // const [listings, setListings] = useState([]);
  // const [errors, setErrors] = useState();
  // const [loading, setLoading] = useState(false);

  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);

  // const loadListings = async () => {

  //   setLoading(true);
  //   const response = await listingsApi.getListings();
  //   setLoading(false);

  //   if (!response.ok) return setErrors(true);

  //   setListings(response.data);
  //   setErrors(false);
  // };

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <View>
          <Text>data cannot be retrieved!</Text>
          <Button title="Retry" onPress={loadListings} />
        </View>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.image.url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            // should make an image with lower resolution for faster loading, For this practice , I just use the same file(url). 
            thumbnailUrl={item.image.url}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: "white",
  },
});

export default ListingsScreen;
