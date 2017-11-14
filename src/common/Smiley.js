import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';

const Smilye = ({onPress, smilyeImage}) =>{
    const {buttonStyle, smilyeStyle} = styles;
    return (
        <View style={{ width: '50%' }}>  
          <TouchableOpacity style={buttonStyle}  onPress={onPress}>
              <Image style={smilyeStyle}
                  source={smilyeImage}
              />
          </TouchableOpacity>
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
  }
}

export {Smilye};