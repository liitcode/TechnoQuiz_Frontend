import { RAZORPAY_ORDER_SUCCESS , RAZORPAY_ORDER_FAIL  } from '../actions/actionType';

const intitialState = {
    order : [],
};

export default function (state = intitialState,action) {
    const { type,payload } = action;
    switch(type) {
        case RAZORPAY_ORDER_SUCCESS :
            return{
                ...state,
                order : payload.order
            }
        case RAZORPAY_ORDER_FAIL :
            return{
                ...state,
            }    
        default : 
        return state;    
    }
}