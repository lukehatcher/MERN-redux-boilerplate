import React, { FC } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import styled from 'styled-components';
import { FooterProps } from '../interfaces/componentProps';
import { RootState } from '../reducers/rootReducer';

const selectTodo = (state: RootState) => state.todos.map((todo) => todo.text);

export const Footer: FC<FooterProps> = () => {
  // this footer uses the same state as the TodosList component BUT...
  // the parent App.jsx component does not rerender when this global todo state changes
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
