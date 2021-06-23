import { RAZORPAY_ORDER_SUCCESS,CLOSE_PAYMENT_MODAL,SET_LOGIN_MODAL,CLOSE_LOGIN_MODAL } from '../actions/actionType';

const intitialState = {
    success : false,
    loginModal : false,
};

export default function (state = intitialState,action) {
    const { type,payload } = action;
    switch(type) {
        case RAZORPAY_ORDER_SUCCESS :
            return{
                ...state,
                success : payload
            }
        case CLOSE_PAYMENT_MODAL :
            return{
                ...state,
                success : payload
            }  
        case SET_LOGIN_MODAL :
            return{
                ...state,
                loginModal : payload
            }   
        case CLOSE_LOGIN_MODAL :
            return{
                ...state,
                loginModal : payload
            }            
        default : 
        return state;    
    }
}