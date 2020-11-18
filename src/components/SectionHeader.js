import React from "react";
import { StyleSheet, View } from "react-native";

import MyText from "./common/MyText";

/**
 * @category
 * Components
 * @description
 * Header for carousel sections, accept two props.
 * @property {string} title
 * @property {string} [description]
 */
const SectionHeader = ({ title, description }) => {
  return (
    <View style={styles.wrapper}>
      <View>
        <MyText type="title" fontWeight="bold">
          {title}
        </MyText>
        {!!description && <MyText textColor="textGrey">{description}</MyText>}
      </View>
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingLeft: 10,
  },
});
