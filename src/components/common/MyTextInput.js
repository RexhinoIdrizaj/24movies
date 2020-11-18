import React, { forwardRef } from "react";
import { TextInput, StyleSheet, View, ActivityIndicator } from "react-native";
import { colors, generalStyles } from "../../constants/UI";

import MyIcon from "./MyIcon";
import MyText from "./MyText";
import WithFocus from "./WithFocus";

/**
 * @category
 * Components
 * @description
 * Custom component to handle user text input
 * @property {function} [onPress]     function that handles press event on dashboard view to redirect to search screen
 * @property {function} onPressIcon   function that handles icon press
 * @property {string}   [iconName]      FontAwsome icon name
 * @property {boolean}  loading       Loading on search
 * @property {*} ref                  TextInput reference forawaded
 */
const MyTextInput = forwardRef(
  ({ onPress, onPressIcon, iconName, loading, ...props }, ref) => {
    return (
      <>
        {onPress ? (
          <WithFocus
            onPress={onPress}
            style={styles.wrapper}
            focusStyle={{ borderColor: colors.primary }}
          >
            <View style={{ ...styles.input, paddingVertical: 10 }}>
              <MyText textColor="textGrey">Discover</MyText>
            </View>
            {iconName && <MyIcon iconName={iconName} />}
          </WithFocus>
        ) : (
          <View style={styles.wrapper}>
            <TextInput
              {...props}
              ref={ref}
              style={{
                ...styles.input,
                ...props.style,
              }}
              placeholderTextColor={colors.textGrey}
              editable={!onPress}
            />
            {iconName && !loading && (
              <MyIcon iconName={iconName} onPress={onPressIcon} />
            )}
            {loading && <ActivityIndicator color={colors.primary} />}
          </View>
        )}
      </>
    );
  },
);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.borderGrey,
  },
  input: {
    fontSize: generalStyles.normal,
    color: colors.black,
    borderWidth: 0,
    flex: 1,
    minHeight: 30,
    paddingVertical: 5,
  },
});

export default MyTextInput;
