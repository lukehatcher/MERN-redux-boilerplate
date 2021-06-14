import { combineReducers } from 'redux';
import { todosReducer } from './todosReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
