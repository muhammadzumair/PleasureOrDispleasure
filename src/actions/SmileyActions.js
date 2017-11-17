import firebase from 'firebase';
import {
    CHANGE_SMILEY
}
from './types'

export const changeSmiley = ({prop}) => {
    return (dispatch) => {
        
           .then(() => {
               dispatch({type: EMPLOYEE_CREATE})
               Actions.employeeList({type: 'reset'})
       });
   }
    // return {
    //     type: CHANGE_SMILEY,
    //     payload: {prop}

    // }
}