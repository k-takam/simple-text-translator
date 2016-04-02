import css from '!style!css!sass!./../styles/style.sass';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app';
import Text from './reducers/text';

let store = createStore(Text);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
