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
    SAVE_COMMENT
} from '../actions/types';

const INITIAL_STATE = {
    image: null,
    text: '',
    audioText: null,
    iconButton: null,
    error: '',
    loading: false,
    reason: false,
    location: 'tariq-road',
    locationSelected: false,
    smiley: null,
    showReason: null,
    navKey: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOCATION_UPDATE:
            return {
                ...state, [action.payload.prop]: action.payload.value
            }

        case SELECT_LOCATION:
            return {
                ...state,
                [action.payload.prop]: true
            }

        case SMILEY_REACTION:
            return {
                ...state,
                showReason: action.payload.showReason,
                smiley: action.payload.smiley,
                image: action.payload.image,
                text: action.payload.text,
                audioText: action.payload.audioText
            }

        case SAVE_RESPONSE:
            return {
                ...state,
                image: null,
                text: null,
                audioText: null,
                showReason: null,
                smiley: null,
                comment: null,
                navKey: null

            }
        case REASON_UPDATE:
            return {
                ...state,
                [action.payload.prop]: action.payload.value
            }
        case SAVE_REASON:
            return {
                ...state,
               reason: action.payload.reason,
               navKey: action.payload.navKey
            }
        case CHANGE_SMILEY:
            return {
                ...state,
                image: action.payload.image,
                text: action.payload.text,
                audioText: action.payload.text
            }
        case CHANGE_SMILEY_WITH_REASON:
            return {
                ...state,
                image: action.payload.image,
                // text: action.payload.text,
                audioText: action.payload.audioText,
                reason: true
            }
        case RESPONSE_RECORDED:
            return {
                ...state,
                image: action.payload.image,
                text: action.payload.text,
                iconButton: action.payload.iconButton
            }
        default:
            return state;
    }
}

