const initialState = [];

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'loadTodos':
      return action.payload; // full array of objects
    case 'addTodo':
      return [...state, action.payload];
    default:
      return state;
  }
}
