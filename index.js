/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/navigation/stack';

AppRegistry.registerComponent(appName, () => App);
