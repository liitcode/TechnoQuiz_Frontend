import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';
import category from './category';
import quiz from './quiz';

const rootReducer = combineReducers({
  auth,
  message,
  category,
  quiz,
});

export default rootReducer;
