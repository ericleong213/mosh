import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import PickerItemCategory from "../components/PickerItemCategory";
import DoneAnimation from "../components/DoneAnimation";
import ProgressIndicator from "../components/ProgressIndicator";

import listingsApi from "../api/listings";

import {
  AppFormField,
  SubmitButton,
  AppForm,
  AppFormPicker,
} from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";

// validation with Yup , need to review with mosh's source code
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().min(1).max(10000).label("Price"),
  category: Yup.string().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const sampleItems = [
  { label: "Furniture", icon: "floor-lamp", color: "#fc5c65" },
  { label: "Cars", icon: "car", color: "#fd9644" },
  { label: "Cameras", icon: "camera", color: "#fed330" },
  { label: "Games", icon: "cards", color: "#26de81" },
  { label: "Clothing", icon: "shoe-heel", color: "#2bcbba" },
  { label: "Sports", icon: "basketball", color: "#45aaf2" },
  { label: "Movies & Music", icon: "headphones", color: "#4b7bec" },
  { label: "Books", icon: "headphones", color: "#4b7bec" },
  { label: "Others", icon: "headphones", color: "#4b7bec" },
];

const ListingEditScreen = () => {
  // const location = useLocation();
  // const [progress, setProgress] = useState(false);
  const handleSubmit = async (listing) => {
    const result = await listingsApi.addListing({ ...listing }, (progress) =>
      console.log(progress)
    );
    if (!result.ok) return alert("Could not save the listings");
    alert("Success");
  };

  return (
    <Screen style={styles.container}>
      {/* <ProgressIndicator active={progress} /> */}
      {/* <DoneAnimation visible={true} /> */}
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField name="title" autoCapitalize="none" autoCorrect={false} />
        <AppFormField
          name="price"
          autoCapitalize="none"
          autoCorrect={false}
          width="40%"
        />
        <AppFormPicker
          name="category"
          items={sampleItems}
          PickerItemComponent={PickerItemCategory}
          placeholder="category"
          autoCapitalize="none"
          autoCorrect={false}
          width="50%"
        />
        <AppFormField
          name="description"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <SubmitButton title="POST" />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
