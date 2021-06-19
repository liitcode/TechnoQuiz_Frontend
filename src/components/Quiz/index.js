/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styles from './Quiz.module.scss';
import Timer from './Timer';
import { quizSubmission } from '../../Redux/actions/actionCreators/quiz';

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerByUser, setSelectedAnswerByUser] = useState([]);
  const [startingSeconds, setStartingSeconds] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(0);
  const dispatch = useDispatch();
  const {
    quizData: { data: { data: quizDataList } = [] },
    categoryName,
    quizMode,
    difficulty,
    categoryId,
  } = useSelector((state) => state.quiz);

  const { path } = useSelector((state) => state.score);

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
        // eslint-disable-next-line no-shadow
        setSecondsRemaining((secondsRemaining) => secondsRemaining - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [startingSeconds, secondsRemaining]);

  if (path) return <Redirect to={path} />;

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

  const scoreCalculation = () => {
    let count = 0;
    for (let i = 0; i < quizDataList.length; i += 1) {
      const userAnswer = `${selectedAnswerByUser[i]}_correct`;
      if (quizDataList[i].correct[userAnswer]) {
        count += 1;
      }
    }
    let scoreCard;
    switch (quizMode) {
      case 'E':
        scoreCard = count;
        break;
      case 'M':
        scoreCard = count * 2;
        break;
      case 'H':
        scoreCard = count * 3;
        break;
      default:
        scoreCard = count;
    }
    return scoreCard;
  };
  const QuizSubmitHandler = () => {
    const userScore = scoreCalculation();
    dispatch(quizSubmission(difficulty, categoryId, userScore));
  };

  const endTestHandler = () => {
    alert('EndTest');
  };

  return (
    <div className={styles.quiz}>
      {quizMode === 'Timed' && <Timer secondsRemaining={secondsRemaining} />}
      <div className={styles.quiz__container}>
        <div className={styles.quiz__container__heading}>
          CATEGORY: {categoryName}
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
                    key={option}
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
          <button type="button" onClick={endTestHandler}>
            End Quiz
          </button>
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
