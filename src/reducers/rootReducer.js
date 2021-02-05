import { combineReducers } from 'redux';

import service1Reducer from './service1Reducer';

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `service1Reducer`
  todos: service1Reducer,
})

export default rootReducer;
