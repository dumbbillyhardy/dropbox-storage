import {Stringable} from '../stringable';

export class Todo implements Stringable {
  constructor(readonly content: string, readonly done: boolean) {}

  toString() {
    return `[${this.done?'x':' '}] ${this.content}`;
  }

  static fromString(input: string) {
    const str = input.trim();
    const done = str[1] === 'x';
    const content = str.substr(4);
    return new Todo(content, done);
  }
}

export class TodoList implements Stringable {
  constructor(readonly title: string, readonly todos: Todo[]) {}

  toString() {
    return `${this.title}\n${this.todos.map(t => t.toString()).join('\n')}`;
  }

  static fromString(str: string) {
    const lines = str.trim().split('\n');
    const title = lines[0];
    const todos = lines.slice(1).map(str => Todo.fromString(str));
    return new TodoList(title, todos);
  }
}
