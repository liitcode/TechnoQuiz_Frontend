import {
  QUIZ_SUBMIT_HANDLER_SUCCESS,
  QUIZ_SUBMIT_HANDLER_FAIL,
} from '../actions/actionType';

const intitialState = { path: '' };

export default function (state = intitialState, action) {
  const { type, payload } = action;
  switch (type) {
    case QUIZ_SUBMIT_HANDLER_SUCCESS:
      return {
        ...state,
        path: '/quizsolution',
        selectedAnswerByUser: payload.selectedAnswerByUser,
        userScore: payload.userScore,
        maxUserScore: payload.maxUserScore,
      };
    case QUIZ_SUBMIT_HANDLER_FAIL:
      return {
        ...state,
        // isLoggedin : false, Code likhna Baki h
      };
    default:
      return state;
  }
}
