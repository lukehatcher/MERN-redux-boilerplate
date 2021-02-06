import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveNewTodo } from '../actions/todosActions';

// import asyncThunkForTodoAddition from 'service1Thunk.js'

export default function Form() {
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
    <div>
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
    </div>
  );
}
