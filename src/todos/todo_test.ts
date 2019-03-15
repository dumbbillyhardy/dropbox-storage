//import {describe, it} from 'mocha';
import {expect} from 'chai';
import {TodoList, Todo} from './todo';

describe("Todo", () => {
  it('parses content of todos', () => {
    const todoStr = '[ ] take out trash';
    const todo = Todo.fromString(todoStr);
    expect(todo.content).to.deep.equal('take out trash');
  });

  it('parses incomplete todos', () => {
    const todoStr = '[ ] take out trash';
    const todo = Todo.fromString(todoStr);
    expect(todo.done).to.deep.equal(false);
  });

  it('parses complete todos', () => {
    const todoStr = '[x] take out trash';
    const todo = Todo.fromString(todoStr);
    expect(todo.done).to.deep.equal(true);
  });
});

describe("TodoList", () => {
  it('parses title of todo list', () => {
    const todoStr = 'Chores\n[ ] take out trash';
    const list = TodoList.fromString(todoStr);
    expect(list.title).to.deep.equal('Chores');
  });

  it('parses todos of todo list', () => {
    const todoStr = 'Chores\n[ ] take out trash\n[ ] do the dishes';
    const list = TodoList.fromString(todoStr);
    expect(list.todos).to.deep.equal([
      new Todo('take out trash', false),
      new Todo('do the dishes', false),
    ]);
  });
});
