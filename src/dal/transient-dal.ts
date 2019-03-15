import {DatabaseAbstractionLayer} from './dal';
import {generateUUID} from './uuid';

export class TransientDAL implements DatabaseAbstractionLayer {
  private data = new Map<string, string>();

  create(data: string): Promise<string> {
    const id = generateUUID();
    this.data.set(id, data);
    return Promise.resolve(id);
  }

  read(id: string): Promise<string> {
    const data = this.data.get(id);
    if(!data) {
      return Promise.reject();
    }
    return Promise.resolve(data);
  }

  update(id: string, data: string): Promise<string> {
    if(!this.data.has(id)) {
      return Promise.reject();
    }
    this.data.set(id, data);
    return Promise.resolve(data);
  }

  delete(id: string): Promise<void> {
    const data = this.data.get(id);
    if(!data) {
      return Promise.reject();
    }
    this.data.delete(id);
    return Promise.resolve();
  }

  getAllIds(): Promise<string[]> {
    return Promise.resolve(Array.from(this.data.keys()));
  }
}
