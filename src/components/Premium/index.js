/* eslint-disable no-unused-vars */
/* eslint-disable object-shorthand */
/* eslint-disable no-alert */
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { placeOrder } from '../../Redux/actions/actionCreators/order';

import Styles from './Premium.module.scss';
import PremiumCard from './PremiumCard';

const Premium = () => {
  const dispatch = useDispatch();
  const success = useSelector((state) => state.order.success);
  const DisplayRazorpay = (amount) => dispatch(placeOrder(amount));

  return (
    <div>
      <h1 className= {Styles.heading}>Get started with a TechnoQuiz subscription that works for you</h1>
      <div className={Styles.cardContainer}>
        <PremiumCard
          title = 'Monthly'
          price = '₹450/mo'
          priceTag = 'Down from ₹500/month.'
          description = 'the best plan for short-term subscribers.'
          onClick = {() => DisplayRazorpay(450)}
         />
        <PremiumCard
         title = 'Yearly'
         price = '₹4800/yr'
         priceTag = 'Down from ₹6000/year.'
         description = 'This plan saves you over 60% in comparison to the monthly plan.'
         onClick = {() => DisplayRazorpay(4800)}
        />
      </div>
      {/* { success && <Modal/>} */}
    </div>
  );
};

export default Premium;
