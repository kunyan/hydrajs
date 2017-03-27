// Since we aren't transpiling to babel can't use ES6 imports here.  Also we can't specify the Response and Request
// types for fetch since A) They happen automatically with import which we can't use and B) the reference paths would
// be different in downstream apps
const fetch    = require('isomorphic-fetch');
import Env     from '../utils/env';

function errorHandler(response) {
    return response.text().then(body => {
        throw new Error(body);
    });
}

function responseHandler<T>(response) {
    if (response.status === 500) {
        return errorHandler(response);
    } else {
        return response.status === 204 ? null : response.clone().json().catch((e) => {
            // The only possible error here is either response is null or parsing json fails.  Both of which
            // we just want to return the response, which would either be null or the actual api error
            return errorHandler(response);
        });
    }
}

export function getUri<T>(uri: Uri) {
    let params = {
        credentials: 'include',
        headers: {}
    };
    if (Env.auth) {
        params.headers['Authorization'] = Env.auth;
    }
    return fetch(uri.toString(), params).then(responseHandler);
}

export function postUri<T>(uri: Uri, body: any) {
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
    return fetch(uri.toString(), params).then(responseHandler);
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
    return fetch(uri.toString(), params).then(responseHandler);
}

export function deleteUri<T>(uri: Uri) {
    let params = {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    if (Env.auth) {
        params.headers['Authorization'] = Env.auth;
    }
    return fetch(uri.toString(), params);
}

export function deleteUriWithBody<T>(uri: Uri, body: any) {
    let params = {
        method: 'DELETE',
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
    return fetch(uri.toString(), params);
}