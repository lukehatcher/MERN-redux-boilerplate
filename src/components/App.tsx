import React, { FC } from 'react';
import { Form } from './Form';
import { TodosList } from './TodosList';
import { Footer } from './Footer';

export const App: FC = () => {
  return (
    <>
      <Form />
      <TodosList />
      <Footer />
    </>
  );
};
