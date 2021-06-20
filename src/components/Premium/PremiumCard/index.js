import React from 'react';
import Styles from './PremiumCard.module.scss';
import { Button } from '../../UI/Button';

function PremiumCard() {
  return (
    <div className={Styles.premiumContainer}>
      <div className={Styles.header}>
        <p className={Styles.title}>Monthly</p>
        <p className={Styles.subtitle}>Subscription</p>
        <p className={Styles.price}>₹450/mo</p>
      </div>
      <div className={Styles.body}>
        <strong>Down from ₹500/month</strong>
        <br />
        Our monthly plan grants access to <strong>all premium features</strong>,
        the best plan for short-term subscribers.
        <small className={Styles.currencyNotice}>
          (prices are marked in INR)
        </small>
      </div>
      <div className={Styles.footer}>
        <Button
          buttonStyle="btn--primary"
          // onclick={() => DisplayRazorpay(500)}
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
}

export default PremiumCard;
