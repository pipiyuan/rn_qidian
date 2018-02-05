import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
let {height, width} = Dimensions.get('window');
let itemWidth = (width-20)/4;

export default class Book extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
  	let bookData = this.props.bookData;
  	// console.log('booklist',bookData)
    return (
	    <View style={styles.classify_item}>
	        <Image style = {styles.img} 
                    source = {{uri:bookData.imageUrl}} />
            <Text style={styles.bookName} numberOfLines={1}>
            	{bookData.bookName}
            </Text>
            <Text style={styles.author}>{bookData.author}</Text>
	    </View>
	)
  }
}


const styles = StyleSheet.create({
  classify_item:{
    width: itemWidth,
    alignItems: 'center',
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
  author: {
  	color: '#333', 
  	fontSize: 10,
  }
});


