const initialState = []

export default function service1Reducer(state = initialState, action) {
  switch (action.type) {
    case 'addTodo':
      return [...state, action.payload];
    default:
      return state;
  }
}

// normally have thunk here that dispatches the action