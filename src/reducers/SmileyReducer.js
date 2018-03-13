import {
    CHANGE_SMILEY,
    RESPONSE_RECORDED,
    CHANGE_SMILEY_WITH_REASON,
    REASON_UPDATE,
    SAVE_REASON
} from '../actions/types';

const INITIAL_STATE = {
    image: null,
    text: null,
    audioText: null,
    iconButton: null,
    error: '',
    loading: false,
    // mic: false,
    reason: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REASON_UPDATE:
            return {
                ...state,
                [action.payload.prop]: action.payload.value
            }
        case SAVE_REASON:
            return {
                ...state,
                text: action.payload.text,
                audioText: action.payload.text,
                reason: '',
                mic: false

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

