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


    this.state = {
        booklistData: [],
        dataList: [],
        refreshing: false,
    }
  }

  bookItem() {
  	let bookItemArr = this.props.booklistArr.map((value,index) => {
  		return (
  			<View style={styles.item}>
  				<Image style = {styles.img} 
                       source = {{uri:value.imageUrl}} />
                <View style={styles.detail}>
	  				<Text style={{fontSize: 15,fontWeight: 'bold',flex:1}}>{value.bookName}</Text>
	  				<Text style={{fontSize: 12,paddingTop:5,color:'#999',height: 70}}>{value.intro}</Text>
	  				<View style={styles.userLabel}>
		  				<View style={styles.user}>
		  					<Icon name="icomoon-user" size={14} color="#999" />
		  					<Text style={{fontSize: 12, marginLeft:5, color: '#999'}}>{value.author}</Text>
		  				</View>
		  				<View style={styles.label}>
		  					{value.labels.map((val, ind)=>{
		  						return (
		  							<Text style={[styles.labelTag,ind==1&&{color: '#ed424b'},ind==2&&{color: '#4284ed'}]}>{val.tag}</Text>
		  						)
		  					})}
		  				</View>
	  				</View>
	  			</View>
  			</View>
  		)
  	});
  	return bookItemArr;
  }

  render() {
    return (
        <View style={styles.booklistY}>
            <View style={styles.listTitle}>
              <Text style={styles.titleText}>{this.props.title}</Text>
            </View>
            <View style={styles.booklistWrap}>
            	{this.bookItem()}
            </View>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  booklistY: {
    backgroundColor: '#fff', 
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  item: {
  	flexDirection: 'row',
    borderColor: '#eee',
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'stretch',
  },
  img: {
  	// flex: 1,
    width: itemWidth*0.9,
    height: itemWidth*1.2,
    resizeMode: 'cover'
  },
  detail:{
  	flex: 1,
  	fontSize: 10,
    paddingLeft: 10,
    // justifyContent: 'space-between'
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
  	alignItems: 'flex-end'
  },
  labelTag: {
  	fontSize: 10,
  	marginLeft:2, 
  	borderColor:'#eee',
  	borderWidth:1,
  	paddingTop:2,
  	paddingBottom:2,
  	paddingLeft:5,
  	paddingRight:5,
  	color: '#999'
  }
});



