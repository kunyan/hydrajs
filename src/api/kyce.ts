import Env                               from '../utils/env';
import { getUri, postUri }               from '../utils/fetch';
import { KyceResult }                    from '../models/kyce';
import { IHeaderParamOption }            from './../models/general';

export function runKyce(attachmentId: string): Promise<KyceResult> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/hardgrok/attachments/${attachmentId}/inspect`);
    let headerParam: IHeaderParamOption[] = [];
    headerParam.push({
        key: 'Accept',
        value: 'application/vnd.api.v1+json'
    });
    return getUri<KyceResult>(uri, headerParam);
}