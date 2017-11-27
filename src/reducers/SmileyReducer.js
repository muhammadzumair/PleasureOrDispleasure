import {
    CHANGE_SMILEY,
    RESPONSE_RECORDED,
    CHANGE_SMILEY_MIC
} from '../actions/types';

const INITIAL_STATE = {
    image: null,
    text: null,
    iconButton: null,
    error: '',
    loading: false,
    mic: false
};

export default (state= INITIAL_STATE,action) => {
    switch(action.type){
        case CHANGE_SMILEY:
        return {
            ...state,
            image: action.payload.image,
            text: action.payload.text
        }
        case CHANGE_SMILEY_MIC:
        return {
            ...state,
            image: action.payload.image,
            text: action.payload.text,
            mic: true
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

