/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import Styles from './PremiumCard.module.scss';
import { Button } from '../../UI/Button';

function PremiumCard({title,price,priceTag,description,onClick}) {
  return (
    <div className={Styles.premiumContainer}>
      <div className={title === 'Monthly' ? Styles.header : Styles.header_dark}>
        <p className={Styles.title}>{title}</p>
        <p className={Styles.subtitle}>Subscription</p>
        <p className={Styles.price}>{price}</p>
      </div>
      <div className={Styles.body}>
        <strong>{priceTag}</strong>
        <br /> <br />
        Our {title} plan grants access to <strong>all premium features</strong>,
        {description}
        <small className={Styles.currencyNotice}>
          (prices are marked in INR)
        </small>
      </div>
      <div className={Styles.footer}>
        <Button buttonStyle={title === 'Monthly' ? 'btn--premium' : 'btn--outline'} onclick={onClick}> Subscribe </Button>
      </div>
    </div>
  );
}

export default PremiumCard;
