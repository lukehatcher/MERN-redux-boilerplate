import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

const selectTodo = (state) => state.todos.map((todo) => todo.text);

export default function Footer() {
  // this footer uses the same state as the TodosList component BUT...
  // the parent App.jsx component does not rerender when this global todo state changes
  const todos = useSelector(selectTodo, shallowEqual);
  return (
    <div>
      {todos.map((todo) => (
        <span key={Math.random()}>
          {todo}
        </span>
      ))}
    </div>
  );
}
