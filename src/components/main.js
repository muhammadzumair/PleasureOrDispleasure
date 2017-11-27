import React, {Component} from 'react';
import { View } from 'react-native';
import { SmileyButton } from './sharedComponents'
import { connect } from 'react-redux';
import {
    veryHappySmiley,
    happySmiley,
    sadSmiley,
    angrySmiley
} from '../actions';

class Main extends Component{
    componentDidMount(){
        console.log("props: ", this.props)
    }
    render(){
        const {containerStyle, smilyeContainerStyle} = styles;
        const smilyeImages = {
            veryHappy: require('../assets/vhappy.png'),
            happy: require('../assets/happy.png'),
            sad: require('../assets/sad.png'),
            angry: require('../assets/angry.png'),
        }
        return (
            <View style={containerStyle}>
                <View style={smilyeContainerStyle}>
                    <SmileyButton onPress={()=>this.props.veryHappySmiley({nav: this.props.navigation})} smilyeImage= {smilyeImages.veryHappy} text='Very Satisfaied'/>
                    <SmileyButton onPress={()=>this.props.happySmiley({nav: this.props.navigation})} smilyeImage= {smilyeImages.happy} text='Satisfaied' />
                </View>
                <View style={smilyeContainerStyle}>
                    <SmileyButton onPress={()=>this.props.sadSmiley({nav: this.props.navigation})} smilyeImage= {smilyeImages.sad} text='Disatisfaied' />
                    <SmileyButton onPress={()=>this.props.angrySmiley({nav: this.props.navigation})} smilyeImage= {smilyeImages.angry} text='Very Disatisfaied' />    
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
    console.log("pakistan: ", state)
    const {image, text, iconButton, loading} = state.smiley;
    return {image, text, iconButton, loading};
}

export default connect(mapStateToProps, {
    happySmiley,
    veryHappySmiley,
    sadSmiley,
    angrySmiley
}) (Main);

  
