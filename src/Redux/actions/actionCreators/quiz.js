/* eslint-disable no-console */
import {
  QUIZ_DATA_ON_SUBMIT_SUCCESS,
  QUIZ_DATA_ON_SUBMIT_FAIL,
  SET_MESSAGE,
  QUIZ_SUBMIT_HANDLER_SUCCESS,
  QUIZ_SUBMIT_HANDLER_FAIL,
} from '../actionType';
import quizService from '../../services/quiz.service';

const decrypt = (data, salt) => {
  let o = data;
  o = decodeURI(o);
  if (salt && o.indexOf(salt) !== 0) throw new Error('object cannot be decrypted');
  o = o.substring(salt.length).split('');
  for (let i = 0, l = o.length; i < l; i += 1) {
    if (o[i] === '{') o[i] = '}';
    else if (o[i] === '}') o[i] = '{';
  }
  return JSON.parse(o.join(''));
};

export const submitTypeSelectionModal =
  (difficulty, quizMode, categoryId, categoryName) => (dispatch) =>
    quizService.quiz(difficulty, categoryId).then(
      (response) => {
        console.log("RESPONSSEEE",response)
        const quizData = decrypt(response.data,'F594D3AF69568CCC772C8B819535806CC935745B')
        console.log("QUIZ",quizData);
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
  (difficulty, categoryId, userScore, selectedAnswerByUser, maxUserScore) =>
  (dispatch) =>
    quizService.score(difficulty, categoryId, userScore).then(
      (response) => {
        dispatch({
          type: QUIZ_SUBMIT_HANDLER_SUCCESS,
          payload: { response, selectedAnswerByUser, userScore, maxUserScore },
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
