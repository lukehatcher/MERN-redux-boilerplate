import * as React from 'react';
import { Form } from './Form';
import { TodosList } from './TodosList';
import { Footer } from './Footer';

export const App: React.FC = () => {
  return (
    <div>
      <Form />
      <TodosList />
      <Footer />
    </div>
  );
};
