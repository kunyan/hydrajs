import {getUri, putUri} from '../utils/fetch';
import Env from '../utils/env';
import {ICase_Comment__c, ICase_Comment__c_fields, IAPIComment} from '../models/comment';

export function getComments(caseNumber: string, fields?: ICase_Comment__c_fields): Promise<Array<ICase_Comment__c>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/case/${caseNumber}/comments`);
    if (fields && fields.length > 0) {
        uri.addQueryParam('fields', fields.join(','));
    }
    return getUri<Array<ICase_Comment__c>>(uri);
}

export function upsertComment(apiComment: IAPIComment): Promise<IAPIComment> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/case/comments`);
    return putUri<IAPIComment>(uri, apiComment);
}
