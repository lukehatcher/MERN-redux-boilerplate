import { Todo } from '../interfaces/todo';
import { TodoActionTypes } from '../constants/actionTypes';

const initialState: Todo[] = [];

export function todosReducer(state = initialState, action): Todo[] {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return action.payload;
    case TodoActionTypes.ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
}
