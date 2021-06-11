/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Styles from './ModeModal.module.scss';

// eslint-disable-next-line react/prop-types
function ModeModal({ status }) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div className={Styles.backdrop}>
          <div className={Styles.mode}>
            <div className={Styles.mode__heading}>JAVASCRIPT</div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModeModal;
