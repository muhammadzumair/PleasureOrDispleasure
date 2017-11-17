import React,{Component} from 'react';
import {Dimensions, TouchableOpacity, Image, View, Text} from 'react-native';
import { Icon } from 'native-base';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

class Angry extends Component{
    static navigationOptions = ({ navigation }) => ({
        title: ''
    })
    
    render(){
        const {containerStyle, smilyeStyle, textStyle} = styles;
        const { smilyeImage } = this.props.navigation.state.params;
        return (
            <View style={containerStyle}>
                <Image style={smilyeStyle}
                    source = {smilyeImage}
                />     
               <View>
                    <Text style={textStyle}>
                        We are really for our bad service, please provide us the reason for your Dissatisfaction
                    </Text>
                    <TouchableOpacity >
                        <Icon name='mic' style={{color: 'red', fontSize: 100, textAlign : 'center' }} />
                    </TouchableOpacity>
                    <Text style={textStyle}>
                        Tap this Mic Icon and then Speak
                    </Text>
               </View>
                
            </View>
         
        );
    }
    
};

const styles = {
  textStyle:{
    textAlign : 'center',
    fontSize: 20,
    paddingHorizontal: 10
    
  },
  smilyeStyle:{
    width: 350,
    height: 350
  },
  containerStyle:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // flexDirection: DEVICE_WIDTH < 400 ? 'column' : 'row'
    }
}

export {Angry}