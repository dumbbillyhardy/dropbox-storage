import {Dropbox} from 'dropbox';

export class DropboxAuth {
  constructor(readonly dropbox: Dropbox, readonly accessToken: string) {}

  authenticate(): Promise<Dropbox> {
    if(this.accessToken) {
      (<any> this.dropbox).accessToken = this.accessToken;
      return Promise.resolve(this.dropbox);
    }
    return Promise.reject();
  }

  // getAuthUrl(): string {
  //   return this.dropbox.getAuthenticationUrl(this.authUrl);
  // }
}
