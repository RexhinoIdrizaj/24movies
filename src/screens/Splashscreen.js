import React from 'react';
import {View} from 'react-native';
import MyText from '../components/common/MyText';

/**
 * @category
 * MainScreens
 */
const Splashscreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <MyText type="big">Movies24</MyText>
    </View>
  );
};

export default Splashscreen;
