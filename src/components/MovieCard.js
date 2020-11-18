import React from "react";
import { View } from "react-native";

import MyCard from "./common/MyCard";
import MyImage from "./common/MyImage";
import MyText from "./common/MyText";
import WithFocus from "./common/WithFocus";

/**
 * @category
 * Components
 * @description
 * Component to show a movie item in the carousels
 * @property {string} title
 * @property {string} imageSrc
 * @property {boolean} withShadow  props used to show acrd with background and shadow
 * @property {function} onPress
 * @property {object} style
 * @property {object} imgStyle     used to give style only to image
 * @property {*} [children]        used to give other components to this card
 */
const MovieCard = ({
  title,
  imageSrc,
  withShadow,
  onPress,
  style,
  imgStyle,
  children,
}) => {
  return (
    <WithFocus onPress={onPress} style={{ padding: 10 }}>
      <MyCard style={style} withShadow={withShadow}>
        <MyImage src={imageSrc} style={imgStyle} />
        <View style={{ flex: 1, marginTop: 5 }}>
          <MyText fontWeight="bold">{title}</MyText>
          {children}
        </View>
      </MyCard>
    </WithFocus>
  );
};

export default MovieCard;
