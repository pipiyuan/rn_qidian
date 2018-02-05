import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import Swiper from 'react-native-swiper';
import Util from '../../common/utils';

let imageArr = [
      require('../../assets/Image/Guide/guide_01.png'),
      require('../../assets/Image/Guide/guide_02.png'),
      require('../../assets/Image/Guide/guide_03.png')
    ]

export default class extends Component {
  constructor() {
      super();
      this.state = {
        animating: true
      };
    };
  componentDidMount(){
    // var timer = setInterval(()=>{
    //   var animating = this.state.animating;
    //   animating = animating ? false : true;
    //   this.setState({
    //     animating: animating
    //   })
    // },3000) 
    
  }
  render() {
    return (
      <Swiper 
        paginationStyle = {{bottom: 20}} 
        loop={false}   
        autoplay = {false}
        showsButtons={false}
        // autoplayTimeout={4}
        showsPagination={false}
      >
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.bg}><Image style={styles.bgImage} resizeMode='cover'
                                         source={require('../../assets/Image/Guide/guide_bg.png')}/></View>
          <View style={styles.slide}>
            <Image resizeMode='contain' style={styles.image} source={require('../../assets/Image/Guide/guide_01.png')}/>
          </View>
          <View style={styles.buttonP}>
            <Image resizeMode='cover' style={styles.logo} source={require('../../assets/Image/Guide/logo.png')}/>
          </View>
          <View style={styles.container}>   
      </View>
        </View>

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.bg}><Image style={styles.bgImage} resizeMode='cover'
                                         source={require('../../assets/Image/Guide/guide_bg.png')}/></View>
          <View style={styles.slide}>
            <Image resizeMode='contain' style={styles.image} source={require('../../assets/Image/Guide/guide_02.png')}/>
          </View>
          <View style={styles.buttonP}>
            <Image resizeMode='cover' style={styles.logo} source={require('../../assets/Image/Guide/logo.png')}/>
          </View>
        </View>

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.bg}><Image style={styles.bgImage} resizeMode='cover'
                                         source={require('../../assets/Image/Guide/guide_bg.png')}/></View>
          <View style={styles.slide}>
            <Image resizeMode='contain' style={styles.image} source={require('../../assets/Image/Guide/guide_03.png')}/>
          </View>
          <View style={styles.buttonP}>
            <TouchableOpacity 
              style={styles.button} 
              onPress={()=> this.props.navigation.navigate('Home')}
            >
              <Text style={styles.btnTxt} title=''>开始探索</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonP}>
            <Image resizeMode='cover' style={styles.logo} source={require('../../assets/Image/Guide/logo.png')}/>
          </View>
        </View>
      </Swiper>
    );
  }
};

var styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    flex: 1,
    zIndex: -1
  },
  bgImage: {
    // flex: 1,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  },
  logo: {
    position: 'absolute',
    bottom: 40,
    left: -38,
    alignSelf: 'center',
    height:27,
    width: 89
  },
  slide: {
    flex: 1,
    // flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -80
  },
  buttonP: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 150,
    height: 40,
    borderWidth: 1,
    borderColor: '#37abfe',
    bottom: 100,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: -75,
  },
  btnTxt: {
    color: '#37abfe',
    fontSize: 18
  },
  image: {
    width: 300,
    height:400,
    marginTop: -10
  }
});


