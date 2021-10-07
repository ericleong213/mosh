//First way to use index to organize import

// import AppForm from "./AppForm";
// import AppFormField from "./AppFormField";
// import ErrorMessage from "./ErrorMessage";
// import SubmitButton from "./SubmitButton";
// export { AppForm, AppFormField, ErrorMessage, SubmitButton };

//Second way to use index to organize import

export { default as AppForm } from "./AppForm";
export { default as AppFormField } from "./AppFormField";
export { default as ErrorMessage } from "./ErrorMessage";
export { default as SubmitButton } from "./SubmitButton";
