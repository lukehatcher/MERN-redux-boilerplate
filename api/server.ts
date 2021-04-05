import * as express from 'express';
import * as morgan from 'morgan';
import * as db from './database';

const PORT = 3000 || process.env.PORT;
const app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json()); // only needed for PUT/POST

app.listen(PORT, () => {
  console.log(`express server running on port ${PORT}`);
});

app.get('/api/todos', (req, res) => {
  const { userID } = req.query;
  db.fetchTodos(userID)
    .then((todos) => res.send(todos))
    .catch((err) => {
      console.error(err, 'error fetching todos');
      res.sendStatus(400);
    });
});

app.post('/api/todos', (req, res) => {
  const { userID, type, text } = req.body;
  switch (type) {
    case 'add':
      db.addTodo(userID, text)
        .then((response) => res.status(201).send(response)) // access via response.data on client
        .catch((err) => console.error(err, 'error posting new todo'));
      break;
    default:
      break;
  }
});
