import {TodoList, Todo} from '../todos/todo';
import {TransientDAL} from '../dal/transient-dal';
import {DropboxDAL} from '../dal/dropbox-dal';
import {TodoServiceDALBacked} from '../todo-service/todo-service-dalbacked';
import {Dropbox} from 'dropbox';

const store = new TransientDAL();

const service = new TodoServiceDALBacked(store);

const todos = [new Todo('take out trash', false)];
const list = new TodoList('Chores', todos);
service.createTodoList(list)
  .then(console.log);


const API_KEY = "fpcdyqdlll231rq";
const dropbox = new Dropbox({
  clientId: API_KEY,
  accessToken: "8I0f3Ll3VugAAAAAAAAUoWn2TQpaLKgLOhKLg10rXry5nTc9GZTY2AxRil9Ahkn2"
});
const dropboxStore = new DropboxDAL(dropbox);
const dropboxService = new TodoServiceDALBacked(dropboxStore);
dropboxStore.getAllIds().then((files) => {
  files.forEach((file) => {
    dropboxService.readTodoList(file).then(console.log)
  });
});


//const authUrl = window.location.origin + window.location.pathname;
// const accessToken = window.localStorage.getItem("access_token");

// window.localStorage.setItem("access_token", this.dropbox.accessToken);
//const hashParams = new URLSearchParams(window.location.hash.replace("#", "?"));
//    if(hashParams.has("access_token")) {
//      this.dropbox.accessToken = hashParams.get("access_token");
//      return Promise.resolve(this.dropbox);
//    }
