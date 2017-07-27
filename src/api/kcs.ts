import Env                               from '../utils/env';
import { getUri, postUri }               from '../utils/fetch';
import {
    IKcsLinkedResources,
    IKcsResourceResult,
    IKcsSolution
} from './../models/kcs';

export function linkKcsResources(kcsLinkedResources: IKcsLinkedResources): Promise<IKcsResourceResult> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/resource`);
    return postUri<Promise<any>>(uri, kcsLinkedResources);
}

export function getSolution(id: string): Promise<IKcsSolution> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/solutions/${id}`);
    return getUri<Promise<IKcsSolution>>(uri);
}