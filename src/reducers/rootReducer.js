import { combineReducers } from 'redux';
import todosReducer from './todosReducer';

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `service1Reducer`
  todos: todosReducer,
});

export default rootReducer;
