import {TodoList, Todo} from './proto.js';

export function doIt() {
  const list = TodoList.create();

  const todo = Todo.create();
  todo.name = "test";

  list.title = "Do the Dishes";
  list.todos = [todo];

  console.log(list.toJSON());
}
