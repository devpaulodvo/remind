/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';

import store from './store/store'
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

const RNRedux = () => {
    return(
        <Provider store={store}>
        <NavigationContainer>
            <App/>
        </NavigationContainer>
        </Provider>)
}

AppRegistry.registerComponent(appName, () => 
    RNRedux
);


