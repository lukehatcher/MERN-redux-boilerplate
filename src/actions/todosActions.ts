import axios from 'axios';
import { TodoActionTypes } from '../constants/actionTypes';

export const fetchTodos = (userID: string) => {
  return async (dispatch, _getState) => {
    const response = await axios.get('/api/todos', { params: { userID } });
    dispatch({ type: TodoActionTypes.FETCH_TODOS, payload: response.data });
  };
};

export const saveNewTodo = (userID: string, text: string) => {
  return async (dispatch, _getState) => {
    const response = await axios.post('/api/todos', { userID, text, type: 'add' });
    dispatch({ type: TodoActionTypes.ADD_TODO, payload: response.data });
  };
};
