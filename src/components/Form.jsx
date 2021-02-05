import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// import asyncThunkForTodoAddition from 'service1Thunk.js'

export default function Form() {
  const [textInput, setTextInput] = useState('');
  const dispatch = useDispatch();

  const handleTextChange = function(e) {
    setTextInput(e.target.value);
  };

  const handleTextSubmit = function(e) {
    e.preventDefault();
    const trimmedText = textInput.trim();
    if (trimmedText) {
      // useDispatch(service1Thunk(trimmedText));
      dispatch({type: 'addTodo', payload: trimmedText});
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
