import {getUri}                 from '../utils/fetch';
import Env                      from '../utils/env';
import { IArrayResponse }       from '../models/general';
import { ISbr }                 from '../models/sbr';

//  This is not (programatically) linked to the list of SBRs in salesforce
export function getSbr(sbrId: string): Promise<ISbr> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/sbrs/${sbrId}`);
    return getUri<Promise<ISbr>>(uri);
}

export function getSbrs(): Promise<IArrayResponse<ISbr[]>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/sbrs`);
    return getUri<Promise<IArrayResponse<ISbr[]>>>(uri);
}