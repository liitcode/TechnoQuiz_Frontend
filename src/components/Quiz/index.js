/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styles from './Quiz.module.scss';
import Timer from './Timer';
import { Button } from '../UI/Button';
import { quizSubmission } from '../../Redux/actions/actionCreators/quiz';

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerByUser, setSelectedAnswerByUser] = useState([]);
  const [startingSeconds, setStartingSeconds] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(null);
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
    document.body.style.overflow = 'auto';
  });

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

  var scoreCalculation = () => {
    let count = 0;
    for (let i = 0; i < quizDataList.length; i += 1) {
      const userAnswer = `${selectedAnswerByUser[i]}_correct`;
      if (quizDataList[i].correct[userAnswer]) {
        count += 1;
      }
    }
    let scoreCard;
    let maxScore = quizDataList.length;
    switch (difficulty) {
      case 'E':
        scoreCard = count;
        break;
      case 'M':
        scoreCard = count * 2;
        maxScore *= 2;
        break;
      case 'H':
        scoreCard = count * 3;
        maxScore *= 3;
        break;
      default:
        scoreCard = count;
        maxScore = quizDataList.length;
    }
    return { scoreCard, maxScore };
  };
  useEffect(() => {
    if (secondsRemaining === 0) {
      const score = scoreCalculation();
      const userScore = score.scoreCard;
      const maxUserScore = score.maxScore;

      dispatch(
        quizSubmission(
          difficulty,
          categoryId,
          userScore,
          selectedAnswerByUser,
          maxUserScore,
        ),
      );
    }
  }, [secondsRemaining]);

  if (path) return <Redirect to={path} />;

  const QuizSubmitHandler = () => {
    const score = scoreCalculation();
    const userScore = score.scoreCard;
    const maxUserScore = score.maxScore;

    dispatch(
      quizSubmission(
        difficulty,
        categoryId,
        userScore,
        selectedAnswerByUser,
        maxUserScore,
      ),
    );
  };

  const endTestHandler = () => {
    const score = scoreCalculation();
    const userScore = score.scoreCard;
    const maxUserScore = score.maxScore;
    dispatch(
      quizSubmission(
        difficulty,
        categoryId,
        userScore,
        selectedAnswerByUser,
        maxUserScore,
      ),
    );
  };

  return (
    <div className={styles.quiz}>
      <div className={styles.stopWatch__MobileOnly}>
        {
          // quizMode === 'Timed' &&
          <Timer secondsRemaining={secondsRemaining} />
        }
      </div>
      <div className={styles.quiz__container}>
        <div className={styles.quiz__container__heading}>
          CATEGORY: {categoryName}
        </div>

        {quizDataList && quizDataList.length > 0 && (
          <div className={styles.quiz__container__question}>
            <div className={styles.quiz__container__currentquestion}>
              <div className={styles.quiz__container__currentquestion__no}>
                {`Q${currentQuestionIndex + 1} out of ${
                  quizDataList && quizDataList.length
                }`}
              </div>
              <div className={styles.stopWatch__DesktopOnly}>
                {
                  // quizMode === 'Timed' &&
                  <Timer secondsRemaining={secondsRemaining} />
                }
              </div>
            </div>
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
            <div className={styles.quiz__btnContainer}>
              <Button
                type="button"
                onclick={endTestHandler}
                buttonStyle="btn--outline"
                buttonColor="red"
              >
                End Quiz
              </Button>
              <div className={styles.quiz__prevNextBtn}>
                <Button
                  type="button"
                  className={styles.quiz__prevBtn}
                  onclick={previousQuestionHandler}
                  disabled={currentQuestionIndex === 0}
                >
                  Previous
                </Button>
                {quizDataList &&
                quizDataList.length &&
                currentQuestionIndex === quizDataList.length - 1 ? (
                  <Button type="button" onclick={QuizSubmitHandler}>
                    Submit
                  </Button>
                ) : (
                  <Button type="button" onclick={nextQuestionHandler}>
                    Next
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
