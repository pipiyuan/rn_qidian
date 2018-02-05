/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Main from './src/main';
// import Demo from './src/demo';

let EntryObj = Main;

export default class qidian extends Component {
  render() {
    return (
      <EntryObj />
    );
  }
}
// 关闭警告
{
  console.disableYellowBox = true;
  console.warn('YellowBox is disabled.');
}

AppRegistry.registerComponent('qidian', () => qidian);
