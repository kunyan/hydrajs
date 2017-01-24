// Since we aren't transpiling to babel can't use ES6 imports here.  Also we can't specify the Response and Request
// types for fetch since A) They happen automatically with import which we can't use and B) the reference paths would
// be different in downstream apps
const fetch    = require('isomorphic-fetch');
import Env     from '../utils/env';

export function fetchUri<T>(uri: Uri) {
    let getParams = {
        credentials: 'include',
        headers: {}
    };
    if (Env.auth) {
        getParams.headers['Authorization'] = Env.auth;
    }
    return fetch(uri.toString(), getParams).then(response => response.json() as Promise<T>);
}

export function postUri<T>(uri: Uri, body: any) {
    let postParams = {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };
    if (Env.auth) {
        postParams.headers['Authorization'] = Env.auth;
    }
    return fetch(uri.toString(), postParams).then(response => response.json() );
}

export function putUri<T>(uri: Uri, body: any) {
    let postParams = {
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };
    if (Env.auth) {
        postParams.headers['Authorization'] = Env.auth;
    }
    return fetch(uri.toString(), postParams).then(response => response.json() as Promise<T> );
}
