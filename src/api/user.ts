import { getUri } from '../utils/fetch';
import Env from '../utils/env';
import { IUser } from '../models/user';

export function getUserBySSO(sso: string): Promise<IUser> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/users/sso/${sso}`);
    return getUri<Promise<IUser>>(uri);
}

export function getUserById(id: string): Promise<IUser> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/users/${id}`);
    return getUri<Promise<IUser>>(uri);
}