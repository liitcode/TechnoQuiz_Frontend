import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import storeConfig  from './store/configureStore';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={storeConfig}>
      <App />
    </Provider>,
  document.getElementById('root')
);
