import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import storeConfig from './Redux/store/configureStore';

ReactDOM.render(
  <Provider store={storeConfig}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
