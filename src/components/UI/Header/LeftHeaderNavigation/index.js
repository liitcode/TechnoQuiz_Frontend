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
          <Link to="/category" className={styles.nav_left__list__link}>
            category
          </Link>
        </li>
        <li>
          <Link to="/quiz" className={styles.nav_left__list__link}>
            quiz
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default index;
