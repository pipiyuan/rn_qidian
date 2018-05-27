
import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { StackNavigator , TabNavigator} from 'react-navigation';
import Icon from 'qidian/src/assets/Fonts/iconfont';
import SplashScreen from 'react-native-splash-screen';

import HomeScreen from './scene/Home/HomeScene';
import SearchScene from './scene/Search/SearchScene';
import DetailScreen from './scene/Detail/DetailScene';
import ChapterScreen from './scene/Chapter/ChapterScene';
import CatalogueScene from './scene/Catalogue/CatalogueScene';
import GuideScene from './scene/Guide/GuideScene';
// import Test from './test';

import Storage from 'qidian/src/config/storage.js';

//storege 全局变量
global.storage = Storage;

class RootScene extends React.Component {
  static navigationOptions = {
    // title: 'Home',
  }
  constructor(){
      super();
      this.state = {
        guideSceneStatus: false
      };
  }
  componentWillMount() {
    storage.load({key:'guideSceneStatus'})
            .then(res => {
                this.setState({guideSceneStatus: res.isHide_guideScene})
            }).catch(error => {
                this.setState({guideSceneStatus: false})
            })
  }
  componentDidMount() {
      // 此处可以加延时间 保证异步的storage.load能拿到数据，避免页面 this.state.guideSceneStatus 引起页面跳动
      // setTimeout(function () {
          SplashScreen.hide();
      // },1000)
  }
  render() {
    return (
        <View style={{flex:1}}>
            {this.state.guideSceneStatus ? <NavigatorNoGuide/> : <Navigator />}
        </View>
    );
  }
}
// {this.state.guideSceneStatus ? <NavigatorNoGuide/> : <Navigator />}
/*
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
*/

const StackNavigator_Obj = {
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
    // navigationOptions: {
    //   headerRight: (
    //     <View style={{flexDirection: 'row',alignItems: 'center',paddingRight:10,}}>
    //       <Icon name="iconfont-search" size={16} color="#666" style={{fontWeight:'bold',marginRight: 10}} />
    //       <Icon name="iconfont-menu" size={22} color="#666" />
    //     </View>
    //   )
    // }
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
}

// StackNavigator 中若没有 initialRouteName 默认显示第一个路由
// NavigatorNoGuide 没有 GuideScene 页面
const NavigatorNoGuide = StackNavigator(
  {
    ...StackNavigator_Obj
  }
);
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
    ...StackNavigator_Obj
  }
);
export default RootScene
