/** 
 *  @fileOverview
 *  Index to register react native application.
 *  Import redux provider and wrapp app component
 *  App component is used to create stack navigation application with screens.
 *  
 *  @author       Rexhino Idrizaj
 *
 *  @requires     NODE:12.18.2
 */
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';

import configureStore from './src/store/configureStore';

const store = configureStore();

const Index = () => {
  enableScreens();
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Index);
