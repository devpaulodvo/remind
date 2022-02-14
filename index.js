/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';

import store from './store/store'
import { Provider } from 'react-redux';

const RNRedux = () => {
    return(
        <Provider store={store}>
            <App/>
        </Provider>)
}

AppRegistry.registerComponent(appName, () => 
    RNRedux
);


