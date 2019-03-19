import {html, render} from 'lit-html';
import {Todo} from '../todos/todo';
import {QueryMixin} from './query-mixin';

export class TodoItem extends QueryMixin(HTMLElement) {
  private _todo?: Todo;

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this._inputListener = (e) => {
      const content = this.$$("#text").value;
      const done = this.$$("#checkbox").checked;
      this.todo = new Todo(content, done);
      this.fire(TodoItem.changedEventName, this.todo);
    };
    this._deleteListener = (e) => {
      this.fire(TodoItem.deletedEventName, this.todo);
    };
  }

  static get is() {
    return "todo-item";
  }
  static get changedEventName() {
    return "todo-changed";
  }
  static get deletedEventName() {
    return "todo-deleted";
  }
  static get observedAttributes() {
    return ["todo"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if(name === 'todo') {
      this.todo = Todo.fromString(newValue);
    }
  }

  get todo(): Todo {
    return this._todo;
  }

  set todo(todo: Todo) {
    this._todo = todo;
    this.render();
  }

  render() {
    render(html`
      <input id="checkbox"
          type="checkbox"
          checked="${this.todo.done}"
          on-change="${this._inputListener}"/>
      <input id="text"
          type="text"
          value="${this.todo.content}"
          on-input="${this._inputListener}"/>
      <button on-click="${this._deleteListener}">Delete</button>
    `, this.shadowRoot);
  }
}

customElements.define(TodoItem.is, TodoItem);
