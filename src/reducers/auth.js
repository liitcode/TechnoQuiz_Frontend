/* eslint-disable func-names */
import {REGISTER_SUCCESS,REGISTER_FAIL,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT} from '../actions/actionType';

const user = JSON.parse(localStorage.getItem('user'));

const intitialState = user ? {isLoggedin : true, user} : {isLoggedin : false, user : 'null'};

export default function(state = intitialState,action) {
    const { type,payload } = action;
    switch (type){
        case REGISTER_SUCCESS :
            return {
                ...state,
                isLoggedin : false,
            };
        case REGISTER_FAIL :
            return {
                ...state,
                isLoggedin : false,
            }
        case LOGIN_SUCCESS :
            return {
                ...state,
                isLoggedin : true,
                user : payload.user,
            };  
        case LOGIN_FAIL : 
            return {
                ...state,
                isLoggedin : false,
                user : null,
            };
        case LOGOUT : 
            return {
                ...state,
                isLoggedin : false,
                user : null,
            };
        default :
            return state;               
    }    
}