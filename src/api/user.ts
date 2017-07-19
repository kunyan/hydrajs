import { getUri, postUri, deleteUri } from '../utils/fetch';
import Env from '../utils/env';
import {ICase, ICase_fields} from '../models/case';
import { ICaseJiraLink, IApiNewJiraLink } from '../models/resource';
import {Fields} from '../models/general';
import {ICaseEscalation} from '../models/escalation';
import { IUser } from '../models/user';

export function getUser(id: string): Promise<IUser> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/users/${id}`);
    return getUri<ICase>(uri);
}