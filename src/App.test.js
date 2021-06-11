import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './Redux/store/configureStore';
import App from './App';

test('renders learn react link', () => {
  Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
    set: () => {},
  });
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  expect(getByText('Sign In')).toBeInTheDocument();
});
