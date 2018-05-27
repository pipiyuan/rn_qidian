import React, {
  Component
} from 'react';
import {
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
  TouchableOpacity,
} from 'react-native';
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';
import Swiper from 'react-native-swiper';
import Spinner  from 'react-native-loading-spinner-overlay';

import BookList from './bookList.js';
import API from 'qidian/src/config/api.js';
import BookListY from './BookListY.js';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    // title: 'home',
    // headerBackTitle:'首页',
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
        loading: true
    }
  }

  componentDidMount(){
    this.getMoviesFromApi()
  }

  async getMoviesFromApi() {
    try {
      // 注意这里的await语句，其所在的函数必须有async关键字声明
      // let response = await fetch('http://39.108.14.248:3333/booklist');
      let response = await fetch(`${API.qidian}/booklist?size=30&type=slide`);
      let responseJson = await response.json();
      this.setState({booklistData: responseJson.booklist, loading: false})

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

  render_swiper(){
    let images = [
      require('../../img/q1.jpeg'),
      require('../../img/q2.jpeg'),
      require('../../img/q3.jpeg'),
      require('../../img/q4.jpeg'),
    ]
    return images.map((value, index) => {
      return (
        <View>
            <Image style = {styles.img} source = {value} key = { index } />
        </View>
      )
    });
  }

  render_bookClassify(){
    let bookType = [
      {name: '分类'},
      {name: '排行榜'},
      {name: '免费'},
      {name: '完本'},
      {name: '大神'},
    ]
    return bookType.map((item, index) => {
      return (
        <View style={styles.classify_item} key = { index }>
            <Image style = {styles.imgicon} source = {require('../../img/icecream-11.png')} />
            <Text style={{color: '#333', fontSize: 14, fontWeight: 'bold'}}>{item.name}</Text>
        </View>
      )
    });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {this.state.loading
            ?
            <Spinner visible={this.state.loading}
                textContent={'loading'}
                textStyle={{color: '#eee'}}
                animation={'fade'}
                overlayColor={'rgba(0, 0, 0, .1)'}
            />
            :
            <View>
                <View style={styles.swiper_search}>
                    <Swiper height = {150} paginationStyle = {{bottom:10}} autoplay = {true}>
                        {this.render_swiper()}
                    </Swiper>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => this.props.navigation.navigate('Search')}>
                        <View style={styles.search}>
                            <Text style={{color: '#aaa', fontSize: 12}}>超神机械师</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.classify}>
                    {this.render_bookClassify()}
                </View>
                <View>
                    <BookList title="热门小说" navigation={this.props.navigation} booklistArr={this.state.booklistData.slice(0,6)} />
                    <BookList title="新书抢先" navigation={this.props.navigation} booklistArr={this.state.booklistData.slice(7,12)} />
                    <BookListY title="畅销完本" navigation={this.props.navigation} booklistArr={this.state.booklistData.slice(13,16)} />
                </View>
            </View>
        }
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
  swiper_search:{
    paddingLeft:10,
    paddingRight:10,
    paddingTop:10,
  },
  img: {
    height: 150,
    width: Dimensions.get('window').width-20,
    resizeMode: 'stretch'
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
    marginTop:6,
    marginBottom:6
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
