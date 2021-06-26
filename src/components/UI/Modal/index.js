/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styles from './Modal.module.scss';
import { Button } from '../Button';

function Modal({
  isModalOpen,
  children,
  closeModalHandlder,
  title,
  windowStyle,
}) {
  const stopPropagation = (e) => e.stopPropagation();
  const classNames = ['modal_container', 'modal_container_noWidth'].includes(
    windowStyle,
  )
    ? windowStyle
    : null;
  return (
    <>
      {isModalOpen && (
        <div className={styles.backdrop} onClick={closeModalHandlder}>
          <div className={styles[classNames]} onClick={stopPropagation}>
            <div className={styles.title}>{title}</div>
            <Button buttonStyle="btn--circular" onclick={closeModalHandlder}>
              x
            </Button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
