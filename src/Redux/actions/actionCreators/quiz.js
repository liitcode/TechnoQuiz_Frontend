/* eslint-disable no-console */
import {
  QUIZ_DATA_ON_SUBMIT_SUCCESS,
  QUIZ_DATA_ON_SUBMIT_FAIL,
  SET_MESSAGE,
  QUIZ_SUBMIT_HANDLER_SUCCESS,
  QUIZ_SUBMIT_HANDLER_FAIL,
} from '../actionType';
import quizService from '../../services/quiz.service';

export const submitTypeSelectionModal =
  (difficulty, quizMode, categoryId, categoryName) => (dispatch) =>
    quizService.quiz(difficulty, categoryId).then(
      (quizData) => {
        dispatch({
          type: QUIZ_DATA_ON_SUBMIT_SUCCESS,
          payload: {
            quizDataFromAPi: quizData,
            categoryName,
            quizMode,
            difficulty,
            categoryId,
          },
        });
        return Promise.resolve();
      },
      (error) => {
        const message = error.toString();
        dispatch({
          type: QUIZ_DATA_ON_SUBMIT_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
        return Promise.reject();
      },
    );

export const quizSubmission =
  (difficulty, categoryId, userScore) => (dispatch) =>
    quizService.score(difficulty, categoryId, userScore).then(
      (response) => {
        dispatch({
          type: QUIZ_SUBMIT_HANDLER_SUCCESS,
          payload: response,
        });
        return Promise.resolve();
      },
      (error) => {
        const message = error.toString();
        dispatch({
          type: QUIZ_SUBMIT_HANDLER_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
        return Promise.reject();
      },
    );
