import {TodoList} from '../todos/todo';

export interface TodoService {
  createTodoList(list: TodoList): Promise<TodoList>;
  readTodoList(id: string): Promise<TodoList>;
  updateTodoList(list: TodoList): Promise<TodoList>;
  deleteTodoList(id: string): Promise<void>;
}
