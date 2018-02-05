import React, {
  Component
} from 'react';
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
  StatusBar,
  Dimensions,
  Button,
} from 'react-native';
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';
import Swiper from 'react-native-swiper';
import BookList from './bookList.js';

import api from '../../api.js';
import BookListY from './BookListY.js';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    // title: 'home',
    headerBackTitle:'首页',
  }
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
        booklistData: [],
        dataList: [],
        refreshing: false,
    }
  }

  componentDidMount(){
    this.getMoviesFromApi()
  }

  async getMoviesFromApi() {
    try {
      // 注意这里的await语句，其所在的函数必须有async关键字声明
      // let response = await fetch('http://39.108.14.248:3333/booklist');
      let response = await fetch(`${api.qidian}/booklist?size=30&type=slide`);
      let responseJson = await response.json();
      this.setState({booklistData: responseJson.booklist})

      // console.log(responseJson)
      // console.log(this.state.booklistData)
    } catch(error) {
      console.error(error);
    }
  }

  showBookList_y (data){
    let dataArr = data || [];
    return dataArr.map((value, index) => {
      return <BookItem itemData={value} />
    })
  }

  render() {
    
    let images = [
      require('../../img/q1.jpeg'),
      require('../../img/q2.jpeg'),
      require('../../img/q3.jpeg'),
      require('../../img/q4.jpeg'),
    ]

    let bookType = [
      {name: '分类'},
      {name: '排行榜'},
      {name: '免费'},
      {name: '完本'},
      {name: '大神'},
    ]

    let ImgView = images.map((value, index) => {
      return (
        <View>
            <Image style = {styles.img} source = {value} key = { index } />
        </View>
      )
    })

    let bookTypeView = bookType.map((item, index) => {
      return (
        <View style={styles.classify_item} key = { index }>
            <Image style = {styles.imgicon} source = {require('../../img/icecream-11.png')} />
            <Text style={{color: '#333', fontSize: 14, fontWeight: 'bold'}}>{item.name}</Text>
        </View>
      )
    })

    //console.log('navigation',this.props.navigation)

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Swiper height = {150} paginationStyle = {{bottom:10}} autoplay = {true}>
            {ImgView}
        </Swiper>
        <View style={styles.search}>
            <Text style={{color: '#aaa', fontSize: 12}}>超神机械师</Text>
        </View>
        <View style={styles.classify}>
          {bookTypeView}
        </View>
        <View>
          <BookList title="热门小说" navigation={this.props.navigation} booklistArr={this.state.booklistData.slice(0,6)} /> 
        </View>
        <View>
          <BookList title="新书抢先" navigation={this.props.navigation} booklistArr={this.state.booklistData.slice(7,12)} /> 
        </View>
        <View>
          <BookListY title="畅销完本" navigation={this.props.navigation} booklistArr={this.state.booklistData.slice(13,16)} />
        </View>
      </ScrollView>
      )
      // return <Image style = {styles.img} source = {require('../../img/q1.jpeg')}/>
  }
}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height: 100,
    // overflow:'scroll',
  },
  img: {
    height: 150,
    width: Dimensions.get('window').width,
    resizeMode: 'contain'
  },
  search: {
    backgroundColor: '#fff',
    height: 36,
    color: 'red',
    // borderColor: 'blue',
    // borderWidth: 1,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6,
    // marginLeft: 8
  },
  classify:{
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  classify_item:{
    alignItems: 'center',
  },
  imgicon:{
    height: 26,
    width: 26,
    marginBottom: 5
  },
  listTitle:{
    backgroundColor: '#fff',
    marginTop: 10,
    marginLeft: 10,
    paddingLeft: 10,
    borderLeftWidth:2,
    borderLeftColor:'red',
    paddingLeft:10,
  },
  titleText:{
    fontSize:14,
  }
});