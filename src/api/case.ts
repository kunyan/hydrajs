import {fetchUri, putUri} from '../utils/fetch';
import Env from '../utils/env';
import {ICase_Comment__c, ICase_Comment__c_fields, IApiComment} from '../models/comment';

export function getComments(caseNumber: string, fields?: ICase_Comment__c_fields): Promise<Array<ICase_Comment__c>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/case/${caseNumber}/comments`);
    if (fields && fields.length > 0) {
        uri.addQueryParam('fields', fields.join(','));
    }
    return fetchUri<Array<ICase_Comment__c>>(uri);
}

export function newComment(apiComment: IApiComment): Promise<IApiComment> {
    if (apiComment.id) throw new Error(`Attempting to create a new comment but an id was specified, you should call editComment instead.`);
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/case/comments`);
    return putUri<IApiComment>(uri, apiComment);
}

export function editComment(apiComment: IApiComment): Promise<IApiComment> {
    if (!apiComment.id) throw new Error(`Attempting to edit comment but no comment id given.`);
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/case/comments`);
    return putUri<IApiComment>(uri, apiComment);
}
