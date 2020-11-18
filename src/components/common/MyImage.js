import React from "react";
import { Image } from "react-native";

import { IMAGE_URL, TMDB_API_KEY } from "../../constants/config";

/**
 * @category
 * Components
 * @description
 * Component to show image correctly
 * @property {string} src
 * @property {object} style
 */
const MyImage = ({ src, style, ...props }) => {
  return (
    <Image
      {...props}
      style={{ width: "100%", height: 100, ...style }}
      source={{ uri: `${IMAGE_URL}${src}?api_key=${TMDB_API_KEY}` }}
    />
  );
};

export default MyImage;
