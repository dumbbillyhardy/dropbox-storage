import {html, render} from 'lit-html';
import {TodoList} from '../todos/todo';
import {TodoItem} from './todo-item';
import {QueryMixin} from './query-mixin';

export class TodoListItem extends QueryMixin(HTMLElement) {
  private _todoList?: TodoList;

  constructor() {
    super();
    const children = [TodoItem];
    this.attachShadow({mode: 'open'});
  }

  static get is() {
    return "todo-list";
  }
  static get observedAttributes() {
    return ["todo-list"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if(name === "todo-list") {
      this.todoList = TodoList.fromString(newValue);
    }
  }

  get todoList(): TodoList {
    return this._todoList;
  }

  set todoList(todoList: TodoList) {
    this._todoList = todoList;
    this.render();
  }

  render() {
    render(html`
        <h2>${this.todoList.title}</h2>
        <ul>
        ${this.todoList.todos.map(t => html`<li><todo-item todo=${t}></todo-item></li>`)}
        </ul>
    `, this.shadowRoot);
  }
}

customElements.define(TodoListItem.is, TodoListItem);
