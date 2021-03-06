import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import AppText from "./AppText/AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

const AppPicker = ({
  items,
  width = "100%",
  placeholder,
  onSelectedItem,
  icon,
  selectedItem,
  PickerItemComponent = PickerItem,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              color="black"
              size={20}
              style={defaultStyles.icon}
            />
          )}
          <AppText style={[styles.text, selectedItem && styles.selectedText]}>
            {selectedItem ? selectedItem : placeholder}
          </AppText>
          <MaterialCommunityIcons name="chevron-down" color="black" size={20} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen
          style={{
            flexDirection: "column",
          }}
        >
          <View style={{}}>
            <Button title="close" onPress={() => setModalVisible(false)} />
          </View>
          <FlatList
            numColumns="3"
            data={items}
            keyExtractor={(item) => item.label}
            renderItem={({ item }) => (
              <PickerItemComponent
                label={item.label}
                color={item.color}
                icon={item.icon}
                onPress={() => {
                  setModalVisible(false);
                  onSelectedItem(item.label);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  textInput: {
    fontSize: 18,
  },
  text: {
    flex: 1,
    color: "grey",
  },
  selectedText: {
    flex: 1,
    color: "black",
  },

  icon: {
    marginRight: 10,
  },
});
