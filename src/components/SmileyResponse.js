import React,{Component} from 'react';
import {Dimensions, TouchableOpacity, Image, View, Text} from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
import Expo from 'expo';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

class SmileyResponse extends Component{
    componentDidMount(){
        Expo.Speech.speak(this.props.audioText, {rate: 0.8})
    }
    static navigationOptions = ({ navigation }) => ({
        title: ''
    })
    renderMic(){
        if (this.props.mic){
            return(
                <View>
                    <TouchableOpacity>
                        <Icon name='mic' style={{color: 'red', fontSize: 100, textAlign : 'center' }} />
                    </TouchableOpacity>
                    <Text style={styles.textStyle}>
                        Tap this Mic Icon and then Speak
                    </Text>
                </View>
            )
        }
    }
    
    render(){
        const {containerStyle, smilyeStyle, textStyle} = styles;
        // const { smilyeImage } = this.props.navigation.state.params;
        return (
            <View style={containerStyle}>
                <Image style={smilyeStyle}
                    source = {this.props.image}
                />     
               <View>
                    <Text style={textStyle}>
                       {this.props.text}
                    </Text>
                    <View>
                        {this.renderMic()}
                    </View>
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
const mapStateToProps = (state) => {
    const {image, text, iconButton, loading, audioText, mic} = state.smiley;
    console.log('text: ', text)
    return {image, text, iconButton, loading, audioText, mic};
}

export default connect(mapStateToProps, {
}) (SmileyResponse);
 
