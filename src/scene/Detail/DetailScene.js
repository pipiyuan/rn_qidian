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
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/icomoon';

import API from '../../api.js';
import BookInfo from '../../common/bookInfo';
// import BookListY from './BookListY.js';
import BookListY from '../Home/BookListY.js';
import Book from '../../common/book';

export default class DetailScreen extends React.Component {
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
        bookInfoData: '',
        likeBookDataArr:[]
    }
  }

  componentDidMount(){
    this.getBookInfo();
  }

  async getBookInfo() {
    try {
      let LikeBookData = [];
      let response = await fetch(`${API.qidian}/book/${this.state.bookId}`);
      let responseJson = await response.json();
      this.setState({bookInfoData:responseJson});

      responseJson.recommendBook.forEach(async (val,indx)=>{
        let response = await fetch(`${API.qidian}/book/${val}`);
        let responseJson = await response.json();
        LikeBookData.push(responseJson);
        this.setState({likeBookDataArr:LikeBookData});
      });
      // console.log(LikeBookData)
    } catch(error) {
      console.error(error);
    }
  }

  likeBookList (){
    let dataArr = this.state.likeBookDataArr;
    return dataArr.map((value, index) => {
      return (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail',{id: value.id})}>
          <Book bookData={value} />
        </TouchableOpacity>
      )
    })
  }

  render() {
    let navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <BookInfo bookInfoData={this.state.bookInfoData} />
          <View style={styles.btnWrap}>
            <TouchableOpacity onPress={() => navigation.navigate('Chapter',{id: this.state.bookId})} 
                              style={[styles.btn,{backgroundColor:'#ed424b'}]}>
              <Text style={{color:'#fff',fontWeight:'bold'}}>免费试读</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Chapter',{id: this.state.bookId})}
                              style={[styles.btn,{borderWidth:1,borderColor:'#eee'}]}>
              <Text>加入书架</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.info}>
            <Text style={{fontSize:12,lineHeight: 20,}}>{this.state.bookInfoData.intro}</Text>
          </View>
          <TouchableOpacity style={styles.menu} 
                            onPress={() => navigation.navigate('Catalogue',{id: this.state.bookId})}>
            <Text style={{fontSize:16,fontWeight:'bold',color:'#333'}}>目录</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={{fontSize:12,color:'#999',paddingRight:5}}>此连载已全部更新</Text>
              <Icon name="icomoon-user" size={14} color="#999" />
            </View>
          </TouchableOpacity>
          <View style={{backgroundColor:'#eee',height:10,marginLeft:-10,marginRight:-10}}></View>
          <View style={styles.likeBook}>
            <View style={{borderBottomWidth:1,borderBottomColor:'#eee',paddingBottom:10}}>
              <Text style={{fontSize:16,fontWeight:'bold',color:'#333'}}>书友还看过</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',paddingTop:15}}>
              {this.likeBookList()}
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  scrollView:{
    paddingLeft:10,
    paddingRight:10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  btnWrap:{
    flexDirection:'row',
    justifyContent:'space-around',
    paddingTop:20,
    paddingBottom: 20,
  },
  btn: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  info:{
    paddingTop: 15,
    paddingBottom: 15,
    borderTopWidth:1,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  menu:{
    paddingTop:15,
    paddingBottom:15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  likeBook:{
    paddingTop: 15,
    paddingBottom: 15,
  }
});










