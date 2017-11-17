import React from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';
// import { navigation } from 'react-navigation';

const Happy = () =>{
  
    const {containerStyle, smilyeStyle, textStyle} = styles;
    

    return (
        <View style={containerStyle}>
            {/* <Image style={smilyeStyle}
                source = {smilyeImage}
            />     */}
            {/* <Text>{abcd}</Text> */}
            <Text style={{ textAlign: 'center', fontSize: 20, paddingHorizontal: 10 }}>
                Thank you for your review, we sure that next time you will be more happy than now 
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

export {Happy}