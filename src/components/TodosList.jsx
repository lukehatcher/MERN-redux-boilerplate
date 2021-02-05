import React from 'react';
import { useSelector, shallowEqual } from 'react-redux'

// selector function
// const selectTodoIds = (state) => state.todos.map((todo) => todo.id);
const selectTodos = (state) => state.todos;

export default function TodosList() {

  // const todoIds = useSelector(selectTodoIds, shallowEqual);
  const todos = useSelector(selectTodos, shallowEqual);

  return (
    <div>
      {todos.map((todo) => <p>{todo}</p>)}
    </div>
  )
}
