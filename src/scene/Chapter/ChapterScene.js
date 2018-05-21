import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  WebView,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/icomoon';
let {height, width} = Dimensions.get('window');

import API from '../../api.js';

export default class ChapterScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'home',
  // }
  // static defaultProps = { // 设置默认熟悉
  //   test: 'value'
  // }
  // static propTypes = {  // 属性类型检测
  //   // title: React.PropTypes.string,
  //   title: React.PropTypes.string.isRequired
  // }
  constructor(props) {
    super(props)

    this.state = {
        bookId: this.props.navigation.state.params.id,
        chapterId: 1,
        chapterData: '',
        barStatus: true
    }
  }

  componentDidMount(){
    this.getChapter()
  }

  async getChapter() {
    try {
      let response = await fetch(`${API.qidian}/book/${this.state.bookId}/${this.state.chapterId}`);
      let responseJson = await response.json();
      this.setState({chapterData: responseJson.content})
    } catch(error) {
      console.error(error);
    }
  }

  onPress_middleTouch (){
    this.setState({barStatus:!this.state.barStatus});
  }

  render() {
    let navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={true}
        />
        <View style={[styles.topBtn,this.state.barStatus?styles.hiddenBar:'']}>
          <View style={{flexDirection:'row',alignItems:'center',paddingLeft:10}}>
            <Icon name="icomoon-menu" size={22} color="#f7f7f7" />
          </View>
        </View>
        <TouchableOpacity style={styles.middleTouch} onPress={()=>this.onPress_middleTouch()}>
        </TouchableOpacity>
        <View style={[styles.bottomBtn,this.state.barStatus?styles.hiddenBar:'']}>
          <View>
            <Icon name="icomoon-menu" size={22} color="#f7f7f7" />
            <Text style={styles.btnText}>目录</Text>
          </View>
          <View>
            <Icon name="icomoon-font" size={22} color="#f7f7f7" />
            <Text style={styles.btnText}>字体</Text>
          </View>
          <View>
            <Icon name="icomoon-night" size={22} color="#f7f7f7" />
            <Text style={styles.btnText}>夜间</Text>
          </View>
        </View>
        <WebView
          automaticallyAdjustContentInsets={true}
          style={styles.webView}
          source={{html: this.state.chapterData, baseUrl:''}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={false}
          scalesPageToFit={this.state.scalesPageToFit}
        />
      </View>
      )
      // return <Image style = {styles.img} source = {require('../../img/q1.jpeg')}/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position:'relative',
    // height: 100,
    // overflow:'scroll',
  },
  webView:{
    // marginTop:-100
  },
  topBtn:{
    flexDirection:'row',
    width:width,
    // justifyContent:'space-around',
    alignItems: 'center',
    display:'flex',
    position:'absolute',
    top:0,
    backgroundColor:'#000',
    height:40,
    zIndex:10,
  },
  middleTouch:{
    width:width,
    height:height/4,
    // height:0,
    position:'absolute',
    zIndex:10,
    top:height/3,
    // backgroundColor:'pink'
  },
  bottomBtn:{
    flexDirection:'row',
    width:width,
    justifyContent:'space-around',
    alignItems: 'center',
    display:'flex',
    position:'absolute',
    bottom:0,
    backgroundColor:'#000',
    height:60,
    zIndex:10,
  },
  hiddenBar:{
    display:'none'
  },
  btnText:{
    fontSize: 13,
    color: '#fff',
    lineHeight: 24
  }
});




