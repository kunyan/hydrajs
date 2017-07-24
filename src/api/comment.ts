import Env                  from '../utils/env';
import {getUri, putUri}     from '../utils/fetch';
import {ICaseComment}       from '../models/comment';

export function getComments(caseNumber: string, fields?: string[], limit?: number): Promise<Array<ICaseComment>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/${caseNumber}/comments`);
    if (fields && fields.length > 0) {
        uri.addQueryParam('fields', fields.join(','));
    }
    if (limit && limit > 0) {
        uri.addQueryParam('limit', limit);
    }
    return getUri<Promise<ICaseComment[]>>(uri);
}

export function upsertComment(comment: ICaseComment): Promise<ICaseComment> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/comments`);
    return putUri<Promise<ICaseComment>>(uri, comment);
}
