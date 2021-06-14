import React, { FC } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../reducers/rootReducer';
import { TodoItem } from './TodoItem';
import { TodoListProps } from '../interfaces/componentProps';

export const TodosList: FC<TodoListProps> = () => {
  const selectTodos = (state: RootState) => state.todos.map((todo) => todo.text);
  const todos = useSelector(selectTodos, shallowEqual);

  return (
    <TodoListWrapper>
      <TodoListTitle>Todos</TodoListTitle>
      {todos.map((todo) => (
        <TodoItemWrapper key={Math.random()}>
          <TodoItem todo={todo}></TodoItem>
        </TodoItemWrapper>
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

const TodoItemWrapper = styled.div``;
