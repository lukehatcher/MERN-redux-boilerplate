const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('./database');

const PORT = 3001 || process.env.PORT;
const app = express();
const PUB_DIR = path.resolve(__dirname, '..', '..', 'public');

app.use(express.static(PUB_DIR));
app.use(morgan('dev'));
app.use(express.json()); // only needed for PUT/POST

app.listen(PORT, () => {
  console.log(`express server running on port ${PORT}`);
});

app.get('/api/todos', (req, res) => {
  const { userID } = req.query; // check
  db.fetchTodos(userID)
    .then((todos) => res.send(todos))
    .catch((err) => {
      console.error(err, 'error fetching todos');
      // res.sendStatus(400); // bad request code
    });
});

app.post('/api/todos', (req, res) => {
  const { userID, type, text } = req.body;
  switch (type) {
    case 'add':
      db.addTodo(userID, text)
        // normally would res.sendStatus here, instead send added data to update state
        .then((response) => res.status(201).send(response)) // access via response.data on client
        .catch((err) => console.error(err, 'error posting new todo'));
      break;
    // case 'init':
    //   db.initNewUser(userID)
    //     .then(() => res.sendStatus(201))
    //     .catch((err) => console.error(err, 'error init user data'));
    //   break;
    default:
      break;
  }
});
