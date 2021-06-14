import axios from 'axios';

export const fetchTodos = (userID: string) => {
  return async (dispatch, _getState) => {
    const response = await axios.get('/api/todos', { params: { userID } });
    dispatch({ type: 'loadTodos', payload: response.data });
  };
};

export const saveNewTodo = (userID: string, text: string) => {
  return async (dispatch, _getState) => {
    const response = await axios.post('/api/todos', { userID, text, type: 'add' });
    dispatch({ type: 'addTodo', payload: response.data });
  };
};
