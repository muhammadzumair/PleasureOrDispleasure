import React, { Component } from 'react';
import { Dimensions, TouchableOpacity, Image, View, Text, Alert, StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Icon, Item, Input } from 'native-base';
import { connect } from 'react-redux';
import Expo from 'expo';
import { KeepAwake } from 'expo';
import { reasonUpdate, saveReason } from '../actions';
import { ReasonButton } from './sharedComponents';


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

class SmileyResponse extends Component {
    componentDidMount() {
        Expo.Speech.speak(this.props.audioText, { rate: 1.0 })
        // this.navigateOnTimeout();

    }

    // clear = () => {
    //     Keyboard.dismiss();
    //     window.clearTimeout(abc);
    //     this.navigateOnTimeout();
    // }

    // navigateOnTimeout = () => {
    //     abc = setTimeout(() => {
    //         if (this.props.reason !== '') {
    //             this.navigateOnTimeout();
    //         }
    //         else {
    //             this.props.navigation.navigate('Main')
    //         }
    //     }, 20000);
    // }

    static navigationOptions = ({ navigation }) => ({
        title: ''
    })
    askReason(){
        const reasonImages = {
            attitude: require('../assets/attitude.png'),
            waitingTime: require('../assets/waiting-time.png'),
            environment: require('../assets/environment.png'),
            comment: require('../assets/comment.png'),
        }
        if (this.props.reason) {
            return (
                <View>
                    <Text style={{
                            fontSize:25,
                            marginBottom:5, 
                            alignSelf: 'center', 
                            fontStyle:'italic', 
                            fontWeight:'bold' }}
                        >
                        Reason?
                    </Text>
                    <View style={{ flexDirection: 'row', alignSelf:'center'}}>
                        <ReasonButton onPress={()=>this.props.navigation.navigate('Suggestion')} iconImage={reasonImages.waitingTime} text='Waiting Time' />
                        <ReasonButton onPress={()=>this.props.navigation.navigate('Suggestion')} iconImage={reasonImages.environment} text='Environment' />
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center'}}>
                        <ReasonButton onPress={()=>this.props.navigation.navigate('Suggestion')} iconImage={reasonImages.attitude} text='Attitude' />
                        <ReasonButton onPress={()=>this.props.navigation.navigate('Comment')} iconImage={reasonImages.comment} text='Something Else' />
                    </View>



                    {/* <Item style={{ marginTop: 20 }}>
                        <Input
                            style={{ fontSize:20, marginRight:10 }}
                            placeholder='type your reason here..'
                            multiline={true}
                            value={this.props.reason}
                            onChangeText={text => this.props.reasonUpdate({ prop: 'reason', value: text })}
                        />
                        <TouchableOpacity onPress={()=>this.props.saveReason({prop: 'saveReason', value: this.props.reason})}>
                            <Icon style={{ fontSize: 50, marginRight: 10 }} active name='ios-send'  />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon style={{ fontSize: 50 }} active name='ios-mic' />
                        </TouchableOpacity>
                    </Item> */}



                </View>
            )
        }
    }

    
    render() {
        // console.log("fewfefff: ", this.props.reason)
        const { containerStyle, smilyeStyle, textStyle } = styles;
        // const { smilyeImage } = this.props.navigation.state.params;

        return (
            // <ScrollView>

            // <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                 
                <TouchableOpacity style={{ flex: 1 }} onPress={this.clear}>
                    <KeepAwake />
                    <StatusBar hidden />
                    <View style={containerStyle}>
                        <Image resizeMode="contain" style={smilyeStyle}
                            source={this.props.image}
                        />
                        <View style={{ width: "50%" }}>
                            <Text style={textStyle}>
                                {this.props.text}
                            </Text>
                            <View>
                                {this.askReason()}
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            // </KeyboardAvoidingView>
            // </ScrollView>
        );
    }

};

const styles = {
    textStyle: {
        textAlign: 'center',
        fontSize: 30,
        paddingHorizontal: 10,
        fontWeight: 'bold'

    },
    smilyeStyle: {
        width: "40%",
        height: 250
    },
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: "row",
        backgroundColor: '#e6ffff'
        // flexDirection: DEVICE_WIDTH < 400 ? 'column' : 'row'
    }
}
const mapStateToProps = (state) => {
    const { image, text, iconButton, loading, audioText, mic, reason, thankYouText } = state.smiley;
    return { image, text, iconButton, loading, audioText, mic, reason, thankYouText };
}

export default connect(mapStateToProps, {
    reasonUpdate,
    saveReason
})(SmileyResponse);

