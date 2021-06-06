import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import styles from './LeftHeaderNavigation.module.scss';

function index() {
  return (
    <nav className={styles.nav_left}>
      <Logo />
      <ul className={styles.nav_left__list}>
        <li>
          <Link to="/" className={styles.nav_left__list__link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/category" className={styles.nav_left__list__link}>
            Category
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default index;
