import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost/MERN-redux-boilerplate', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.error(err);
  });

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

// ========== db controller functions ==========

interface newTodoObj {
  id: number;
  text: string;
  completed: boolean;
}

export const nextTodoId = (todos: any[]): number => {
  // helper function to find next id
  let max = -Infinity;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id > max) max = todos[i].id;
  }
  return max + 1;
};

export const addTodo = async (userID: string, text: string): Promise<newTodoObj> => {
  const doc: any = await ReduxBPData.findOne({ userID });
  const obj = { id: nextTodoId(doc.todos), text, completed: false };
  doc.todos.push(obj);
  await doc.save();
  return obj;
};

export const fetchTodos = async (userID: any): Promise<any> => {
  // not actually any for the param
  try {
    const doc: any = await ReduxBPData.findOne({ userID });
    return doc.todos;
  } catch (err) {
    console.error(err);
  }
};

// ======== example of seeding db with a user ========

// const initNewUser = async (data) => {
//   const doc = new ReduxBPData(data);
//   try {
//     await doc.save();
//   } catch (err) {
//     console.error(err);
//   }
// };

// example seeding of db
// initNewUser({
//   userID: 'luke',
//   todos: [{ id: 0, text: 'my todo1', completed: false },
//     { id: 1, text: 'my todo2', completed: false }],
// });
