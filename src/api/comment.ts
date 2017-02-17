import Env from '../utils/env';
import { getUri, putUri } from '../utils/fetch';
import { ICaseCommentFields, ICaseComment } from '../models/comment';

export function getComments(caseNumber: string, fields?: ICaseCommentFields, limit?: number): Promise<Array<ICaseComment>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/case/${caseNumber}/comments`);
    if (fields && fields.length > 0) {
        uri.addQueryParam('fields', fields.join(','));
    }
    if (limit && limit > 0) {
        uri.addQueryParam('limit', limit);
    }
    return getUri<Array<ICaseComment>>(uri);
}

export function upsertComment(apiComment: ICaseComment): Promise<ICaseComment> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/case/comments`);
    return putUri<ICaseComment>(uri, apiComment);
}
