import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {colors} from '../constants/UI';

/**
 * @category
 * Components
 * @description
 * Component used when flatlist has no data
 */
const FlatlistEmpty = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: 100,
      }}>
      <ActivityIndicator color={colors.primary} />
    </View>
  );
};

export default FlatlistEmpty;
