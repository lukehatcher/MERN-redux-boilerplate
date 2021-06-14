import * as React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import styled from 'styled-components';

const selectTodo = (state): string[] => state.todos.map((todo) => todo.text);

export const Footer: React.FC = () => {
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
