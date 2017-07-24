import { getUri } from '../utils/fetch';
import Env from '../utils/env';
import { IUser } from '../models/user';

export function getUser(id: string): Promise<IUser> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/users/${id}`);
    return getUri<Promise<IUser>>(uri);
}