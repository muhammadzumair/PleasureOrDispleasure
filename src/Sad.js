import React from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import { Icon } from 'native-base';

const Sad = () =>{
    const {containerStyle, smilyeStyle, textStyle} = styles;
    return (
        <View style={containerStyle}>
            <Image style={smilyeStyle}
                source = {require('./assets/sad.png')}
            />     
            <Text style={textStyle}>
                Sorry for your dissatisfaction
            </Text>
            <TouchableOpacity >
                <Icon name='mic' style={{color: 'red', fontSize: 100 }} />
            </TouchableOpacity>
            <Text style={textStyle}>
                Tap this Mic Icon and then Speak
            </Text>
            
        </View>
     
    );
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
        flexWrap: 'wrap'
    }
}

export {Sad}