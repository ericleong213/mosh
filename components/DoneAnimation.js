import React from "react";
import LottieView from "lottie-react-native";

function DoneAnimation({ visible = false }) {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay
      loop
      source={require("../assets/animations/done.json")}
    />
  );
}

export default DoneAnimation;
