import React from 'react';
import Form from './Form';
import TodosList from './TodosList';
import Footer from './Footer';

export default function App() {
  return (
    <div>
      {console.log('rendered App component')}
      <Form />
      <TodosList />
      <Footer />
    </div>
  );
}
