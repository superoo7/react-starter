// @flow

import React from 'react';
import { render } from 'react-dom';
import App from './App';

const renderApp = () => {
  const ROOT_ELEMENT = '#root';
  const rootEl = document.querySelector(ROOT_ELEMENT);
  if (!(rootEl instanceof Element)) {
    throw new Error('invalid type');
  }
  render(<App />, rootEl);
};
renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
