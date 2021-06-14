import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { App } from './src/components/App';
import { store } from './src/store';
import { fetchTodos } from './src/actions/todosActions';
import { userId } from './src/constants/user';

store.dispatch(fetchTodos(userId));

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
);
