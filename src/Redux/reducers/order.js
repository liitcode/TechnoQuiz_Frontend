import { RAZORPAY_ORDER_SUCCESS } from '../actions/actionType';

const intitialState = {
    order : [],
    succes : false
};

export default function (state = intitialState,action) {
    const { type,payload } = action;
    switch(type) {
        case RAZORPAY_ORDER_SUCCESS :
            return{
                ...state,
                succes : payload
            }
        case 'TEST' :
            return{
                ...state,
                order : payload
            }    
        default : 
        return state;    
    }
}