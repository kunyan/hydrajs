// Since we aren't transpiling to babel can't use ES6 imports here
const fetch = require('isomorphic-fetch');

import Env    from '../utils/env'

export function fetchUri<T>(uri: Uri) {
    let getParams: RequestInit = {
        credentials: 'same-origin',
        headers: {}
    };
    if (Env.auth) {
        getParams.headers['Authorization'] = Env.auth;
    }
    return fetch(uri.toString(), getParams).then((response: IResponse) => response.json() as Promise<T>);
}

export function postUri(uri: string, body) {
    let postParams: RequestInit = {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };
    return fetch(uri.toString(), postParams).then((response: IResponse) => response.json() )
}
