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
import Icon from 'react-native-vector-icons/icomoon';

let {height, width} = Dimensions.get('window');
let itemWidth = width/4;

export default class BookItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
  	let bookInfoData = this.props.bookInfoData;
  	let bookLabels = bookInfoData.labels||[];
    return (
        <View style={styles.item}>
				<Image style = {styles.img} 
                   source = {{uri:bookInfoData.imageUrl}} />
            <View style={styles.detail}>
  				<Text style={{fontSize: 15,fontWeight: 'bold'}}>{bookInfoData.bookName}</Text>
  				<View style={{flexDirection:'row',alignItems: 'center'}}>
  					<Text style={{fontSize: 12,}}>{bookInfoData.author}</Text>
  					<Text style={{fontSize: 8,marginLeft:8,backgroundColor:'#ed424b',color:'#fff',paddingLeft:2,paddingRight:2,fontWeight:'bold',paddingTop:1,paddingBottom:1}}>Lv.1</Text>
  				</View>
  				<View style={{flexDirection:'row',alignItems: 'center'}}>
  					<Text style={{fontSize: 12,}}>{bookInfoData.author}</Text>
  					<Text style={{fontSize: 12,}}>{bookInfoData.score}分</Text>
  				</View>
  				<Text style={{fontSize: 12,}}>{bookInfoData.score}</Text>
  				<Text style={{fontSize: 12,}}>现代言情/婚恋情缘</Text>
  				<View style={styles.label}>
  					{bookLabels.map((val, ind)=>{
  						return (
  							<View style={[styles.labelTag,ind==0&&{borderRightWidth:1,borderColor:'#666'},ind==1&&{marginLeft:5}]}>
  								<Text style={{fontSize: 12,}}>{val.tag}</Text>
  							</View>
  						)
  					})}
  				</View>
  			</View>
		</View>
      )
  }
}

const styles = StyleSheet.create({
  item: {
  	backgroundColor: '#fff',
  	flexDirection: 'row',
    borderColor: '#eee',
    borderBottomWidth: 1,
    // paddingTop: 10,
    // paddingBottom: 10,
    alignItems: 'stretch',
  },
  img: {
  	// flex: 1,
    width: itemWidth*0.9,
    height: itemWidth*1.2,
    resizeMode: 'cover'
  },
  detail:{
  	// flex: 1,
  	fontSize: 10,
  	paddingTop: 10,
  	// paddingBottom: 5,
    paddingLeft: 10,
    justifyContent: 'space-around'
  },
  userLabel:{
  	flex: 1,
  	flexDirection: 'row',
  	justifyContent: 'space-between',
  	alignItems: 'center',
  	marginTop: 5,
  },
  user:{
  	flexDirection: 'row',
  	alignItems: 'flex-end',
  },
  label:{
  	flexDirection: 'row',
  	alignItems: 'center'
  },
  labelTag: {
  	paddingRight:5,
  }
});



