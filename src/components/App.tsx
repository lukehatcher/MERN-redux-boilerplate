import * as React from 'react';
import { Form } from './Form';
import { TodosList } from './TodosList';
import { Footer } from './Footer';

// interface Props {
//   text: string
// }

export const App: React.FC<any> = () => {
  return (
    <div>
      {console.log('rendered App component')}
      <Form />
      <TodosList />
      <Footer />
    </div>
  );
}


