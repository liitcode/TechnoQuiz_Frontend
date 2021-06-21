/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styles from './Modal.module.scss';

function Modal({ isModalOpen, children, closeModalHandlder,title }) {
const stopPropagation = (e) => e.stopPropagation();
  return (
    <>
         { isModalOpen &&
          <div className={styles.backdrop} onClick={closeModalHandlder}>
          <div
            className={styles.modal_container}
            onClick={stopPropagation}
          >
            <div className ={styles.title}>{title}</div>
            <button className = {styles.closeButton} type='button' onClick={closeModalHandlder}> x</button> 
            {children}
          </div>
        </div>}
    </>
  );
}

export default Modal;
