import {
  QUIZ_DATA_ON_SUBMIT_SUCCESS,
  QUIZ_DATA_ON_SUBMIT_FAIL,
} from '../actions/actionType';

const intitialState = {
  quizData: [],
};

export default function (state = intitialState, action) {
  const { type, payload } = action;
  switch (type) {
    case QUIZ_DATA_ON_SUBMIT_SUCCESS:
      return {
        ...state,
        quizData: payload.quizDataFromAPi,
      };
    case QUIZ_DATA_ON_SUBMIT_FAIL:
      return {
        ...state,
        // isLoggedin : false, Code likhna Baki h
      };
    default:
      return state;
  }
}
