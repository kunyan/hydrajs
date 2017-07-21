import Env                               from '../utils/env';
import { getUri, postUri }               from '../utils/fetch';
import { IHeaderParamOption }            from './../models/general';
import {
    IKcsLinkedResources,
    IKcsResourceResult
} from './../models/kcs';

export function kcsLinkResources(kcsLinkedResources: IKcsLinkedResources): Promise<IKcsResourceResult> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/resource`);
    return postUri(uri, kcsLinkedResources);
}