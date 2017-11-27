import {combineReducers} from 'redux';
import SmileyReducer from './SmileyReducer';

export default combineReducers({
    smiley: SmileyReducer
});