import {TodoList, Todo} from '../todos/todo';
import {TransientDAL} from '../dal/transient-dal';
import {TodoServiceDALBacked} from '../todo-service/todo-service-dalbacked';

const store = new TransientDAL();

const service = new TodoServiceDALBacked(store);

const todos = [new Todo('take out trash', false)];
const list = new TodoList('Chores', todos);
service.createTodoList(list)
  .then(console.log);
