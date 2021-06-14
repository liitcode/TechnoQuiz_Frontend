/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import da from './quizData.json';
import styles from './Quiz.module.scss';

import { submitTypeSelectionModal } from '../../Redux/actions/actionCreators/quiz';

function Quiz() {
  const dispatch = useDispatch();
  // const [data, setData] = useState(da);
  const {
    quizData: { data: { data: quizDataList } = [] },
  } = useSelector((state) => state.quiz);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerByUser, setSelectedAnswerByUser] = useState([]);
  // const [time, setTime] = useState({ time: {}, seconds: 0 });
  // let [timer, setTimer] = useState(0);
  const [startingSeconds, setStartingSeconds] = useState(1);
  const [secondsRemaining, setSecondsRemaining] = useState(0);
  const [time, setTime] = useState({});

  useEffect(() => {
    dispatch(submitTypeSelectionModal());
  }, [dispatch]);

  // useEffect(() => {
  //   console.log(data);
  // });
  const secondsToTime = (secs) => {
    const hours = Math.floor(secs / (60 * 60));

    const divisorForMinutes = secs % (60 * 60);
    const minutes = Math.floor(divisorForMinutes / 60);

    const divisorForSeconds = divisorForMinutes % 60;
    const se = Math.ceil(divisorForSeconds);

    const obj = {
      h: hours,
      m: minutes,
      s: se,
    };
    return obj;
  };

  // const countDown = () => {
  //   // Remove one second, set state so a re-render happens.
  //   const { seconds } = time;
  //   const secondAfterRemovingOne = seconds - 1;
  //   setTime({
  //     ...time,
  //     time: secondsToTime(secondAfterRemovingOne),
  //     seconds: secondAfterRemovingOne,
  //   });

  //   // Check if we're at zero.
  //   if (seconds === 0) {
  //     clearInterval(timer);
  //   }
  // };

  // useEffect(() => {
  //   if (time.time.m) {
  //     timer = setInterval(countDown, 1000);
  //   }
  // }, [time.time.m]);
  useEffect(() => {
    if (quizDataList && quizDataList.length > 0) {
      setStartingSeconds(90 * quizDataList.length);
      setSecondsRemaining(90 * quizDataList.length);
    }
  }, [quizDataList]);

  useEffect(() => {
    let interval;
    if (secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining((secondsRemaining) => secondsRemaining - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [startingSeconds, secondsRemaining]);

  const previousQuestionHandler = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };
  const nextQuestionHandler = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const optionSelectionHandler = (e) => {
    const previousSelectedAnswers = [...selectedAnswerByUser];
    previousSelectedAnswers[currentQuestionIndex] = e.target.value;
    setSelectedAnswerByUser(previousSelectedAnswers);
  };
  const QuizSubmitHandler = () => {
    alert('Submit');
  };

  return (
    <div className={styles.quiz}>
      {/* <div>
        m: {time.time.m} s:{time.time.s}
      </div> */}
      <div className={styles.quiz__container}>
        <div className={styles.quiz__container__heading}>
          CATEGORY: JAVASCRIPT
        </div>
        <div className={styles.quiz__container__currentquestion}>
          {`Q${currentQuestionIndex + 1} out of ${
            quizDataList && quizDataList.length
          }`}
        </div>
        {quizDataList && quizDataList.length > 0 && (
          <div className={styles.quiz__container__question}>
            <div className={styles.question}>
              {quizDataList[currentQuestionIndex].question}
            </div>
            {Object.keys(quizDataList[currentQuestionIndex].answers).map(
              (option) =>
                quizDataList[currentQuestionIndex].answers[option] && (
                  <div
                    className={styles.option}
                    onChange={optionSelectionHandler}
                  >
                    <input
                      type="radio"
                      value={option}
                      name={currentQuestionIndex}
                      checked={
                        option === selectedAnswerByUser[currentQuestionIndex]
                      }
                    />
                    {quizDataList[currentQuestionIndex].answers[option]}
                  </div>
                ),
            )}
          </div>
        )}
        <div className={styles.quiz__nextbutton}>
          <button
            type="button"
            onClick={previousQuestionHandler}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          {quizDataList &&
          quizDataList.length &&
          currentQuestionIndex === quizDataList.length - 1 ? (
            <button type="button" onClick={QuizSubmitHandler}>
              Submit
            </button>
          ) : (
            <button type="button" onClick={nextQuestionHandler}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
