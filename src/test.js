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
import Icon from 'qidian/src/assets/Fonts/iconfont';
let {height, width} = Dimensions.get('window');

export default class SearchScene extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
        bookInfoData: '',
        likeBookDataArr:[],
        text: '发发'
    }
  }

  searchHistory(){
    let history = ['黄金渔村','直播之工匠大师','重生之帝霸星空','秦吏','飞剑问道','末日审车','浴血兵锋'];
    return history.map((value,index)=>{
      return (
        <View style={styles.itemHistory}>
          <Text style={{fontSize:12,color:'#999',fontWeight:'bold'}}>{value}</Text>
        </View>
      )
    })
  }

  componentDidMount(){

  }

  render() {
    let navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{padding:15,backgroundColor:'#f5f5f5'}}>
          <Text style={{fontSize:12,color:'#666',fontWeight:'bold'}}>大家都在搜</Text>
        </View>
        <View style={styles.searchHistory}>
          {this.searchHistory()}
        </View>
        <TextInput
          style = {{height: 40, borderColor: 'gray', borderWidth: 1}}
          // onChangeText={(text) => console.log()}
          placeholder={'请输入'}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  searchHistory:{
    padding:10,
    flexDirection:'row',
    flexWrap: 'wrap',
  },
  itemHistory:{
    borderColor:'#999',
    borderWidth:1,
    borderRadius:15,
    margin:5,
    paddingLeft:10,
    paddingRight:10,
    paddingTop: 5,
    paddingBottom: 5,
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
