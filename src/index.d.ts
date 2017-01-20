import {
    ICase_Comment__c,
    ICase_Comment__c_fields,
    IAPIComment
} from './models/comment';

declare namespace hydrajs {
    namespace kase {
        export function getComments(caseNumber: string, fields?: ICase_Comment__c_fields): Promise<Array<ICase_Comment__c>>;
        export function upsertComment(apiComment: IAPIComment): Promise<IAPIComment>;
    }
}

export default hydrajs;
