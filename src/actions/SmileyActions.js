import firebase from 'firebase';
// import App from '../../App.js';
import {
    CHANGE_SMILEY,
    RESPONSE_RECORDED,
    CHANGE_SMILEY_MIC
}
from './types'
import { NavigationActions } from 'react-navigation';

const smilyeImages = {
    veryHappy: require('../assets/vhappy.png'),
    happy: require('../assets/happy.png'),
    sad: require('../assets/sad.png'),
    angry: require('../assets/angry.png'),
}

export const veryHappySmiley = ({nav}) => {
    return (dispatch) => {
        firebase.database().ref(`/response/veryHappy`)
        .push({
            timeStamp: firebase.database.ServerValue.TIMESTAMP,
            location: 'TariqRoad Branch'
        })
        .catch(()=>{
            console.log('server error')
        })
        .then(() => {
            console.log('response OK')
            dispatch({
                type: CHANGE_SMILEY,
                payload:{
                    image: smilyeImages.veryHappy,
                    text: 'Thank You For your review, we will make our service more better'
                }
            })
            nav.navigate('SmileyResponse');       
        });
    }
}

export const happySmiley = ({nav}) => {
    return (dispatch) => {
        firebase.database().ref(`/response/Happy`)
        .push({
            timeStamp: firebase.database.ServerValue.TIMESTAMP,
            location: 'TariqRoad Branch'
        })
        .catch(()=>{
            console.log('server error')
        })
        .then(() => {
            console.log('response OK')
            dispatch({
                type: CHANGE_SMILEY,
                payload:{
                    image: smilyeImages.happy,
                    text: 'Thank You For your review, next time you will be more satisfied than now.'
                }
            })
            nav.navigate('SmileyResponse');       
        });
    }
}

export const sadSmiley = ({nav}) => {
    return (dispatch) => {
        firebase.database().ref(`/response/Sad`)
        .push({
            timeStamp: firebase.database.ServerValue.TIMESTAMP,
            location: 'TariqRoad Branch'
        })
        .catch(()=>{
            console.log('server error')
        })
        .then(() => {
            console.log('response OK')
            dispatch({
                type: CHANGE_SMILEY_MIC,
                payload:{
                    image: smilyeImages.sad,
                    text: 'Sorry for bad service, please tell us the reason for your disatisfaction',
                    audioText: 'Sorry for bad service, please tell us the reason for your disatisfaction. Tap this mic icon for your response'
                }
            })
            nav.navigate('SmileyResponse');       
        });
    }
}

export const angrySmiley = ({nav}) => {
    return (dispatch) => {
        firebase.database().ref(`/response/Angry`)
        .push({
            timeStamp: firebase.database.ServerValue.TIMESTAMP,
            location: 'TariqRoad Branch'
        })
        .catch(()=>{
            console.log('server error')
        })
        .then(() => {
            console.log('response OK')
            dispatch({
                type: CHANGE_SMILEY_MIC,
                payload:{
                    image: smilyeImages.angry,
                    text: 'we are really sorry for your dissatisfaction, please tell us the reason for your disatisfaction',
                    audioText: 'we are really sorry for your dissatisfaction, please tell us the reason for your disatisfaction. Tap this mic icon for your response'          
                }
            })
            nav.navigate('SmileyResponse');       
        });
    }
}