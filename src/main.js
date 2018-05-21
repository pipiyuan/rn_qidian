/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  SectionList,
  Image,
  Button,
  StatusBar
} from 'react-native';
import { StackNavigator , TabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/icomoon';
import SplashScreen from 'react-native-splash-screen';

import HomeScreen from './scene/Home/HomeScene';
import SearchScene from './scene/Search/SearchScene';
import DetailScreen from './scene/Detail/DetailScene';
import ChapterScreen from './scene/Chapter/ChapterScene';
import CatalogueScene from './scene/Catalogue/CatalogueScene';
import Test from './test';
import GuideScene from './scene/Guide/GuideScene';


class RootScene extends React.Component {
  static navigationOptions = {
    // title: 'Home',
  }
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Navigator />
    );
  }
}

const Tabs = TabNavigator({
  Chapter: {
      screen: ChapterScreen,
      navigationOptions: {  // 也可以写在组件的static navigationOptions内
          tabBarLabel: '首页',
      }
  },
  Test: {
      screen: Test,
      navigationOptions: {  // 也可以写在组件的static navigationOptions内
          tabBarLabel: '首页',
      }
  },
})

const Navigator = StackNavigator(
  {
    initialRouteName: {
      screen:GuideScene,
      navigationOptions: {
        header:null,
        // headerTitle: 'Home',
        // headerTintColor: 'pink',
        // headerStyle:{
        //   backgroundColor:'gray'
        // }
      },
    },
    Home: {
      screen: HomeScreen,
      navigationOptions:{
        // header: null
        // headerTitle:'Home',
        // headerBackTitle:'首页',
      }
    },
    Search: {
      screen: SearchScene,
    },
    Detail: {
      screen: DetailScreen,
      navigationOptions: {
        headerRight: (
          <View style={{flexDirection: 'row',alignItems: 'center',paddingRight:10,}}>
            <Icon name="icomoon-search" size={16} color="#666" style={{fontWeight:'bold',marginRight: 10}} />
            <Icon name="icomoon-menu" size={22} color="#666" />
          </View>
        )
      }
    },
    Chapter: {
      screen: ChapterScreen,
      navigationOptions: {
        header: null
      }
    },
    Catalogue: {
      screen: CatalogueScene,
    },
    Test: {
      path: 'people/:name',
      screen: Test,
    },
  },
);

export default RootScene
