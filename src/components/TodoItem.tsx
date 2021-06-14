import React, { FC } from 'react';
import styled from 'styled-components';
import { TodoItemProps } from '../interfaces/componentProps';

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return <TodoItemWrapper>{todo}</TodoItemWrapper>;
};

const TodoItemWrapper = styled.div`
  border: 1px solid black;
  margin: 10px;
`;
