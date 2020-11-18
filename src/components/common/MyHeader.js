import React, { forwardRef } from "react";
import { Platform, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MyIcon from "./MyIcon";
import MyText from "./MyText";
import MyTextInput from "./MyTextInput";

/**
 * @category
 * Components
 * @description
 * Custom header with back button and optional search bar
 * @property {boolean} [withSearch]
 * @property {string} [title]
 * @property {string} [onUserInput]
 * @property {function} [clearInput]
 * @property {string} [input]
 * @property {boolean} [loading]
 */
const MyHeader = forwardRef(
  ({ withSearch, title, onUserInput, clearInput, input, loading }, ref) => {
    const navigation = useNavigation();

    return (
      <View style={styles.wrapper}>
        {!Platform.isTV && (
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <MyIcon
              iconName="long-arrow-left"
              iconSize={20}
              style={{ padding: 10 }}
            />
            <MyText>{title}</MyText>
          </TouchableOpacity>
        )}
        {withSearch && (
          <View style={{ flex: 1, paddingRight: 10 }}>
            <MyTextInput
              ref={ref}
              onChangeText={onUserInput}
              placeholder="Discover"
              autoFocus={true}
              value={input}
              iconName={!!input ? "times" : "search"}
              onPressIcon={clearInput}
              loading={loading}
            />
          </View>
        )}
      </View>
    );
  },
);

export default MyHeader;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    width: 100,
    marginLeft: 5,
  },
});
