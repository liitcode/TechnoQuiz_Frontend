import { DateTime } from 'luxon';
import { RAZORPAY_ORDER_SUCCESS, CLOSE_PAYMENT_MODAL,SET_LOGIN_MODAL,CLOSE_LOGIN_MODAL,UPDATE_PREMIUM_PLAN } from '../actionType';
import payments from '../../services/payment.service';
import { razorpayScriptURL } from '../../services/apiUrl';


const createOptions = (orderParams,dispatch) => {
    const dateCreator = () => {
      const month =  orderParams.amount === 45000 ? 1 : 12;
        return DateTime.now().plus({ months: month }).toISODate();
    }
    const options =   {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      amount: orderParams.amount.toString(),
      currency: orderParams.currency,
      name: 'TechnoQuiz',
      description: 'Premium Subscription',
      order_id: orderParams.orderId,
      "handler": function (response){
        if(response)
        dispatch({
            type : RAZORPAY_ORDER_SUCCESS,
            payload : true,
        })
        dispatch({
            type : UPDATE_PREMIUM_PLAN, 
            payload : dateCreator(),
        })
      },
      prefill: {
      name: 'TechnoQuiz',
      email: 'support@technoquiz.com',
      contact: '9999999999',
      },
      theme: {
      color: '#242424',
      },
  }
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}

const loadRazorpayModal = (src) =>
    new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
});


export const placeOrder = (amount) => (dispatch) => 
    loadRazorpayModal(razorpayScriptURL).then(
        payments.order(amount).then(
            (res) => {
               createOptions(res.data,dispatch)
            }
        )
    );

export const closePaymentModal = () => (dispatch) => {
    dispatch({
        type : CLOSE_PAYMENT_MODAL,
        payload : false,
    })
};

export const setLoginModal = () => (dispatch) => {
    dispatch({
        type : SET_LOGIN_MODAL,
        payload : true,
    });
};

export const closeLoginModal = () => (dispatch) => {
    dispatch({
        type : CLOSE_LOGIN_MODAL,
        payload : false,
    });
};

export const updatePremium = (expiry) => (dispatch) => {
    dispatch({
        type : UPDATE_PREMIUM_PLAN,
        payload : expiry
    })
}