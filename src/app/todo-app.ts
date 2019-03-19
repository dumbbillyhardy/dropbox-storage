import {html, render} from 'lit-html';
import {TodoList} from '../todos/todo';
import {TodoListItem} from './todo-list';
import {QueryMixin} from './query-mixin';

export class TodoApp extends QueryMixin(HTMLElement) {
  private _todoLists?: TodoList[];

  constructor() {
    super();
    const children = [TodoListItem];
    this.attachShadow({mode: 'open'});
  }

  static get is() {
    return "todo-app";
  }
  static get observedAttributes() {
    return ["todo-lists"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = JSON.parse(newValue);
  }

  get todoLists(): TodoList[] {
    return this._todoLists;
  }

  set todoLists(todoLists: TodoList[]) {
    this._todoLists = todoLists;
    this.render();
  }

  render() {
    render(html`
        ${this.todoLists.map(list => html`
            <todo-list todo-list=${list}></todo-list>
            <br>
        `)}
    `, this.shadowRoot);
  }
}

customElements.define(TodoApp.is, TodoApp);
