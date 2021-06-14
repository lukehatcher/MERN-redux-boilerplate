import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveNewTodo } from '../actions/todosActions';
import styled from 'styled-components';

export const Form: React.FC<any> = () => {
  const [textInput, setTextInput] = useState('');
  const dispatch = useDispatch();

  const handleTextChange = (e) => setTextInput(e.target.value);

  const handleTextSubmit = (e) => {
    e.preventDefault();
    const trimmedText = textInput.trim();
    if (trimmedText) {
      const userID = 'luke';
      dispatch(saveNewTodo(userID, trimmedText));
    }
    setTextInput(''); // needed?
  };

  return (
    <FormContainer>
      <form onSubmit={handleTextSubmit}>
        <input
          className="text-input"
          placeholder="What needs to be done?"
          value={textInput}
          type="text"
          onChange={handleTextChange}
        />
        <button type="submit">submit</button>
      </form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
