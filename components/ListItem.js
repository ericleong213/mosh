import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";

const ListItem = ({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  styles2,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.primary} onPress={onPress}>
        <View style={[styles.container, styles2]}>
          {IconComponent}
          {image && <Image source={image} style={styles.contactImage} />}
          <View
            style={{
              flexDirection: "column",
              paddingHorizontal: 15,
              justifyContent: "center",
            }}
          >
            <Text style={styles.contactName}>{title}</Text>
            {subTitle && <Text>{subTitle}</Text>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingLeft: 20,
    flexDirection: "row",
    backgroundColor: "lightgrey",
  },
  contactName: {
    fontWeight: "bold",
  },
  contactImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
