import React, { useState } from "react";
import { View } from "react-native";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

const AppFormPicker = ({ name, items, width, placeholder }) => {
  const { errors, touched, values, setFieldValue } = useFormikContext();

  return (
    <>
      <AppPicker
        name={name}
        items={items}
        width={width}
        placeholder={placeholder}
        selectedItem={values[name]}
        onSelectedItem={(value) => setFieldValue(name, value)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
