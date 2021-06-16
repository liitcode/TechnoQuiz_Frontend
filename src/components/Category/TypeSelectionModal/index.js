/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { closeTypeSelectionModal } from '../../../Redux/actions/actionCreators/category';
import { submitTypeSelectionModal } from '../../../Redux/actions/actionCreators/quiz';
import styles from './TypeSelectionModal.module.scss';

const difficulty = [
  { btnName: 'Easy', code: 'E' },
  { btnName: 'Medium', code: 'M' },
  { btnName: 'Hard', code: 'H' },
];

const mode = [
  { btnName: 'Practice', code: 'Practice', isTimed: false },
  { btnName: 'Timed', code: 'Timed', isTimed: true },
];

function TypeSelectionModal() {
  const dispatch = useDispatch();
  const [difficultyButton, setDiffcultyButton] = useState('');
  const [quizMode, setQuizMode] = useState('');
  const { categoryName, categoryId } = useSelector((state) => state.category);
  const { path } = useSelector((state) => state.quiz);
  const { isTypeSelectionModalOpen } = useSelector((state) => state.category);

  if (path) return <Redirect to={path} />;

  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  const closeModalWindowHandler = () => {
    setQuizMode('');
    setDiffcultyButton('');
    dispatch(closeTypeSelectionModal());
  };

  return (
    <>
      {isTypeSelectionModalOpen && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div className={styles.backdrop} onClick={closeModalWindowHandler}>
          <div
            className={styles.modal_container}
            role="button"
            onClick={stopPropagation}
          >
            {categoryName}
            <br />
            <div>Difficulty Selection</div>
            {difficulty.map(({ btnName, code }) => (
              <button
                type="button"
                key={code}
                onClick={() => setDiffcultyButton(code)}
              >
                {btnName}
              </button>
            ))}
            <div>Mode selection</div>
            {mode.map(({ btnName, code }) => (
              <button
                type="button"
                key={code}
                onClick={() => setQuizMode(code)}
              >
                {btnName}
              </button>
            ))}
            <br />
            {}
            <button
              type="submit"
              // eslint-disable-next-line eqeqeq
              disabled={!difficultyButton || !quizMode}
              onClick={() =>
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
              submit
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default TypeSelectionModal;
