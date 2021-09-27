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
  ImageComponent,
  onPress,
  renderRightActions,
  styles2,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.primary} onPress={onPress}>
        <View style={[styles.container, styles2]}>
          {ImageComponent}
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
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: "row",
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
