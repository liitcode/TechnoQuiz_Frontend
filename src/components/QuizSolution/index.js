/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-brace-presence */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './QuizSolution.module.scss';

function QuizSolution() {
  const {
    quizData: { data: { data: quizDataList } = [] },
  } = useSelector((state) => state.quiz);
  const { selectedAnswerByUser, userScore, maxUserScore } = useSelector(
    (state) => state.score,
  );
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);

  const selectedQuestionHandler = (index) => {
    setSelectedQuestionIndex(index);
  };

  const correctAnswerOption = Object.keys(
    quizDataList[selectedQuestionIndex].correct,
  )
    .find((key) => quizDataList[selectedQuestionIndex].correct[key] === 'true')
    .split('_')
    .slice(0, 2)
    .join('_');
  return (
    <div className="scorePageContainer">
      <div className={styles.questionsContainer}>
        <div className={styles.questions}>
          {quizDataList.map((question, index) => (
            <div
              role="button"
              tabIndex={0}
              className={styles.question}
              key={question.id}
              onClick={() => selectedQuestionHandler(index)}
            >
              {`${index + 1}.`}
              <span
                className={styles.desktopOnly}
              >{` ${question.question}`}</span>
            </div>
          ))}
        </div>
        <div className={styles.questionwithOption}>
          <div
            className={styles.score}
          >{`You Scored ${userScore}/${maxUserScore}`}</div>
          <div className={styles.questionSolution}>
            <div className={styles.questionSolution__container}>
              {quizDataList[selectedQuestionIndex].question}
              <div
                className={
                  correctAnswerOption ===
                  selectedAnswerByUser[selectedQuestionIndex]
                    ? styles.AnswerSelectedByUser__containerCorrect
                    : styles.AnswerSelectedByUser__containerWrong
                }
              >
                <div className={styles.AnswerSelectedByUser}>
                  {quizDataList[selectedQuestionIndex].answers[
                    selectedAnswerByUser[selectedQuestionIndex]
                  ] ? (
                    quizDataList[selectedQuestionIndex].answers[
                      selectedAnswerByUser[selectedQuestionIndex]
                    ]
                  ) : (
                    <span style={{ color: 'black' }}>
                      You didnot attempt this question
                    </span>
                  )}
                </div>
                <div className={styles.AnswerSelectedByUser__label}>
                  You Chose
                </div>
              </div>
              <div className={styles.correctAnswer__container}>
                <div className={styles.correctAnswer}>
                  {
                    quizDataList[selectedQuestionIndex].answers[
                      correctAnswerOption
                    ]
                  }
                </div>
                <div className={styles.correctAnswer__label}>
                  Correct Answer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizSolution;
