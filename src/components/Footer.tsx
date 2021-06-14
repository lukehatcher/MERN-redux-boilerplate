import React, { FC } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import styled from 'styled-components';
import { FooterProps } from '../interfaces/componentProps';
import { RootState } from '../reducers/rootReducer';

export const Footer: FC<FooterProps> = () => {
  const selectTodo = (state: RootState) => state.todos.map((todo) => todo.text);
  const todos = useSelector(selectTodo, shallowEqual);

  return (
    <FooterContainer>
      <FooterTitle>Footer</FooterTitle>
      {todos.map((todo) => (
        <span key={Math.random()}>{todo}</span>
      ))}
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  border: 1px solid black;
`;

const FooterTitle = styled.h1`
  font-size: 20px;
`;
