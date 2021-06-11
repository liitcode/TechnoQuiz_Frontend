import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';
import Technoquizlogo from '../../../../assets/images/Technoquizlogo.png';

const Logo = () => (
  <Link className={styles.logo} to="/">
    <img src={Technoquizlogo} alt="Navigate to HomePage" />
  </Link>
);

export default Logo;
