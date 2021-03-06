import {Dropbox} from 'dropbox';
import {generateUUID} from './uuid';
import {DatabaseAbstractionLayer} from './dal';

/** copied for now */
export interface Metadata {
  name: string;
}

/** copied for now */
export interface ListFolderResult {
  /**
   * The files and (direct) subfolders in the folder.
   */
  entries: Array<Metadata>;
}

export class DropboxDAL implements DatabaseAbstractionLayer {
  constructor(readonly dropbox: Dropbox, readonly basePath: string = '') {}

  create(id: string, data: string): Promise<string> {
    const contents = new Blob([data], {type: "text/plain"});
    return this.dropbox.filesUpload({
      path: `${this.basePath}/${id}.txt`,
      mode: {
        ".tag": "overwrite",
      },
      contents,
    })
    .then(() => id);
  }

  read(id: string): Promise<string> {
    return this.dropbox.filesDownload({path: `${this.basePath}/${id}.txt`})
    .then((content) => {
      const reader = new FileReader();
      return new Promise<string>((resolve) => {
        reader.onload = function(e) {
          reader.onload = undefined;
          resolve(reader.result as string);
        };
        reader.readAsBinaryString((<any> content).fileBlob);
      });
    });
  }

  update(id: string, data: string): Promise<string> {
    const contents = new Blob([data], {type: "text/plain"});
    return this.dropbox.filesUpload({
      path: `${this.basePath}/${id}.txt`,
      mode: {
        ".tag": "overwrite",
      },
      contents,
    })
    .then(() => data);
  }

  delete(id: string): Promise<void> {
    return Promise.reject();
  }

  getAllIds(): Promise<string[]> {
    return this.dropbox.filesListFolder({path: this.basePath})
    .then(({entries}) => entries.map(m => m.name).map(n => n.replace(".txt", "")));
  }
}
