import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';
import category from './category';
import quiz from './quiz';
import score from './score';

const rootReducer = combineReducers({
  auth,
  message,
  category,
  quiz,
  score,
});

export default rootReducer;
