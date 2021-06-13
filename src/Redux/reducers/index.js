import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';
import category from './category';

const rootReducer = combineReducers({
  auth,
  message,
  category,
});

export default rootReducer;
