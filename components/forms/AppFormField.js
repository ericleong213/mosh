import React, { useState } from "react";
import { View } from "react-native";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

const AppFormField = ({ name, width, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        width={width}
        onBlur={() => setFieldTouched(name)}
        placeholder={name}
        onChangeText={handleChange(name)}
        {...otherProps}
        //   icon="lock"
        //   autoCapitalize="none"
        //   autoCorrect={false}
        // textContextType={"password"}
        //   secureTextEntry
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
