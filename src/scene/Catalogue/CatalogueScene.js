import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import API from '../../api.js';

let {height, width} = Dimensions.get('window');
let itemWidth = (width-20)/4;

export default class CatalogueScene extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        bookId: this.props.navigation.state.params.id,
        chapters: [],
    }
  }

  componentDidMount(){
    this.getBookChapter();
  }

  async getBookChapter() {
    try {
      let BookChapters = [];
      let response = await fetch(`${API.qidian}/book/chapter/${this.state.bookId}`);
      let responseJson = await response.json();
      this.setState({chapters:responseJson});
    } catch(error) {
      console.error(error);
    }
  }

  render() {
    let navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={{borderBottomWidth:1,borderBottomColor:'#ed424b',alignItems:'center'}}>
            <Text style={{lineHeight:50,fontSize:18,fontWeight:'bold',color:'#ed424b'}}>目录</Text>
          </View>
          <View style={{paddingLeft:20,paddingRight:20}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:15,paddingBottom:15}}>
              <View >
                <Text style={{fontSize:14,fontWeight:'bold'}}>共{this.state.chapters.length}章</Text>
              </View>
              <View >
                <Text style={{fontSize:14,}}>倒序</Text>
              </View>
            </View>
            <View style={{marginLeft:-15,marginRight:-15,}}>
              <Text style={{fontSize:12,paddingLeft:15,fontWeight:'bold',color:'#999',alignItems:'center',backgroundColor:'#f6f7f9',lineHeight:30}}>正文卷</Text>
            </View>
            <View>
              {this.state.chapters.map((value,index)=>{
                return (
                  <TouchableOpacity onPress={() => navigation.navigate('Chapter',{id: this.state.bookId})}>
                    <View style={styles.chapter}>
                      <Text style={styles.text}>{value.title}</Text>
                    </View>
                  </TouchableOpacity>
                )
              })}
            </View>
          </View>
        </ScrollView>
      </View>
  )
  }
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    flex: 1,
  },
  scrollView:{

  },
  img:{
    width: itemWidth*0.9,
    height:itemWidth*1.2,
    resizeMode: 'cover'
  },
  bookName:{
    color: '#333', 
    fontSize: 12,
    paddingTop: 5,
    paddingBottom: 3,
  },
  chapter: {
    // alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:'#f5f5f5',
  },
  text:{
    lineHeight:35,
    color: '#333', 
    fontWeight:'bold',
    fontSize: 13,
  },
});


