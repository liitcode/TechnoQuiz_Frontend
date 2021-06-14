/* eslint-disable no-console */
import {
  QUIZ_DATA_ON_SUBMIT_SUCCESS,
  QUIZ_DATA_ON_SUBMIT_FAIL,
  SET_MESSAGE,
} from '../actionType';
import quizService from '../../services/quiz.service';

export const submitTypeSelectionModal = (difficulty, category) => (dispatch) =>
  quizService.quiz(difficulty, category).then(
    (quizData) => {
      dispatch({
        type: QUIZ_DATA_ON_SUBMIT_SUCCESS,
        payload: { quizDataFromAPi: quizData },
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
