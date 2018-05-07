import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimensions, TouchableOpacity, Image, View, Text, Alert, StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ReasonButton } from './sharedComponents';
import Expo from 'expo';

class Suggestion extends Component {
    componentDidMount(){
        Expo.Speech.speak('ThankYou for your response. Want to tell us more?', { rate: 1.0 })
    }
    render() {
        const reasonImages = {
            comment: require('../assets/comment.png'),
            no: require('../assets/no.png')
        }
        // const { params } = this.props.navigation.state;
        // const  _key  = this.props.navigation.state.params.screenKey;
        // const { goBack } = this.props.navigation;
        // console.log("hgfcjvgvkhbj: ", _key)
        // console.log("hvhvmb: ", this.props.navigation.state.params.screenKey)
        return (

            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Thankyou For Your Response!</Text>
                <Text style={{ fontSize: 30 }}>Want to tell us more...</Text>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <ReasonButton onPress={() => this.props.navigation.navigate('Comment')} iconImage={reasonImages.comment} text='Yes' />
                    <ReasonButton onPress={() => this.props.navigation.navigate('ThankYou')} iconImage={reasonImages.no} text='No' />
                </View>
            </View>
        );
    }
}

export default Suggestion;