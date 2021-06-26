import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Prompt } from 'react-router';
import styles from './Quiz.module.scss';
import Timer from './Timer';
import { Button } from '../UI/Button';
import { quizSubmission } from '../../Redux/actions/actionCreators/quiz';
import Modal from '../UI/Modal';

function Quiz(props) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerByUser, setSelectedAnswerByUser] = useState([]);
  const [startingSeconds, setStartingSeconds] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(null);
  const [isEndModalOpen, setIsEndModalOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [leave, setLeave] = useState(false);
  const [isTimeUpModalOpen, setIsTimeUpModalOpen] = useState(false);
  const dispatch = useDispatch();
  const {
    quizData: { data: quizDataList = [] },
    categoryName,
    quizMode,
    difficulty,
    categoryId,
    render
  } = useSelector((state) => state.quiz);
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
        setSecondsRemaining(() => secondsRemaining - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [startingSeconds, secondsRemaining]);


  if (!render) return <Redirect to='/category' />;

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
      if (quizDataList[i].correct[userAnswer] === 'true') {
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
  const QuizCompleteHandler = () => {
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
    ).then(() => {
      props.history.push('/quizsolution');
    })
  };
  useEffect(() => {
    if (secondsRemaining === 0) {
      QuizCompleteHandler();
    }
  }, [secondsRemaining]);

  // if (path) return <Redirect to={path} />;

  const quizSubmitBtnHandler = () => {
    setIsSubmitModalOpen(true);
    setLeave(true);
  };

  const quizCloseSubmitModalHandler = () => {
    setIsSubmitModalOpen(false);
    setLeave(false);
  };
  const quizEndBtnHandler = () => {
    setIsEndModalOpen(true);
    setLeave(true);
  };

  const quizCloseEndModalHandler = () => {
    setIsEndModalOpen(false);
    setLeave(true);
  };

  const quizTimeUpHandler = () => {
    setIsTimeUpModalOpen(true);
  };

  return (
    <>
      <Prompt
        when={!leave}
        message='Are Your Sure you want to leave this page?'
      />
      <div className={styles.quiz}>
        <div className={styles.stopWatch__MobileOnly}>
          {quizMode === 'Timed' && <Timer secondsRemaining={secondsRemaining} />}
        </div>
        <div className={styles.quiz__container}>
          <div className={styles.quiz__container__heading}>
            CATEGORY: {categoryName}
          </div>

          {quizDataList && quizDataList.length > 0 && (
            <div className={styles.quiz__container__question}>
              <div className={styles.quiz__container__currentquestion}>
                <div className={styles.quiz__container__currentquestion__no}>
                  {`Q${currentQuestionIndex + 1} out of ${quizDataList && quizDataList.length
                    }`}
                </div>
                <div className={styles.stopWatch__DesktopOnly}>
                  {quizMode === 'Timed' && (
                    <Timer secondsRemaining={secondsRemaining} />
                  )}
                </div>
              </div>
              <div className={styles.question}>
                {quizDataList[currentQuestionIndex].question}
              </div>

              {Object.keys(quizDataList[currentQuestionIndex].answers).map(
                (option) =>
                  quizDataList[currentQuestionIndex].answers[option] && (
                    <label key={option} className={styles.option} onChange={optionSelectionHandler} >
                      <input
                        type="radio"
                        value={option}
                        name={currentQuestionIndex}
                        checked={
                          option === selectedAnswerByUser[currentQuestionIndex]
                        }
                      />
                      {quizDataList[currentQuestionIndex].answers[option]}
                    </label>
                  ),
              )}
              <div className={styles.quiz__btnContainer}>
                <Button
                  type="button"
                  onclick={quizEndBtnHandler}
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
                    buttonStyle={currentQuestionIndex === 0 ? "btn--disabled" : "btn--quiz"}
                    isdisabled={currentQuestionIndex === 0}
                  >
                    Previous
                  </Button>
                  {quizDataList &&
                    quizDataList.length &&
                    currentQuestionIndex === quizDataList.length - 1 ? (
                    <Button
                      type="button"
                      onclick={quizSubmitBtnHandler}
                      buttonStyle="btn--primary"
                    >
                      Submit
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onclick={nextQuestionHandler}
                      buttonStyle="btn--primary"
                    >
                      Next
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        {isEndModalOpen && (
          <Modal
            isModalOpen={quizEndBtnHandler}
            closeModalHandlder={quizCloseEndModalHandler}
            title="Are you sure you want to end the Quiz?"
            windowStyle="modal_container_noWidth"
          >
            <div className={styles.modalBtn}>
              <Button
                buttonSize="btn--large"
                buttonColor="green"
                buttonStyle="btn--quiz"
                onclick={quizCloseEndModalHandler}
              >
                No
              </Button>
              <Button
                buttonSize="btn--large"
                buttonColor="red"
                buttonStyle="btn--primary"
                onclick={QuizCompleteHandler}
              >
                Yes
              </Button>
            </div>
          </Modal>
        )}

        {isSubmitModalOpen && (
          <Modal
            isModalOpen={quizSubmitBtnHandler}
            closeModalHandlder={quizCloseSubmitModalHandler}
            title="Are you sure you want to submit the Quiz?"
            windowStyle="modal_container_noWidth"
          >
            <div className={styles.modalBtn}>
              <Button
                buttonSize="btn--large"
                buttonColor="green"
                buttonStyle="btn--quiz"
                onclick={quizCloseSubmitModalHandler}
              >
                No
              </Button>
              <Button
                buttonSize="btn--large"
                buttonColor="red"
                buttonStyle="btn--primary"
                onclick={QuizCompleteHandler}
              >
                Yes
              </Button>
            </div>
          </Modal>
        )}
        {isTimeUpModalOpen && (
          <Modal
            isModalOpen={quizTimeUpHandler}
            title="Your Time is Up!!!"
            windowStyle="modal_container_noWidth"
          >
            <Button onclick={QuizCompleteHandler}>Continue</Button>
          </Modal>
        )}
      </div>
    </>
  );
}

export default Quiz;
