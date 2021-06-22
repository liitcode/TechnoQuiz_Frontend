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
import Modal from '../../UI/Modal'

import styles from './TypeSelectionModal.module.scss';

const difficulty = [
  { btnName: 'Easy', code: 'E', disabled: false },
  { btnName: 'Medium', code: 'M', disabled: false },
  { btnName: 'Hard', code: 'H', disabled: true },
];

function TypeSelectionModal() {
  const dispatch = useDispatch();
  const [difficultyButton, setDiffcultyButton] = useState('E');
  const [quizMode, setQuizMode] = useState('Practice');
  const [isTimed, setIstimed] = useState(false);
  const { categoryName, categoryId } = useSelector((state) => state.category);
  const { path } = useSelector((state) => state.quiz);
  const { isTypeSelectionModalOpen } = useSelector((state) => state.category);


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

  const ClickableLabel = (heading, title, onChange, id) => (
    <label
      className={styles.Switch_Label}
      onClick={() => onChange(title)}
      htmlFor="switch"
      key={id}
    >
      {heading}
    </label>
  );
  const ConcealedRadio = (value, selected, disabled) => (
    <input
      className={styles.Switch_Radio}
      type="radio"
      id="switch"
      defaultChecked={selected === value}
      disabled={disabled}
    />
  );

  const ToggleSwitch = () => {
    const handleChange = (btnName) => setDiffcultyButton(btnName);
    const selectionStyle = () => ({
      left: `${(['E', 'M', 'H'].indexOf(difficultyButton) / 3) * 100}%`,
    });
    return (
      <div className={styles.Switch}>
        {difficulty.map((val) => (
          <div key={val.code}>
            <span>
              {ConcealedRadio(
                val.code,
                difficultyButton,
                val.code,
                val.disabled,
              )}
              {ClickableLabel(val.btnName, val.code, handleChange, val.code)}
            </span>
          </div>
        ))}
        <span className={styles.Switch_Selection} style={selectionStyle()} />
      </div>
    );
  };

  const modeToggle = () => {
    setIstimed(!isTimed);
    setQuizMode(!isTimed ? 'Timed' : 'Practice');
  };

  return (
    <>
        <Modal  
        isModalOpen = {isTypeSelectionModalOpen}  
        closeModalHandlder = {closeModalWindowHandler}
        title = {categoryName}
        >
            <ToggleSwitch />
            <div className={styles.modecontainer}>
              <div className={styles.imgcontainer}>
                <img src={Practice} alt="Practice Mode" />
              </div>
              <div className="modeToggle">
                <label className={styles.toggle_switch}>
                  <input
                    type="checkbox"
                    checked={isTimed}
                    onChange={modeToggle}
                  />
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
