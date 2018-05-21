import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

let {height, width} = Dimensions.get('window');
let itemWidth = (width-12)/4;

export default class BookList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <View style={styles.classifyWrap}>
            <View style={styles.listTitle}>
              <Text style={styles.titleText}>{this.props.title}</Text>
            </View>
            <View style={styles.classify}>
              <FlatList
                data={this.props.booklistArr}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                // initialNumToRender="4"
                renderItem={({item, index}) => (
                  <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate('Detail',{id: item.id})
                  }} key = { index } style={styles.classify_item}>
                    <Image style = {{width: itemWidth*0.9,height:itemWidth*1.2,resizeMode: 'cover'}} 
                            source = {{uri:item.imageUrl}} />
                    <Text style={{color: '#333', fontSize: 11,paddingTop:8,paddingBottom:4}} numberOfLines={1}>{item.bookName}</Text>
                    <Text style={{color: '#333', fontSize: 9}}>{item.author}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
        </View>
      )
  }
}

const styles = StyleSheet.create({
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
  classifyWrap:{
    backgroundColor: '#fff',
    /*paddingLeft: 10,
    paddingRight: 10,*/
  },
  classify:{
    paddingTop: 10,
    paddingBottom: 20,
    // justifyContent: 'space-around',
    flexDirection: 'row',
    paddingLeft: 6,
    paddingRight: 6
  },
  classify_item:{
    width: itemWidth,
    alignItems: 'center',
    // paddingLeft: itemWidth*0.1,
    // paddingRight: itemWidth*0.05,
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



