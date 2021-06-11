import React from 'react';
import styles from './Header.module.scss';
import LeftHeaderNavigation from './LeftHeaderNavigation';
import RightHeaderNavigationNonAuth from './RightHeaderNavigationNonAuth';
// import RightHeaderNavigationAuth from './RightHeaderNavigationAuth';

function header() {
  return (
    <div>
      <div className={styles.header}>
        <LeftHeaderNavigation />
        <RightHeaderNavigationNonAuth />
        {/* <RightHeaderNavigationAuth /> */}
      </div>
    </div>
  );
}

export default header;
