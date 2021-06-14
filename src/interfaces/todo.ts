export interface Todo {
  _id: string; // from MongoDb
  id: number;
  text: string;
  completed: boolean; // not used atm
}
