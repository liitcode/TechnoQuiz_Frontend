/* eslint-disable react/prop-types */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App';
import './index.css';
import storeConfig from './Redux/store/configureStore';

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
}

ReactDOM.render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Provider store={storeConfig}>
      <App />
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root'),
);
