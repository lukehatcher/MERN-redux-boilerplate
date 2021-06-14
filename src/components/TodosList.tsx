import * as React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from '../reducers/rootReducer';

const selectTodos = (state: RootState) => state.todos.map((todo) => todo.text);

export const TodosList: React.FC<any> = () => {
  // const todoIds = useSelector(selectTodoIds, shallowEqual);
  const todos = useSelector(selectTodos, shallowEqual);
  const type = useSelector((state: RootState) => state.todos);
  console.log(type, 'asdf');

  return (
    <div>
      {todos.map((todo) => (
        <div key={Math.random()}>{todo}</div>
      ))}
    </div>
  );
};
