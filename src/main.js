import React, {Component} from 'react';
import { StyleSheet, Text,Dimensions, View, TouchableOpacity, Image } from 'react-native';
import { Smilye } from './common';
import { StackNavigator } from 'react-navigation';
import { VeryHappy } from './VeryHappy';
import { connect } from 'react-redux';
import {changeSmiley} from './actions';

class Main extends Component{
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
                    <Smilye onPress={value=>this.props.employeeUpdate({prop: 'vHappy'})} smilyeImage= {smilyeImages.veryHappy}/>
                    <Smilye onPress={() => this.props.navigation.navigate('Happy')} smilyeImage= {smilyeImages.happy}/>
                </View>
                <View style={smilyeContainerStyle}>
                    <Smilye onPress={() => this.props.navigation.navigate('Sad')} smilyeImage= {smilyeImages.sad}/>
                    <Smilye onPress={value=>this.props.changeSmiley({prop: 'vHappy'})} smilyeImage= {smilyeImages.angry}/>    
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

const mapStateToProps = (state) => {
    const {name,phone,shift} = state.employeeForm;
    return {name,phone,shift};
}

export default connect(mapStateToProps, {
    changeSmiley
}) (Main);

  
