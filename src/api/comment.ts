import Env from '../utils/env';
import { getUri, putUri } from '../utils/fetch';
import { IHydraCaseCommentFields, IHydraCaseComment } from '../models/comment';

export function getComments(caseNumber: string, fields?: IHydraCaseCommentFields): Promise<Array<IHydraCaseComment>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/case/${caseNumber}/comments`);
    if (fields && fields.length > 0) {
        uri.addQueryParam('fields', fields.join(','));
    }
    return getUri<Array<IHydraCaseComment>>(uri);
}

export function upsertComment(apiComment: IHydraCaseComment): Promise<IHydraCaseComment> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/case/comments`);
    return putUri<IHydraCaseComment>(uri, apiComment);
}
