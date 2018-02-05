import React from 'react';  
import {  
    AppRegistry,  
    Text,  
    Button,  
    View,  
    TouchableOpacity,
    Image
} from 'react-native';  
  
import { StackNavigator } from 'react-navigation';  
import { TabNavigator } from 'react-navigation';  
  
class MyHomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Profile', {name: 'Lucy22'})}
        title="Go to Lucy's profile"
      />
    );
  }
}

class MyProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
        <TouchableOpacity>
            <Image source={require('./img/Home/search_icon.png')}/>
        </TouchableOpacity>
    ),
    headerRight: (
        <Image
            source={require('./img/Home/icon_navigationItem_message_white@2x.png')}
            onPress={() => {

            }}
        />
    ),
    headerLeft: (
        <Button
            title='福州'
            titleStyle={{ color: 'white' }}
            onPress={() => {

            }}
        />
    ),
    headerStyle: { backgroundColor: '#eee' },
})

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go11 to Lucy's profile{}"
      />
    );
  }
}

const ModalStack = StackNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Profile: {
    path: 'people/:name',
    screen: MyProfileScreen,
  },
});

//增加一个右边按钮
// static navigationOptions = ({ navigation }) => {
//   const {state, setParams} = navigation;
//   const isInfo = state.params.mode === 'info';
//   const {user} = state.params;
//   return {
//     title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
//     headerRight: (
//       <Button
//         title={isInfo ? 'Done' : `${user}'s info`}
//         onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
//       />
//     ),
//   };
// };

export default ModalStack

