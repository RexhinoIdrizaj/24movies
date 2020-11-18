import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { colors } from "../../constants/UI";

/**
 * @category
 * Components
 * @description
 * Component used for focus support on TV platforms
 * @property {object} [style]       object to style the component
 * @property {function} onPress   function that handles press event
 * @property {*} [children]       used to give other components to this card
 */
const WithFocus = ({ style, onPress, children }) => {
  const [active, setActive] = useState(false);

  const componentStyle = active
    ? { ...style, borderWidth: 2, borderColor: colors.darkerGrey }
    : style;

  return (
    <TouchableOpacity
      style={componentStyle}
      onPress={onPress}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    >
      {children}
    </TouchableOpacity>
  );
};

export default WithFocus;
