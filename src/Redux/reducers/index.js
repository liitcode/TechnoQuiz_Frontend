import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';
import category from './category';
import quiz from './quiz';
import score from './score';
import order from './order';

const rootReducer = combineReducers({
  auth,
  message,
  category,
  quiz,
  score,
  order
});

export default rootReducer;
