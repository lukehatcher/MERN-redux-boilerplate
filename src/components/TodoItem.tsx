import React, { FC } from 'react';
import styled from 'styled-components';

interface TodoItemProps {
  todo: string;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return <TodoItemWrapper>{todo}</TodoItemWrapper>;
};

const TodoItemWrapper = styled.div`
  border: 1px solid black;
  margin: 10px;
`;
