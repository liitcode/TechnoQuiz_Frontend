import { RAZORPAY_ORDER_SUCCESS , RAZORPAY_ORDER_FAIL , SET_MESSAGE } from '../actionType';
import payments from '../../services/payment.service';

export const placeOrder = (amount) => (dispatch) => 
    payments.order(amount).then(
        (res) => {
            dispatch({
                type : RAZORPAY_ORDER_SUCCESS,
                payload : {order : res.data},
        });
        return Promise.resolve();
    },(error) => {
        const message = error.toString();
        dispatch({
            type : RAZORPAY_ORDER_FAIL
        });
        dispatch({
            type : SET_MESSAGE,
            payload : message
        });
        return Promise.reject();
    }
)