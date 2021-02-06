const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/MERN-redux-boilerplate',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
).catch((err) => { console.error(err); });

const db = mongoose.connection;

db.on('connected', () => console.log('connected to MongoDB'));
db.on('error', (err) => console.error(err));

const ReduxBPSchema = new mongoose.Schema({
  userID: String,
  todos: [
    {
      id: Number,
      text: String,
      completed: Boolean,
    },
  ],
});

const ReduxBPData = mongoose.model('reduxBPdata', ReduxBPSchema);

// ========== db api functions ==========

const initNewUser = async (data) => {
  const doc = new ReduxBPData(data);
  try {
    await doc.save();
  } catch (err) {
    console.error(err);
  }
};

// initNewUser({
//   userID: 'luke',
//   todos: [{ id: 0, text: 'my todo1', completed: false },
//     { id: 1, text: 'my todo2', completed: false }],
// });

const nextTodoId = (todos) => {
  // helper function to find next id
  let max = -Infinity;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id > max) max = todos[i].id;
  }
  return max + 1;
};

const addTodo = async (userID, text) => {
  const doc = await ReduxBPData.findOne({ userID });
  const newTodoObj = { id: nextTodoId(doc.todos), text, completed: false };
  doc.todos.push(newTodoObj);
  await doc.save();
  return newTodoObj; // NEED TO RETURN SO I CAN UPDATE STATE
};

const fetchTodos = async (userID) => {
  try {
    const doc = await ReduxBPData.findOne({ userID });
    return doc.todos;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  initNewUser,
  addTodo,
  fetchTodos,
};
