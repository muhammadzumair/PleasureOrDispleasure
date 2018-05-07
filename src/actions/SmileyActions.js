import firebase from 'firebase';
// import App from '../../App.js';
import {
    CHANGE_SMILEY,
    RESPONSE_RECORDED,
    CHANGE_SMILEY_WITH_REASON,
    REASON_UPDATE,
    SAVE_REASON,
    SELECT_LOCATION,
    LOCATION_UPDATE,
    SMILEY_REACTION,
    SAVE_RESPONSE,
    SAVE_COMMENT,
}
    from './types'
import { NavigationActions } from 'react-navigation';

const smilyeImages = {
    veryHappy: require('../assets/veryHappy.gif'),
    happy: require('../assets/happy.gif'),
    sad: require('../assets/Sad.gif'),
    angry: require('../assets/Angry.gif'),
}

export const locationUpdate = ({ prop, value }) => {
    return {
        type: LOCATION_UPDATE,
        payload: { prop, value }
    }
}

export const selectLocation = ({ prop, nav }) => {
    return (dispatch) => {
        dispatch({
            type: SELECT_LOCATION,
            payload: { prop }
        })
        nav.navigate('Main');
    }
}

export const smileyReaction = ({ showReason, nav, smiley, image, text, audioText }) => {
    return (dispatch) => {
        dispatch({
            type: SMILEY_REACTION,
            payload: {
                showReason,
                smiley,
                image,
                text,
                audioText
            }
        })
        nav.navigate('SmileyResponse');
    }
}

export const saveResponse = ({ location, smiley, reason, comment, nav, navKey}) => {
    return (dispatch) => {
        dispatch({
            type: SAVE_RESPONSE
        })
        nav.goBack(navKey);
        firebase.database().ref(`/${location}/${smiley}`)
            .push({
                reason: reason,
                comment: comment,
                timeStamp: firebase.database.ServerValue.TIMESTAMP
            })
            .catch(() => {
                console.log('server error')
            })
            .then(() => {
                console.log('response OK')

            });
    }
}

export const saveReason = ({reason, nav, navKey}) => {
    return (dispatch) => {
        dispatch({
            type: SAVE_REASON,
            payload: { reason, navKey }
        })
        if (reason==='comment'){
            nav.navigate('Comment')
        }
        else{
            nav.navigate('Suggestion')
        }
    }
}

export const reasonUpdate = ({prop, value}) => {
    return {
        type: REASON_UPDATE,
        payload: {prop, value}
    }
}

export const veryHappySmiley = ({ nav }) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_SMILEY,
            payload: {
                image: smilyeImages.veryHappy,
                text: 'Thank You For your review, we will make our service more better'
            }
        })
        nav.navigate('SmileyResponse');
        // firebase.database().ref(`location/response/veryHappy`)
        //     .push({
        //         timeStamp: firebase.database.ServerValue.TIMESTAMP,
        //         location: 'TariqRoad Branch'
        //     })
        //     .catch(() => {
        //         console.log('server error')
        //     })
        //     .then(() => {
        //         console.log('response OK')

        //     });
    }
}

export const happySmiley = ({ nav }) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_SMILEY,
            payload: {
                image: smilyeImages.happy,
                text: 'Thank You For your review, next time you will be more satisfied than now.'
            }
        })
        nav.navigate('SmileyResponse');
        firebase.database().ref(`location/response/Happy`)
            .push({
                timeStamp: firebase.database.ServerValue.TIMESTAMP,
                location: 'TariqRoad Branch'
            })
            .catch(() => {
                console.log('server error')
            })
            .then(() => {
                console.log('response OK')

            });
    }
}

export const sadSmiley = ({ nav }) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_SMILEY_WITH_REASON,
            payload: {
                image: smilyeImages.sad,
                // text: 'Sorry for bad service, please tell us the reason for your disatisfaction',
                audioText: 'Sorry for bad service, please tell us the reason for your disatisfaction. Tap this mic icon for your response'
            }
        })
        nav.navigate('SmileyResponse');
        firebase.database().ref(`location/response/Sad`)
            .push({
                timeStamp: firebase.database.ServerValue.TIMESTAMP,
                location: 'TariqRoad Branch'
            })
            .catch(() => {
                console.log('server error')
            })
            .then(() => {
                console.log('response OK')

            });
    }
}

export const angrySmiley = ({ nav }) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_SMILEY_WITH_REASON,
            payload: {
                image: smilyeImages.angry,
                // text: 'we are really sorry for your dissatisfaction, please tell us the reason for your disatisfaction',
                audioText: 'we are really sorry for your dissatisfaction, please tell us the reason for your disatisfaction. Tap this mic icon for your response'
            }
        })
        nav.navigate('SmileyResponse');
        firebase.database().ref(`location/response/Angry`)
            .push({
                timeStamp: firebase.database.ServerValue.TIMESTAMP,
                location: 'TariqRoad Branch'
            })
            .catch(() => {
                console.log('server error')
            })
            .then(() => {
                console.log('response OK')

            });
    }
}