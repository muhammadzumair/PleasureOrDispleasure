import React from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';

const VeryHappy = () =>{
    const {containerStyle, smilyeStyle, textStyle} = styles;
    return (
        <View style={containerStyle}>
            <Image style={smilyeStyle}
                source = {require('./assets/vhappy.png')}
            />     
            <Text style={{ textAlign: 'center', fontSize: 20, paddingHorizontal: 10 }}>
                Thank you for your review, we will try to make our service more better
            </Text>
        </View>
     
    );
};

const styles = {
  textStyle:{
    textAlign : 'center',
    
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

export {VeryHappy}