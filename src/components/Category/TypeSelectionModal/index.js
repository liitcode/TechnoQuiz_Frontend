/* eslint-disable no-unused-vars */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { closeTypeSelectionModal } from '../../../Redux/actions/actionCreators/category';
import { submitTypeSelectionModal } from '../../../Redux/actions/actionCreators/quiz';
import Practice from '../../../assets/images/practice.png';
import Timed from '../../../assets/images/timed.png';
import { Button } from '../../UI/Button';
import Modal from '../../UI/Modal';

import styles from './TypeSelectionModal.module.scss';

function TypeSelectionModal() {
  const dispatch = useDispatch();
  const [difficultyButton, setDiffcultyButton] = useState('E');
  const [quizMode, setQuizMode] = useState('Practice');
  const [isTimed, setIstimed] = useState(false);
  const { categoryName, categoryId, isTypeSelectionModalOpen } = useSelector(
    (state) => state.category,
  );
  const { path } = useSelector((state) => state.quiz);
  const { isPremium } = useSelector((state) => state.auth);

  const difficulty = [
    { btnName: 'Easy', code: 'E', disabled: false },
    { btnName: 'Medium', code: 'M', disabled: false },
    { btnName: 'Hard', code: 'H', disabled: !isPremium },
  ];

  useEffect(() => {
    if (isTypeSelectionModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isTypeSelectionModalOpen]);
  if (path) return <Redirect to={path} />;
  const closeModalWindowHandler = () => {
    setIstimed(false);
    setQuizMode('Practice');
    setDiffcultyButton('E');
    dispatch(closeTypeSelectionModal());
  };

  const ToggleSwitch = () => {
    const handleChange = (btnName) => setDiffcultyButton(btnName);
    return (
      <>
        <div className={styles.switch}>
          {difficulty.map((val) => (
            <Button
              buttonStyle={
                difficultyButton === val.code
                  ? 'btn--switch-red'
                  : 'btn--switch'
              }
              isdisabled={val.disabled}
              onclick={() => handleChange(val.code)}
            >
              {val.btnName}
            </Button>
          ))}
        </div>
        {/* {!isPremium && (
          <div style={{ marginTop: '-37px' }}>
            *Hard is available to Premium users only
          </div>
        )} */}
      </>
    );
  };

  const modeToggle = () => {
    setIstimed(!isTimed);
    setQuizMode(!isTimed ? 'Timed' : 'Practice');
  };

  return (
    <>
      <Modal
        isModalOpen={isTypeSelectionModalOpen}
        windowStyle="modal_container"
        closeModalHandlder={closeModalWindowHandler}
        title={categoryName}
      >
        <ToggleSwitch />
        <div className={styles.modecontainer}>
          <div className={styles.imgcontainer}>
            <img src={Practice} alt="Practice Mode" />
          </div>
          <div className="modeToggle">
            <label className={styles.toggle_switch}>
              <input type="checkbox" checked={isTimed} onChange={modeToggle} />
              <span className={styles.switchmode}>
                {isTimed ? 'Timed' : 'Practice'}
              </span>
            </label>
          </div>
          <div className={styles.imgcontainer}>
            <img src={Timed} alt="Timed Mode" />
          </div>
        </div>
        <br />
        <Button
          buttonStyle="btn--modal"
          className="styles.modalsubmit"
          type="submit"
          disabled={!difficultyButton || !quizMode}
          onclick={() =>
            dispatch(
              submitTypeSelectionModal(
                difficultyButton,
                quizMode,
                categoryId,
                categoryName,
              ),
            )
          }
        >
          START
        </Button>
      </Modal>
    </>
  );
}

export default TypeSelectionModal;
