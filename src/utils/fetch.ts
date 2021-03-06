// Since we aren't transpiling to babel can't use ES6 imports here.  Also we can't specify the Response and Request
// types for fetch since A) They happen automatically with import which we can't use and B) the reference paths would
// be different in downstream apps
const fetch    = require('isomorphic-fetch');
import Env     from '../utils/env';

export function getUri<T>(uri: Uri) {
    let params = {
        credentials: 'include',
        headers: {}
    };
    if (Env.auth) {
        params.headers['Authorization'] = Env.auth;
    }
    return fetch(uri.toString(), params).then(response => response.json() as Promise<T>);
}

export function postUri(uri: Uri, body: any) {
    let params = {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };
    if (Env.auth) {
        params.headers['Authorization'] = Env.auth;
    }
    return fetch(uri.toString(), params).then(response => response.json() );
}

export function putUri<T>(uri: Uri, body: any) {
    let params = {
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };
    if (Env.auth) {
        params.headers['Authorization'] = Env.auth;
    }
    return fetch(uri.toString(), params).then(response => response.json() as Promise<T> );
}
