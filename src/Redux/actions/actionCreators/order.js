import { RAZORPAY_ORDER_SUCCESS, CLOSE_PAYMENT_MODAL } from '../actionType';
import payments from '../../services/payment.service';
import { razorpayScriptURL } from '../../services/apiUrl';


const createOptions = (orderParams,dispatch) => {
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
            payload : true
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
                dispatch({
                    type : RAZORPAY_ORDER_SUCCESS,
                    payload : createOptions(res.data,dispatch)
                })
            }
        )
    )

export const closePaymentModal = () => (dispatch) => {
    dispatch({
        type : CLOSE_PAYMENT_MODAL,
        payload : false,
    })
}