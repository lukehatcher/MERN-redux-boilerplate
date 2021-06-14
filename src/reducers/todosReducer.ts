const initialState = [];

export function todosReducer(state = initialState, action): any[] {
  switch (action.type) {
    case 'loadTodos':
      return action.payload; // full array of objects
    case 'addTodo':
      return [...state, action.payload];
    default:
      return state;
  }
}
