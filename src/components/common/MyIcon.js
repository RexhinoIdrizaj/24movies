import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import { colors } from "../../constants/UI";

/**
 * @category
 * Components
 * @description
 * Custom icon
 * @property {string} iconName
 * @property {number} [iconSize=15]
 * @property {string} [iconColor]
 * @property {object} [style]
 * @property {function} [onPress]
 */
const MyIcon = ({ iconName, iconSize = 15, iconColor, style, onPress }) => {
  return (
    <Icon
      name={iconName}
      size={iconSize}
      color={colors[iconColor]}
      style={{ padding: 5, ...style }}
      onPress={onPress}
    />
  );
};

export default MyIcon;
