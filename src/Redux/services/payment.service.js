/* eslint-disable camelcase */
import axios from 'axios';
import authHeader from './auth-header';
import { orderUrl,verifyUrl } from './apiUrl';

const order = (amount) =>
    axios.post(orderUrl, { 
        amount,
    },{
        headers: authHeader(),
    }
);

const verify = (razorpay_order_id,razorpay_payment_id,razorpay_signature,plan) =>
    axios.post(verifyUrl, {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        plan,
    },{
        headers: authHeader(),
    }
);

export default { order, verify };