import React, {Component} from 'react';
import { StyleSheet, Text,Dimensions, View, TouchableOpacity, Image } from 'react-native';
import { Smilye } from './common';
import { StackNavigator } from 'react-navigation';
import { VeryHappy } from './VeryHappy';

export default class Main extends Component{
    veryHappyFunc(){

    }
    happyFunc(){

    }
    sadFunc(){

    }
    angryFunc(){

    }
    render(){
        const {containerStyle, smilyeContainerStyle} = styles;
        const smilyeImages = {
            veryHappy: require('./assets/vhappy.png'),
            happy: require('./assets/happy.png'),
            sad: require('./assets/sad.png'),
            angry: require('./assets/angry.png'),
        }
        return (
            <View style={containerStyle}>
                <View style={smilyeContainerStyle}>
                    <Smilye onPress={() => this.props.navigation.navigate('VeryHappy')} smilyeImage= {smilyeImages.veryHappy}/>
                    <Smilye onPress={() => this.props.navigation.navigate('Happy')} smilyeImage= {smilyeImages.happy}/>
                </View>
                <View style={smilyeContainerStyle}>
                    <Smilye onPress={() => this.props.navigation.navigate('Sad')} smilyeImage= {smilyeImages.sad}/>
                    <Smilye onPress={() => this.props.navigation.navigate('Angry')} smilyeImage= {smilyeImages.angry}/>    
                </View>
            </View>
        )

    }
}

const styles = {
    containerStyle:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    smilyeContainerStyle:{
        flexDirection: 'row'
    }
}


  
