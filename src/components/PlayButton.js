import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../constants/UI";

import MyIcon from "./common/MyIcon";
import WithFocus from "./common/WithFocus";

/**
 * @category
 * Components
 * @description
 * Component to show a button with play icon
 * @property {object} style object to style the component
 * @property {function} onPress function that handles press event
 */
const PlayButton = ({ style, onPress }) => {
  return (
    <WithFocus
      style={{ ...styles.playBtn, ...style }}
      focusStyle={{
        ...styles.playBtn,
        borderWidth: 2,
      }}
      onPress={onPress}
    >
      <MyIcon iconName="play" iconColor="white" />
    </WithFocus>
  );
};

export default PlayButton;

const styles = StyleSheet.create({
  playBtn: {
    borderRadius: 25,
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});
