/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Pagenotfound.module.scss';

function PageNotFound() {
  return (
    <div role="alert" className={styles.page_container}>
      <div className={styles.page_heading}>Page Not Found</div>
      <div className={styles.page_message}>Please visit different page</div>
    </div>
  );
}

export default PageNotFound;
