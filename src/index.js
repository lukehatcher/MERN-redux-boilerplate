import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
// for async await polyfill
// see https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babel
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import store from './store';
import { fetchTodos } from './actions/todosActions';

const userID = 'luke';
store.dispatch(fetchTodos(userID));

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
