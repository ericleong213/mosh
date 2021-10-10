import React, { useState } from "react";
import { View } from "react-native";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

//   const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

//   const onSelectedItem = (values) => {
//     setSelectedItem(values);
//     // setFieldValue(values)
//   };

//   const [selectedItem, setSelectedItem] = useState(items[2]);

const AppFormPicker = ({ name, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
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

export default AppFormPicker;
