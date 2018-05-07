import React, { Component } from 'react';
import { View, StatusBar, Text } from 'react-native';
import { SmileyButton } from './sharedComponents'
import { connect } from 'react-redux';
import {
    smileyReaction
} from '../actions';
import { KeepAwake } from 'expo';


class Main extends Component {
    componentDidMount() {
        console.log("props: ", this.props)
    }
    render() {
        const { containerStyle, smilyeContainerStyle } = styles;
        const smilyeImages = {
            veryHappy: require('../assets/veryHappy.gif'),
            happy: require('../assets/happy.gif'),
            sad: require('../assets/Sad.gif'),
            angry: require('../assets/Angry.gif'),
        }
        return (
            <View style={containerStyle}>
                <StatusBar hidden />
                <KeepAwake />
                <Text style={{ fontSize: 30, color: '#000066' }}>Pleasure Or Displeasure</Text>
                <View style={smilyeContainerStyle}>
                    <SmileyButton
                        onPress={() => this.props.smileyReaction({
                            showReason: false,
                            nav: this.props.navigation,
                            smiley: 'happy',
                            image: smilyeImages.veryHappy,
                            text: 'Thankyou for your response, we always wants our customer to be happy and more satisfied',
                            audioText: 'Thankyou for your response, we always wants our customers to be happy and more satisfied'
                        })}
                        smilyeImage={smilyeImages.veryHappy}
                        text='Happy'
                    />
                    <SmileyButton
                        onPress={() => this.props.smileyReaction({
                            showReason: false,
                            nav: this.props.navigation,
                            smiley: 'satisfied',
                            image: smilyeImages.happy,
                            text: 'Thankyou for your response, next time you will be more satisfied then now.',
                            audioText: 'Thankyou for your response, next time you will be more satisfied then now.'
                        })}
                        smilyeImage={smilyeImages.happy}
                        text='Satisfied'
                    />
                    <SmileyButton
                        onPress={() => this.props.smileyReaction({
                            showReason: true,
                            nav: this.props.navigation,
                            smiley: 'dissatisfied',
                            image: smilyeImages.sad,
                            text: '',
                            audioText: 'Can You Please submit the reason for your dissatisfaction?'
                        })}
                        smilyeImage={smilyeImages.sad}
                        text='Dissatisfied'
                    />
                    <SmileyButton
                        onPress={() => this.props.smileyReaction({
                            showReason: true,
                            nav: this.props.navigation,
                            smiley: 'angry',
                            image: smilyeImages.angry,
                            text: '',
                            audioText: 'OOps We are really sorry for our bad service, can you please send us the reason for your dissatisfaction?'
                        })}
                        smilyeImage={smilyeImages.angry}
                        text='Angry'
                    />
                </View>
                <Text style={{ fontSize: 20, color: '#0066ff' }}>Please Rate Our Service!!!</Text>
            </View>
        )

    }
}

const styles = {
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: '#e6ffff'
    },
    smilyeContainerStyle: {
        flexDirection: 'row'
    },
}

const mapStateToProps = (state) => {
    const { image, text, iconButton, loading } = state.smiley;
    return { image, text, iconButton, loading };
}

export default connect(mapStateToProps, {
    smileyReaction
})(Main);


