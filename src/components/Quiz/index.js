import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './Quiz.module.scss';
import Timer from './Timer';
// import { submitTypeSelectionModal } from '../../Redux/actions/actionCreators/quiz';

function Quiz() {
  // const dispatch = useDispatch();
  const {
    quizData: { data: { data: quizDataList } = [] },
    categoryName,
  } = useSelector((state) => state.quiz);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerByUser, setSelectedAnswerByUser] = useState([]);
  const [startingSeconds, setStartingSeconds] = useState(1);
  const [secondsRemaining, setSecondsRemaining] = useState(0);

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
    // alert('Submit');
  };

  // const endTestHandler = () => {
  //   alert('EndTest');
  // };

  return (
    <div className={styles.quiz}>
      <Timer secondsRemaining={secondsRemaining} />
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
