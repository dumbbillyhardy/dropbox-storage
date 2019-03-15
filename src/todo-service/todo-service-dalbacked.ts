import {DatabaseAbstractionLayer} from '../dal/dal';
import {Todo, TodoList} from '../todos/todo';
import {TodoService} from './todo-service';

export class TodoServiceDALBacked implements TodoService {
  constructor(private dal: DatabaseAbstractionLayer) {}

  createTodoList(list: TodoList): Promise<TodoList> {
    return this.dal.create(list.toString())
    .then((title) => {
      const todos = list.todos.map(t => new Todo(t.content, t.done));
      return new TodoList(title, todos);
    });
  }

  readTodoList(id: string): Promise<TodoList> {
    return this.dal.read(id).then(data => TodoList.fromString(data));
  }

  updateTodoList(list: TodoList): Promise<TodoList> {
    return this.dal.update(list.title, list.toString())
    .then(str => TodoList.fromString(str));
  }

  deleteTodoList(id: string): Promise<void> {
    return this.dal.delete(id).then(() => {});
  }
}
