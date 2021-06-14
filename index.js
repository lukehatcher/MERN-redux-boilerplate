import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './src/components/App';
import { store } from './src/store';
import { fetchTodos } from './src/actions/todosActions';

const userID = 'luke';
store.dispatch(fetchTodos(userID));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
