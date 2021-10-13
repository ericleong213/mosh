import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";

import {
  AppFormField,
  SubmitButton,
  AppForm,
  AppFormPicker,
} from "../components/forms";

// validation with Yup , need to review with mosh's source code
const validationSchema = Yup.object().shape({
  category: Yup.string().required().nullable().label("Category"),
});

const sampleItems = [
  { label: "apple", price: 100 },
  { label: "orange", price: 200 },
  { label: "bananan", price: 300 },
];

const PickerScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ category: null }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormPicker
          name="category"
          items={sampleItems}
          placeholder="category"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <SubmitButton title="POST" />
      </AppForm>
    </Screen>
  );
};

export default PickerScreen;

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
