/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import Styles from './Modal.module.scss';
import { closeTypeSelectionModal } from '../../../Redux/actions/actionCreators/category';
// eslint-disable-next-line react/prop-types
function ModeModal({ isModalOpen, children, closeModalHandlder }) {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && (
        <div className={Styles.backdrop} onClick={closeModalHandlder}>
          <div className={Styles.mode}>{children}</div>
        </div>
      )}
    </>
  );
}

export default ModeModal;
