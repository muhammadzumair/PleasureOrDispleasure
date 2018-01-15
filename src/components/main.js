import React, { Component } from 'react';
import { View, StatusBar, Text } from 'react-native';
import { SmileyButton } from './sharedComponents'
import { connect } from 'react-redux';
import {
    veryHappySmiley,
    happySmiley,
    sadSmiley,
    angrySmiley
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
                <KeepAwake />
                <StatusBar hidden />
                <Text style={{ fontSize:30, color: '#000066' }}>Pleasure Or Displeasure</Text>
                <View style={smilyeContainerStyle}>
                    <SmileyButton onPress={() => this.props.veryHappySmiley({ nav: this.props.navigation })} smilyeImage={smilyeImages.veryHappy} text='Happy' />
                    <SmileyButton onPress={() => this.props.happySmiley({ nav: this.props.navigation })} smilyeImage={smilyeImages.happy} text='Satisfaied' />


                    <SmileyButton onPress={() => this.props.sadSmiley({ nav: this.props.navigation })} smilyeImage={smilyeImages.sad} text='Disatisfaied' />
                    <SmileyButton onPress={() => this.props.angrySmiley({ nav: this.props.navigation })} smilyeImage={smilyeImages.angry} text='Angry' />
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
    console.log("pakistan: ", state)
    const { image, text, iconButton, loading } = state.smiley;
    return { image, text, iconButton, loading };
}

export default connect(mapStateToProps, {
    happySmiley,
    veryHappySmiley,
    sadSmiley,
    angrySmiley
})(Main);


