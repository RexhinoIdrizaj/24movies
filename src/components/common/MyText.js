import React from "react";
import { Text } from "react-native";

import { colors, generalStyles } from "../../constants/UI";

/**
 * @category
 * Components
 * @description
 * Custom component to show text
 * @property {string} [type="normal"]         text type one of ("small", "normal", "subtitle", "title", "big")
 * @property {string} [fontWeight="normal"]   Other "bold"
 * @property {string} [textColor="black"]     One of properties of colors object on UI constans
 * @property {object} [style]
 * @property {*} [children]
 */

const MyText = ({
  type = "normal",
  fontWeight = "normal",
  textColor = "black",
  style,
  children,
  props,
}) => {
  return (
    <Text
      {...props}
      style={{
        fontSize: generalStyles[type],
        color: colors[textColor],
        fontWeight,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

export default MyText;
