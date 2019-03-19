import {TodoList, Todo} from '../todos/todo';
import {TransientDAL} from '../dal/transient-dal';
import {DropboxDAL} from '../dal/dropbox-dal';
import {TodoServiceDALBacked} from '../todo-service/todo-service-dalbacked';
import {Dropbox} from 'dropbox';
import {TodoApp} from '../app/todo-app';

const store = new TransientDAL();

const service = new TodoServiceDALBacked(store);

const todos = [new Todo('take out trash', false)];
const list = new TodoList('Chores', todos);
service.createTodoList(list)
  .then(console.log);


const API_KEY = "fpcdyqdlll231rq";
const accessToken = getAccessToken();
const dropbox = new Dropbox({
  clientId: API_KEY,
  accessToken,
});
if(accessToken == null) {
  document.body.innerHTML = `<a href=${getAuthUrl()}>Authenticate with dropbox</a>`;
}
const dropboxStore = new DropboxDAL(dropbox);
const dropboxService = new TodoServiceDALBacked(dropboxStore);
dropboxStore.getAllIds().then((files) => {
  return Promise.all(files.map((file) => dropboxService.readTodoList(file)));
})
  .then((todolists: TodoList[]) => {
    const app = document.querySelector('todo-app') as any as TodoApp;
    app.todoLists = todolists;
  });

export function getAuthUrl() {
  return dropbox.getAuthenticationUrl(window.location.origin + window.location.pathname);
}

//const authUrl = window.location.origin + window.location.pathname;

function getAccessToken() {
  const accessToken = window.localStorage.getItem("access_token");
  if(accessToken) {
    return accessToken;
  }
  const hashParams = new URLSearchParams(window.location.hash.replace("#", "?"));
  if(hashParams.has("access_token")) {
    const accessToken = hashParams.get("access_token");
    window.localStorage.setItem("access_token", accessToken);
    return accessToken;
  }
}
