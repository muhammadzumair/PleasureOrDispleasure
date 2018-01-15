import React, { Component } from 'react';
import { Dimensions, TouchableOpacity, Image, View, Text, Alert, StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Icon, Item, Input } from 'native-base';
import { connect } from 'react-redux';
import Expo from 'expo';
import { KeepAwake } from 'expo';
import { reasonUpdate, saveReason } from '../actions'


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

class SmileyResponse extends Component {
    componentDidMount() {
        Expo.Speech.speak(this.props.audioText, { rate: 1.0 })
        this.navigateOnTimeout();

    }

    clear = () => {
        Keyboard.dismiss();
        window.clearTimeout(abc);
        this.navigateOnTimeout();
    }

    navigateOnTimeout = () => {
        abc = setTimeout(() => {
            if (this.props.reason !== '') {
                this.navigateOnTimeout();
            }
            else {
                this.props.navigation.navigate('Main')
            }
        }, 20000);
    }

    static navigationOptions = ({ navigation }) => ({
        title: ''
    })
    renderMic() {
        if (this.props.mic) {
            return (
                <View>

                    <Item style={{ marginTop: 20 }}>
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
                    </Item>



                </View>
            )
        }
    }


    render() {
        const { containerStyle, smilyeStyle, textStyle } = styles;
        // const { smilyeImage } = this.props.navigation.state.params;

        return (
            // <ScrollView>

            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                 <KeepAwake />
                <TouchableOpacity style={{ flex: 1 }} onPress={this.clear}>
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
                                {this.renderMic()}
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
            // </ScrollView>
        );
    }

};

const styles = {
    textStyle: {
        textAlign: 'center',
        fontSize: 20,
        paddingHorizontal: 10

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

