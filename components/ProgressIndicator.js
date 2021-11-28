import React, { useState } from "react";
import { View } from "react-native";
import * as Progress from "react-native-progress";

import Screen from "./Screen";

function ProgressIndicator({ active = false }) {
  const [progress, setProgress] = useState(0);
  if (!active) return null;
  setTimeout(() => {
    setProgress(1);
  }, 2000);

  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      <Progress.Bar progress={progress} width={200} />
    </View>
  );
}

export default ProgressIndicator;
