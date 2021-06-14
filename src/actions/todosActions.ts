import axios from 'axios';

export function fetchTodos(userID) {
  return async function fetchTodosThunk(dispatch, getState) {
    const response = await axios.get('/api/todos', { params: { userID } });
    dispatch({ type: 'loadTodos', payload: response.data });
  };
}

export function saveNewTodo(userID, text) {
  return async function saveNewTodoThunk(dispatch, getState) {
    const response = await axios.post('/api/todos', { userID, text, type: 'add' });
    dispatch({ type: 'addTodo', payload: response.data });
  };
}
