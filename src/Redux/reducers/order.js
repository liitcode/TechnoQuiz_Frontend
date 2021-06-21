import { RAZORPAY_ORDER_SUCCESS,CLOSE_PAYMENT_MODAL } from '../actions/actionType';

const intitialState = {
    success : false,
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
        default : 
        return state;    
    }
}