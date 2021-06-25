/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Errorfallback.module.scss';

function ErrorFallback() {
  return (
    <div role="alert" className={styles.error_container}>
      <div className={styles.error_heading}>Something went wrong</div>
      <div className={styles.error_message}>Please try after sometime</div>
    </div>
  );
}

export default ErrorFallback;
