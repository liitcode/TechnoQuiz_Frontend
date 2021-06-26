import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App';
import './index.css';
import storeConfig from './Redux/store/configureStore';
import ErrorFallback from './components/Shared/ErrorFallBack';

Sentry.init({
  dsn: 'https://f34c18a0aff64089881a9e8e7fc775d5@o878782.ingest.sentry.io/5830909',
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Provider store={storeConfig}>
      <App />
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root'),
);
