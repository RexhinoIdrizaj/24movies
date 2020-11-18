import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../constants/UI";

/**
 * @category
 * Components
 * @description
 * Custom component used as a wrapper
 * @property {boolean} [withShadow]
 * @property {object} [style]
 * @property {*} children
 */
const MyCard = ({ withShadow, style, children }) => {
  return (
    <View style={[withShadow ? styles.cardShadow : styles.card, style]}>
      {children}
    </View>
  );
};

export default MyCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 7,
    backgroundColor: colors.bgGrey,
  },
  cardShadow: {
    borderRadius: 7,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 5,
  },
});
