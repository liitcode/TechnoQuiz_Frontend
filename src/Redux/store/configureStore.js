/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const middleware = [thunk];

const middlewareEnhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middleware, createLogger()))
    : composeWithDevTools(applyMiddleware(...middleware));

export default createStore(rootReducer, middlewareEnhancer);
