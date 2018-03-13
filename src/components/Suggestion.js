import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimensions, TouchableOpacity, Image, View, Text, Alert, StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ReasonButton } from './sharedComponents';

class Suggestion extends Component {
    render(){
        const reasonImages = {
            comment: require('../assets/comment.png'),
            no: require('../assets/no.png')
        }
        return (
            <View style={{ alignItems:'center', justifyContent:'center', flex:1}}>
                <Text style={{fontSize:30, fontWeight:'bold'}}>Thankyou For Your Response!</Text>
                <Text style={{fontSize:30}}>Want to tell us more...</Text>
                <View style={{ flexDirection: 'row', alignSelf:'center'}}>
                    <ReasonButton onPress={()=>this.props.navigation.navigate('Comment')} iconImage={reasonImages.comment} text='Yes' />
                    <ReasonButton onPress={()=>this.props.navigation.navigate('ThankYou')} iconImage={reasonImages.no} text='No' />
                </View>
            </View>
        );
    }
}

export default Suggestion;