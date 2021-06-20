/* eslint-disable object-shorthand */
/* eslint-disable no-alert */
import React from 'react';
import { useSelector } from 'react-redux';
// import { placeOrder } from '../../Redux/actions/actionCreators/order';
import axios from 'axios';
import authHeader from '../../Redux/services/auth-header';
import logo from '../../assets/images/logo.png';
import { Button } from '../UI/Button';
import { orderUrl} from '../../Redux/services/apiUrl';

const Premium = () => { 

    // const dispatch = useDispatch();
    // const orderParams = useSelector((state)=>state.order.order);
    // console.log("Order Paramsss",orderParams)
    const name = useSelector((state)=>state.auth.user.username);


    const loadRazorpayModal = (src) => new Promise((resolve)=>{
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    })
    
    async function DisplayRazorpay(amount) {  
        const res = await loadRazorpayModal(
            "https://checkout.razorpay.com/v1/checkout.js"
            );
            if (!res) {
                window.location.reload();
                return;
            } 
        // dispatch(placeOrder(amount));     
        const order = await axios.post(orderUrl,{
            "amount" : amount,
        },{
            headers : authHeader()
        })
        const orderParams = order.data
                
        const options = {
            key: "rzp_test_Do1WvF8trhDnqu",
            amount : orderParams.amount.toString(),
            currency : orderParams.currency,
            name: "TechnoQuiz",
            description: "Premium Subscription",
            image: { logo },
            order_id : orderParams.orderId,
            prefill: {
                name: name,
                email: "support@technoquiz.com",
                contact: "9999999999",
            },
            theme: {
                color: "#242424",
            },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}



    // eslint-disable-next-line no-console
    console.log("PAYMENT");
        return(
            <div>
                Testing
                {/* <Button buttonStyle='btn--primary' onclick={() => { loadRazorpayModal() }}>Subscribe</Button> */}
                <Button buttonStyle='btn--primary' onclick={() => DisplayRazorpay(500)}>Subscribe</Button>
                <Button buttonStyle='btn--primary' onclick={() => DisplayRazorpay(5500)}>TEST</Button>
            </div>
        )
}


export default Premium;