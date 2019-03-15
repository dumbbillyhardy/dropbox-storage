/*
const API_KEY = "fpcdyqdlll231rq";

import {Dropbox} from 'dropbox';

var dropbox = new Dropbox({clientId: API_KEY});
export const authenticated = new Promise((resolve) => {
    const accessToken = window.localStorage.getItem("access_token");
    if(accessToken) {
        dropbox.accessToken = accessToken;
        resolve(dropbox);
        return;
    }
    const hashParams = new URLSearchParams(window.location.hash.replace("#", "?"));
    if(hashParams.has("access_token")) {
        dropbox.accessToken = hashParams.get("access_token");
        window.localStorage.setItem("access_token", dropbox.accessToken);
        resolve(dropbox);
        return;
    }
});
export function getAuthUrl() {
    return dropbox.getAuthenticationUrl(window.location.origin + window.location.pathname);
}

export function listTodoLists() {
    return authenticated.then((dropbox) => dropbox.filesListFolder({path: ''}));
}
 */
