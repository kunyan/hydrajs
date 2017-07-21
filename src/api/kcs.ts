import Env                               from '../utils/env';
import { getUri, postUri }               from '../utils/fetch';
import { KyceResult }                    from '../models/kyce';
import { IHeaderParamOption }            from './../models/general';
import {
    IKcsLinkedResources,
    IKcsResourceResult
} from './../models/kcs';

export function kycLinkResources(kcsLinkedResources: IKcsLinkedResources): Promise<IKcsResourceResult> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/resource`);
    return postUri(uri, kcsLinkedResources);
}