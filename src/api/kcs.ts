import Env                               from '../utils/env';
import { postUri }               from '../utils/fetch';
import {
    IKcsLinkedResources,
    IKcsResourceResult
} from './../models/kcs';

export function linkKcsResources(kcsLinkedResources: IKcsLinkedResources): Promise<IKcsResourceResult> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/resource`);
    return postUri(uri, kcsLinkedResources);
}