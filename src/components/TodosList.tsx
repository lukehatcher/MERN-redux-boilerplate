import * as React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from '../reducers/rootReducer';
import { TodoItem } from './TodoItem';
import styled from 'styled-components';

const selectTodos = (state: RootState) => state.todos.map((todo) => todo.text);

export const TodosList: React.FC<any> = () => {
  // const todoIds = useSelector(selectTodoIds, shallowEqual);
  const todos = useSelector(selectTodos, shallowEqual);

  return (
    <TodoListWrapper>
      <TodoListTitle>Todos</TodoListTitle>
      {todos.map((todo) => (
        <TodoItem key={Math.random()} todo={todo}></TodoItem>
      ))}
    </TodoListWrapper>
  );
};

const TodoListWrapper = styled.div`
  border: 1px solid black;
  margin: 15px;
`;

const TodoListTitle = styled.h1`
  font-size: 20px;
`;
