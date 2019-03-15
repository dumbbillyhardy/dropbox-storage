import {expect} from 'chai';
import {mock} from 'sinon';
import {TransientDAL} from '../dal/transient-dal';
import {TodoServiceDALBacked} from './todo-service-dalbacked';
import {Todo, TodoList} from '../todos/todo';

const todos = [new Todo('take out trash', false)];
const list = new TodoList('Chores', todos);

describe("TodoServiceDALBacked", () => {
  it('creates a todo list', async () => {
    const dal = new TransientDAL();
    const createMock = mock(dal)
      .expects("create")
      .once()
      .withArgs(list.title, list.toString())
      .returns(Promise.resolve(list.title));
    const service = new TodoServiceDALBacked(dal);

    const result = await service.createTodoList(list);

    createMock.verify();
    expect(result).to.deep.equal(list);
  });

  it('reads a todo list', async () => {
    const dal = new TransientDAL();
    const readMock = mock(dal)
      .expects("read")
      .once()
      .withArgs(list.title)
      .returns(Promise.resolve(list.toString()));
    const service = new TodoServiceDALBacked(dal);

    const result = await service.readTodoList(list.title);

    readMock.verify();
    expect(result).to.deep.equal(list);
  });

  it('updates a todo list', async () => {
    const dal = new TransientDAL();
    const updateMock = mock(dal)
      .expects("update")
      .once()
      .withArgs(list.title, list.toString())
      .returns(Promise.resolve(list.toString()));
    const service = new TodoServiceDALBacked(dal);

    const result = await service.updateTodoList(list);

    updateMock.verify();
    expect(result).to.deep.equal(list);
  });

  it('deletes a todo list', async () => {
    const dal = new TransientDAL();
    const deleteMock = mock(dal)
      .expects("delete")
      .once()
      .withArgs(list.title)
      .returns(Promise.resolve());
    const service = new TodoServiceDALBacked(dal);

    await service.deleteTodoList(list.title);

    deleteMock.verify();
  });
});
