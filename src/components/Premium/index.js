/* eslint-disable no-unused-vars */
/* eslint-disable object-shorthand */
/* eslint-disable no-alert */
import React,{ useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { BsCheckCircle } from 'react-icons/bs';
import { RiLoginBoxLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { placeOrder,closePaymentModal,setLoginModal,closeLoginModal } from '../../Redux/actions/actionCreators/order';
import Styles from './Premium.module.scss';
import PremiumCard from './PremiumCard';
import Modal from '../UI/Modal';
import { Button } from '../UI/Button';

const Premium = () => {
  const dispatch = useDispatch();
  const success = useSelector((state) => state.order.success)
  const loginModal = useSelector((state) => state.order.loginModal)
  const  log  = useSelector((state) => state.auth.isLoggedin);

  const CloseModal = () => dispatch(closePaymentModal());
  const CloseLoginModal = () => dispatch(closeLoginModal());
  const DisplayRazorpay = (amount) => log ? dispatch(placeOrder(amount)) : dispatch(setLoginModal());

  return (
    <div>
      <Modal
      isModalOpen = {loginModal}
      closeModalHandlder = {CloseLoginModal}
      title= 'You must Login first!'
      >
        <RiLoginBoxLine className={Styles.icon} size='12em'/>
        <Link to="/signin">
          <Button buttonStyle = 'btn--modal' buttonColor='primary' onclick={CloseLoginModal}>Log In</Button>
        </Link>
      </Modal>
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
      <Modal
        isModalOpen = {success}
        closeModalHandlder = {CloseModal}
        title= 'Your Payment is Succesful'
      >
        <BsCheckCircle className={Styles.icon} size='12em' color='rgb(62, 212, 62)'/>
        <Link to="/signin">
          <Button buttonStyle = 'btn--modal' buttonColor='green' onclick={CloseModal}>OK</Button>
        </Link>
      </Modal>
    </div>
  );
};

export default Premium;
