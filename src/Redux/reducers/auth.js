/* eslint-disable func-names */
import {REGISTER_SUCCESS,REGISTER_FAIL,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT,UPDATE_PREMIUM_PLAN} from '../actions/actionType';

const user = JSON.parse(localStorage.getItem('user'));

const intitialState = user ? {isLoggedin : true, user, isPremium : user.isPremium, expiry : user.expiry} : {isLoggedin : false, user : 'null', isPremium : false};

export default function(state = intitialState,action) {
    const { type,payload } = action;
    switch (type){
        case REGISTER_SUCCESS :
            return {
                ...state,
                isLoggedin : false,
                redir : true
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
                isPremium : payload.user.data.isPremium,
                expiry : payload.user.data.expiry,
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
        case UPDATE_PREMIUM_PLAN : 
            return {
                ...state,
                isPremium : true,
                expiry : payload,
            };
        default :
            return state;               
    }    
}