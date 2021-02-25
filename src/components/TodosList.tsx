import * as React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

// selector function
// const selectTodoIds = (state) => state.todos.map((todo) => todo.id);
const selectTodos = (state): string[] => state.todos.map((todo) => todo.text);

export const TodosList: React.FC<any> = () => {
  // const todoIds = useSelector(selectTodoIds, shallowEqual);
  const todos = useSelector(selectTodos, shallowEqual);

  return (
    <div>
      {todos.map((todo) => <div key={Math.random()}>{todo}</div>)}
    </div>
  );
}
