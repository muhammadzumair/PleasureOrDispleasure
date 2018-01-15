import React from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';

const SmileyButton = ({onPress, smilyeImage, text}) =>{
    const {buttonStyle, smilyeStyle, textStyle} = styles;
    return (
        <View style={{ width: '25%' }}>  
          <TouchableOpacity style={buttonStyle}  onPress={onPress}>
                <Image resizeMode="contain" style={smilyeStyle}
                    source={smilyeImage}
                />
          </TouchableOpacity>
          <Text style={textStyle}>{text}</Text>
        </View>
     
    );
};

const styles = {
  buttonStyle:{
    alignSelf: 'center'
  },
  smilyeStyle:{
    width: 180,
    height: 180
  },
  textStyle:{
      alignSelf: 'center',
      fontSize: 20,
      marginBottom: 20,
      color: '#000066',
      fontWeight: 'bold',
      fontFamily: 'Arial'
  }
}

export {SmileyButton};